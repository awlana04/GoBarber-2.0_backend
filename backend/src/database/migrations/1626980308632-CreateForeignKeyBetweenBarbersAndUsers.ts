import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateForeignKeyBetweenBarbersAndUsers1626980308632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('barbers', new TableForeignKey({
      name: 'BarberAccount',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('barbers', 'BarberAccount');
  }
}
