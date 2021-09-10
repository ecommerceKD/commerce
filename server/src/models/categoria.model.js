const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_categoria: String
},
{
    timestamps:true
});

const categorias = mongoose.model('Categorias', DataSchema);
module.exports = categorias;