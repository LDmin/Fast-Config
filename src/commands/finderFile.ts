import * as vscode from "vscode";
import { FastTreeItem } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.finder-file",
    async (fast: FastTreeItem) => {
      try {
        await vscode.commands.executeCommand(
          "revealFileInOS",
          vscode.Uri.file(fast.id!)
        );
      } catch {
        vscode.window.showErrorMessage("文件不存在！");
      }
    }
  );
export default disposable;
