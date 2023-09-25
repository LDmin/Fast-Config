import * as vscode from "vscode";
import { IConfigs } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand("fast-config.add-file", async () => {
    let configs =
      context.globalState.get<IConfigs>("fast-config.configs") ?? [];

    const uris = await vscode.window.showOpenDialog();
    const uri = uris?.[0].path;
    if (!uri) return;
    if (configs.find((c) => c.uri === uri)) {
      vscode.window.showErrorMessage("You have already added this file!");
      return;
    }
    const _arr = uri.split("/");

    let defaultTitle = _arr[_arr.length - 1];
    let title = await vscode.window.showInputBox({
      placeHolder: "文件描述",
      value: defaultTitle,
    });

    if (!title) {
      const _arr = uri.split("/");
      title = _arr[_arr.length - 1];
    }

    configs.push({
      uri,
      title,
    });

    context.globalState.update("fast-config.configs", configs);
    vscode.commands.executeCommand("fast-config.refresh-file");
  });
export default disposable;
