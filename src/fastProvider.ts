import * as vscode from "vscode";
import { FastTreeItem, IConfigs } from "./fastItem";

export class FastTreeProvider implements vscode.TreeDataProvider<FastTreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<any> =
    new vscode.EventEmitter<any>();

  private _context: vscode.ExtensionContext;

  readonly onDidChangeTreeData: vscode.Event<any> =
    this._onDidChangeTreeData.event;

  constructor(context: vscode.ExtensionContext) {
    this._context = context;
  }

  refresh() {
    this._onDidChangeTreeData.fire(null);
  }

  getTreeItem(element: FastTreeItem) {
    return element;
  }

  getChildren() {
    const configs =
      this._context.globalState.get<IConfigs>("fast-config.configs") ?? {};

    const items: FastTreeItem[] = [];
    Object.values(configs).forEach((c) => {
      items.push(
        new FastTreeItem({
          uri: c.uri,
          title: c.title,
          order: c.order,
        })
      );
    });

    return items;
  }

  getParent(element: FastTreeItem) {
    return null;
  }
}
