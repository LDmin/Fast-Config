import * as vscode from "vscode";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.open-file",
    async (a: string) => {
      vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(a));
    }
  );
export default disposable;
