import { MigrationInterface, QueryRunner } from "typeorm";

export class init1678190555743 implements MigrationInterface {
  name = "init1678190555743";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "courier" ("id" integer NOT NULL, "max_capacity" integer NOT NULL, CONSTRAINT "PK_94613ec7dc72f7dfa2d072a31cf" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "courier"`);
  }
}
