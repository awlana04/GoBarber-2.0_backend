import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateForeignKeyBetweenBarbersAndAppointments1627003537389 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('appointments', new TableForeignKey({
      name: 'AppointmentProvier',
      columnNames: ['provider_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvier');
  }
}
