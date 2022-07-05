import fs from 'fs';
import path from 'path';

import IDiskStorageAdapter from '../models/i-disk-storage-adapter';

import upload from '@core/config/upload';

export default class DiskStorageProvider implements IDiskStorageAdapter {
  public async saveFile(file: string): Promise<string> {
    if (process.env.NODE_ENV === 'test') {
      return file;
    }

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
