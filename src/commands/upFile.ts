import * as vscode from "vscode";
import { fastTreeChangeEvent } from "../fastProvider";
import { FastTreeItem, IConfigs, IFast } from "../fastItem";

const disposable = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "fast-config.up-file",
    async (fast: FastTreeItem) => {
      const configs =
        context.globalState.get<IConfigs>("fast-config.configs") ?? [];

      let currentIndex = 0;
      let current: IFast;
      let pre: IFast;
      configs.forEach((c, i) => {
        if (c.uri === fast.id && i > 0) {
          currentIndex = i;
          current = c;
          pre = configs[i - 1];
        }
      });

      if (currentIndex === 0) {
        return;
      }

      // 交换
      configs[currentIndex] = pre!;
      configs[currentIndex - 1] = current!;

      fastTreeChangeEvent.fire(null);
    }
  );
export default disposable;
