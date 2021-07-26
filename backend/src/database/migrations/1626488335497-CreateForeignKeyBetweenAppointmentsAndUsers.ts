import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateForeignKeyBetweenAppointmentsAndUsers1626488335497 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('appointments', new TableForeignKey({
      name: 'AppointmentUser',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentUser');
  }
}
