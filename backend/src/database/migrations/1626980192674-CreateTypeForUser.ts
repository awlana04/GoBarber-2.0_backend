import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateTypeForUser1626980192674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'type',
      type: 'boolean'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'type');
  }
}
