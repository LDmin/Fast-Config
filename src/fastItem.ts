import { TreeItem, TreeItemCollapsibleState, ThemeIcon } from "vscode";
import * as path from "path";

export interface IFast {
  uri: string;
  title: string;
}

export type IConfigs = Array<IFast>;

export class FastTreeItem extends TreeItem {
  constructor(fast: IFast) {
    super(fast.uri, TreeItemCollapsibleState.None);
    this.label = fast.title;
    this.id = fast.uri;
    this.description = fast.uri;
    this.tooltip = fast.uri;
    this.iconPath = new ThemeIcon("file");
    this.command = {
      title: "fast config",
      command: "fast-config.open-file",
      arguments: [fast.uri, fast.title],
    };
  }
}
