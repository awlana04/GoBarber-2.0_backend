export default interface IDiskStorageAdapter {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
