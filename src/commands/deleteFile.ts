import * as vscode from "vscode";
import { FastTreeItem, IConfigs, IFast } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.delete-file",
    async (fast: FastTreeItem) => {
      let configs =
        context.globalState.get<IConfigs>("fast-config.configs") ?? [];

      configs = configs.filter((c) => c.uri !== fast.id);

      context.globalState.update("fast-config.configs", configs);
      vscode.commands.executeCommand("fast-config.refresh-file");
    }
  );
export default disposable;
