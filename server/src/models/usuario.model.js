const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_usuario: {type:String, required: true},
    email_usuario: {type:String, required: true},
    senha1_usuario: {type:String, required: true},
    senha2_usuario: {type:String, required: true},
    eAdmin: {type: Number, default: 0},
    //endereço
    rua_usuario: {type: String},
    bairro_usuario: {type: String},
    cidade_usuario: {type: String},
    estado_usuario: {type: String},
    num_usuario: {type: Number},
    cep_usuario: {type: Number},
    //telefone
    tipo_telefone: {type:String, enum: ['Celular', 'Fixo']},
    numero_telefone1: {type: Number},
    numero_telefone2: {type: Number}
},
{
    timestamps:true
});

const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;