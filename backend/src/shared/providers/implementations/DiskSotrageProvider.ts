import fs from 'fs';
import path from 'path';

import IStorageProvider from '../models/IStorageProvider';

import upload from '../../../config/upload';

export default class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.appendFile(
      path.resolve(upload.tmpFolder, file),
      path.resolve(upload.uploadsFolder, file)
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    return await fs.promises.unlink(path.resolve(upload.tmpFolder, file));
  }
}
