import * as vscode from "vscode";
import { FastTreeItem, IConfigs, IFast } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.delete-file",
    async (fast: FastTreeItem) => {
      const configs =
        context.globalState.get<IConfigs>("fast-config.configs") ?? {};

      delete configs[fast.id!];

      context.globalState.update("fast-config.configs", configs);
      vscode.commands.executeCommand("fast-config.fast-tree-refresh");
    }
  );
export default disposable;
