import * as vscode from "vscode";
import { fastTreeChangeEvent } from "../fastProvider";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand("fast-config.refresh-file", async () => {
    fastTreeChangeEvent.fire(null);
  });
export default disposable;
