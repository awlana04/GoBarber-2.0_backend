import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateImagesForBarber1627008519848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'barber_id',
          type: 'uuid'
        }
      ],
      foreignKeys: [
        {
          name: 'BarberImages',
          columnNames: ['barber_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'barbers',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
