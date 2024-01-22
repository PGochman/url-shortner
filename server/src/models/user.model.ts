import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { UrlData } from "./urldata.model";

@Table({
    timestamps: false,
    tableName: "user"
})

export class User extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    id !: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userName !: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password !: string

}