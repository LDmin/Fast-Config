import * as vscode from "vscode";
import { fastTreeChangeEvent } from "../fastProvider";
import { FastTreeItem, IConfigs, IFast } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.down-file",
    async (fast: FastTreeItem) => {
      const configs =
        context.globalState.get<IConfigs>("fast-config.configs") ?? [];

      let currentIndex = configs.length - 1;
      let current: IFast;
      let next: IFast;
      configs.forEach((c, i) => {
        if (c.uri === fast.id && i < configs.length - 1) {
          currentIndex = i;
          current = c;
          next = configs[i + 1];
        }
      });

      if (currentIndex === configs.length - 1) {
        return;
      }

      // 交换
      configs[currentIndex] = next!;
      configs[currentIndex + 1] = current!;

      fastTreeChangeEvent.fire(null);
    }
  );
export default disposable;
