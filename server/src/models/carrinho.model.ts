import { Schema, model } from "mongoose"

interface CarrinhoInterface {
    nome_vendaProd: string,
    descricao_produto: string,
    marca_produto: string,
    preco_produto: number,
    qtd_produto: any, //Alterar para tipo correto
    categoria_produto: any, //Alterar para tipo correto
    timestamps: boolean
}

const schema = new Schema<CarrinhoInterface>(
    {
        nome_vendaProd: String,
        descricao_produto: String,
        marca_produto: String,
        preco_produto: Number,
        qtd_produto: { 
            type: Number, 
            default: 0 
        },
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

const CarrinhoModel = model<CarrinhoInterface>('Carrinho', schema)

export default CarrinhoModel