import * as vscode from "vscode";

import addFile from "./addFile";
import deleteFile from "./deleteFile";
import openFile from "./openFile";

export default function (context: vscode.ExtensionContext) {
  return [addFile, deleteFile, openFile].map((c) => c(context));
}
