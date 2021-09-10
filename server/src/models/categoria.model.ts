import { Schema, model } from "mongoose"

interface CategoriaInterface {
    nome_categoria: string,
    timestamps: boolean,
}

const schema = new Schema<CategoriaInterface>(
    {
        nome_categoria: String
    },
    {
        timestamps: true
    }
)

const CategoriaModel = model<CategoriaInterface>('Categoria', schema)

export default CategoriaModel