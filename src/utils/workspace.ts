import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const FOLDERS = ["assets", "bin"] as const;
type WorkspaceFolders = typeof FOLDERS[number];

export class Workspace {
  static instance?: Workspace;
  static path: string;
  static dirs: Record<WorkspaceFolders, string>;

  private static readonly FOLDERS = FOLDERS;

  static async setup (runtimeName: string): Promise<Workspace> {
    Workspace.path = join(process.env.LOCALAPPDATA || tmpdir(), runtimeName);
    Workspace.dirs = {} as Record<WorkspaceFolders, string>;

    // Iterate over the FOLDERS array and store the paths in the dirs object
    for (const folder of Workspace.FOLDERS) {
      Workspace.dirs[folder] = join(Workspace.path, folder);
    }

    // Directories to be created for the workspace
    await Promise.all([
      mkdir(Workspace.dirs.assets, { recursive: true }),
      mkdir(Workspace.dirs.bin, { recursive: true })
    ]);

    Workspace.instance = new Workspace();
    return Workspace.instance;
  }

  write (filename: string, data: string) {
    const filePath = join(Workspace.path, filename);
    return writeFile(filePath, data);
  }

  static getPath (folder: WorkspaceFolders, filename: string) {
    return folder ? join(Workspace.dirs[folder], filename) : join(Workspace.path, filename);
  }
}
