import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.model";

@Table({
    timestamps: false,
    tableName: "urldatas"
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

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    clickedTimes !: number
}