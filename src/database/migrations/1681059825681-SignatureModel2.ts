import { MigrationInterface, QueryRunner } from "typeorm";

export class SignatureModel21681059825681 implements MigrationInterface {
    name = 'SignatureModel21681059825681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "signature" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "signature" ADD "price" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "signature" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "signature" ADD "price" integer NOT NULL`);
    }

}
