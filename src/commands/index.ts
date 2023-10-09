import * as vscode from "vscode";

import addFile from "./addFile";
import deleteFile from "./deleteFile";
import openFile from "./openFile";
import refreshFile from "./refreshFile";
import upFile from "./upFile";
import downFile from "./downFile";
import finderFile from "./finderFile";
import copyPath from "./copyPath";

export default function (context: vscode.ExtensionContext) {
  return [
    addFile,
    deleteFile,
    openFile,
    refreshFile,
    upFile,
    downFile,
    finderFile,
    copyPath,
  ].map((c) => c(context));
}
