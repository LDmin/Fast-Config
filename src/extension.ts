// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import commands from "./commands";
import { FastTreeProvider } from "./fastProvider";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "fast-config" is now active!');

  context.subscriptions.push(...commands(context));

  const fastTree = new FastTreeProvider(context);

  vscode.window.registerTreeDataProvider("fast-configs", fastTree);

  vscode.commands.registerCommand("fast-config.fast-tree-refresh", () =>
    fastTree.refresh()
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
