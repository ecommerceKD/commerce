const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_produto: String,
    descricao_produto: String,
    marca_produto: String,
    preco_produto: Number,
    qtd_produto: {type: Number, default: 0},
    categoria_produto: {type: Schema.Types.ObjectId,
    ref: "categorias",
    required: true}
},
{
    timestamps:true
});

const produtos = mongoose.model('Produtos', DataSchema);
module.exports = produtos;