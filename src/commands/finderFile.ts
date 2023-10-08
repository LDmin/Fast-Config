import * as vscode from "vscode";
import { FastTreeItem, IConfigs, IFast } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.finder-file",
    async (fast: vscode.TextDocument) => {
      console.log(fast);

      vscode.window.showTextDocument(fast);
    }
  );
export default disposable;
