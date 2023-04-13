import { MigrationInterface, QueryRunner } from "typeorm";

export class UserModel1681162090232 implements MigrationInterface {
    name = 'UserModel1681162090232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying, "password" character varying NOT NULL, "phone_number" character varying(11) NOT NULL, "email" character varying NOT NULL, "isFirstAcess" boolean NOT NULL DEFAULT false, "avatar" character varying, "zip_code" character varying, "state" character varying, "cyte" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
