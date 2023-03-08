import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class Courier {

    @PrimaryColumn()
    id: number
    
    @Column()
    max_capacity: number
}
