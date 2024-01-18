import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "urldata"
})

export class UrlData extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    originalURL !: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    shortURL !: string
}