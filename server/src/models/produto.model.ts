import { Schema, model } from "mongoose"

interface ProdutoInterface {
    nome_produto: string,
    descricao_produto: string,
    marca_produto: string,
    preco_produto: number,
    qtd_produto: number,
    categoria_produto: any, //Buscar o tipo correto
    timestamps: boolean,
}

const schema = new Schema<ProdutoInterface>(
    {
        nome_produto: String,
        descricao_produto: String,
        marca_produto: String,
        preco_produto: Number,
        qtd_produto: { type: Number, default: 0 },
        categoria_produto: {
            type: Schema.Types.ObjectId,
            ref: "categorias",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const ProdutoModel = model<ProdutoInterface>('Produto', schema)

export default ProdutoModel