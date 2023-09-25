import { TreeItem, TreeItemCollapsibleState } from "vscode";
import * as path from "path";

export interface IFast {
  uri: string;
  title: string;
}

export type IConfigs = Array<IFast>;

export class FastTreeItem extends TreeItem {
  constructor(fast: IFast) {
    super("fast config", TreeItemCollapsibleState.None);
    this.label = fast.title;
    this.id = fast.uri;
    this.description = fast.uri;
    this.tooltip = "点击打开文件";
    this.iconPath = {
      light: path.join(
        __filename,
        "..",
        "..",
        "resources",
        "light",
        "file.svg"
      ),
      dark: path.join(__filename, "..", "..", "resources", "dark", "file.svg"),
    };
    this.command = {
      title: "fast config",
      command: "fast-config.open-file",
      arguments: [fast.uri, fast.title],
    };
  }
}
