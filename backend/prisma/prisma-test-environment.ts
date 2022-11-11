import dotenv from 'dotenv';
import path from 'path';
import NodeEnvironment from 'jest-environment-node';
import { execSync } from 'child_process';
import crypto from 'crypto';
import { Client } from 'pg';

import type { Config } from '@jest/types';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.test') });

const prismaBinary = './node_modules/.bin/prisma';

export default class PrismaTestEnvironment extends NodeEnvironment {
  private schema: string;
  private connectionString: string;

  constructor(config: Config.ProjectConfig) {
    super(config);

    const dbUser = process.env.DATABASE_USER;
    const dbPass = process.env.DATABASE_PASS;
    const dbHost = process.env.DATABASE_HOST;
    const dbPort = process.env.DATABASE_PORT;
    const dbName = process.env.DATABASE_NAME;

    this.schema = `test_${crypto.randomUUID()}`;
    this.connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`;
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    // execSync(
    //   `docker run --name ${process.env.DATABASE_NAME} -p ${process.env.DATABASE_PORT}:${process.env.DATABASE_PORT} -e POSTGRES_PASSWORD=${process.env.DATABASE_PASS} -d postgres`
    // );

    execSync(`${prismaBinary} migrate deploy`);

    return super.setup();
  }

  async teardown() {
    // execSync(`docker stop ${process.env.DATABASE_NAME}`);
    // execSync(`docker rm ${process.env.DATABASE_NAME}`);

    const client = new Client({
      connectionString: this.connectionString,
    });

    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);

    await client.end();
  }
}
