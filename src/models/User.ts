import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    @Column({
        nullable: true
    })
    last_name: string

    @Column()
    password: string

    @Column({
        length: 11
    })
    phone_number: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        nullable: true
    })
    avatar: string


    @Column({
        nullable: true
    })
    zip_code: string

    @Column({
        nullable: true
    })
    state: string

    @Column({
        nullable: true
    })
    cyte: string







    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}