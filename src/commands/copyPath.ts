import * as vscode from "vscode";
import clipboard from "clipboardy";

import { FastTreeItem } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.copy-path",
    async (fast: FastTreeItem) => {
      clipboard.writeSync(fast.id!);
    }
  );
export default disposable;
