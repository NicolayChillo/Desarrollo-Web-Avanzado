import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js"

class Seguro extends Model{
    calcularCuota(){
        const monto = this.montoAceptado;

        if(monto < 50000){
            const cuota = monto * 0.03;
            return {porcentaje: "3%", cuota};
        } else {
            const cuota = monto * 0.02;
            return {porcentaje: "2%", cuota};
        }
    }
}

Seguro.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING(80), allowNull: false },
        montoAceptado: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        sequelize,
        modelName: "Seguro",
        timestamps: true,
    }
);

export default Seguro;