import { Entity, PrimaryColumn, Column, Index, Check } from "typeorm";

@Entity()
@Check("id > 0")
@Check("max_capacity >= 0")
export class Courier {
  @PrimaryColumn({ type: "integer", nullable: false })
  id: number;

  @Column({ type: "integer", nullable: false })
  @Index()
  max_capacity: number;
}
