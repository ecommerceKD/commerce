const Categoria = require('../models/categoria.model');

module.exports = {
    async index(req, res){
        const categoria = await Categoria.find();
        return res.json(categoria);
    },
    async create(req, res){
        const {nome_categoria} = req.body;
        let data = {}
        let categoria = await Categoria.findOne({
            nome_categoria
        });

        if(!categoria){
            data = {nome_categoria};
            categoria = await Categoria.create(data);
            return res.status(200).json(categoria)
        }else{
            return res.status(500).json(categoria);
        }
    } 
}