import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateBarber1626979277905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'barbers',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'user_id',
          type: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'location',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'images',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('barbers');
  }
}
