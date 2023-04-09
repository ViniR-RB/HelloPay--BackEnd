import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity()
export class Signature extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar')
    code: string

    @Column('float')
    price: number







    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}