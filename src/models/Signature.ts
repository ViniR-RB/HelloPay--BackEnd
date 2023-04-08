import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity()
export class Signature {
    @PrimaryGeneratedColumn('uuid')
    code: string

    @Column()
    valor: number







    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}