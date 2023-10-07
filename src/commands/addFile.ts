import * as vscode from "vscode";
import * as fs from "fs";
import { IConfigs } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand("fast-config.add-file", async () => {
    let configs =
      context.globalState.get<IConfigs>("fast-config.configs") ?? [];

    let uri: string;
    const type = await vscode.window.showQuickPick(["填写路径", "选择文件"]);
    switch (type) {
      case "填写路径":
        let input_uri = await vscode.window.showInputBox({
          placeHolder: "请输入路径...",
        });
        if (input_uri) {
          if (!fs.existsSync(input_uri)) {
            vscode.window.showErrorMessage(`文件不存在: ${input_uri}`);
            return;
          }
          uri = input_uri;
        } else {
          return;
        }
        break;
      case "选择文件":
        const uris = await vscode.window.showOpenDialog();
        let select_uri = uris?.[0]?.path;
        if (select_uri) {
          uri = select_uri;
        } else {
          return;
        }
        break;

      default:
        return;
    }
    if (configs.find((c) => c.uri === uri)) {
      vscode.window.showErrorMessage("You have already added this file!");
      return;
    }
    const _arr = uri.split("/");

    let defaultTitle = _arr[_arr.length - 1];
    let title = await vscode.window.showInputBox({
      placeHolder: "文件描述...",
      value: defaultTitle,
    });

    if (!title) {
      return;
    }

    configs.push({
      uri,
      title,
    });

    context.globalState.update("fast-config.configs", configs);
    vscode.commands.executeCommand("fast-config.refresh-file");
  });
export default disposable;
