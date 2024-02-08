import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { UrlData } from "./urldata.model";

@Table({
    timestamps: false,
    tableName: "users"
})

export class User extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    id !: string

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    user_name !: string

    @Column({
        type: DataType.TEXT,
        allowNull: true,
        defaultValue: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
    })
    image_url !: string

}