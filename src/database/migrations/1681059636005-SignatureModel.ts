import { MigrationInterface, QueryRunner } from "typeorm";

export class SignatureModel1681059636005 implements MigrationInterface {
    name = 'SignatureModel1681059636005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "signature" RENAME COLUMN "pricce" TO "price"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "signature" RENAME COLUMN "price" TO "pricce"`);
    }

}
