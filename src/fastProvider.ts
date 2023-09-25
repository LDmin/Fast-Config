import * as vscode from "vscode";
import { FastTreeItem, IConfigs } from "./fastItem";

export const fastTreeChangeEvent = new vscode.EventEmitter<null>();

export class FastTreeProvider implements vscode.TreeDataProvider<FastTreeItem> {
  private _context: vscode.ExtensionContext;

  readonly onDidChangeTreeData: vscode.Event<any> = fastTreeChangeEvent.event;

  constructor(context: vscode.ExtensionContext) {
    this._context = context;
  }

  refresh() {
    fastTreeChangeEvent.fire(null);
  }

  getTreeItem(element: FastTreeItem) {
    return element;
  }

  getChildren() {
    const configs =
      this._context.globalState.get<IConfigs>("fast-config.configs") ?? [];

    console.log(configs);

    let items: FastTreeItem[] = [];
    configs.forEach((c, i) => {
      items.push(
        new FastTreeItem({
          uri: c.uri,
          title: c.title,
        })
      );
    });

    return items;
  }

  getParent(element: FastTreeItem) {
    return null;
  }
}
