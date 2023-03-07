import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class Courier {

    @PrimaryColumn()
    id: number
    
    @Column()
    maxCapacity: number
}
