import { MigrationInterface, QueryRunner } from "typeorm";

export class init1678348777622 implements MigrationInterface {
  name = "init1678348777622";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "courier" ("id" integer NOT NULL, "max_capacity" integer NOT NULL, CONSTRAINT "CHK_e7cd84d544aa7091de8d910824" CHECK (max_capacity >= 0), CONSTRAINT "CHK_99d9a57409c35ca4549d8d5c6b" CHECK (id > 0), CONSTRAINT "PK_94613ec7dc72f7dfa2d072a31cf" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_22076fbf8d0ff13f78cc225ced" ON "courier" ("max_capacity") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_22076fbf8d0ff13f78cc225ced"`
    );
    await queryRunner.query(`DROP TABLE "courier"`);
  }
}
