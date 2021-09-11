import express from 'express';
import Categoria from '../models/categoria.model'

async function index(req: express.Request, res: express.Response) {
    const categoria = await Categoria.find()
    return res.json(categoria)
}

async function create(req: express.Request, res: express.Response) {
    const { nome_categoria } = req.body
    let data = {}
    let categoria = await Categoria.findOne({ nome_categoria })

    if(!categoria) {
        data = { nome_categoria}
        categoria = await Categoria.create(data)
        return res.status(200).json(categoria)
    } else {
        return res.status(500).json(categoria)
    }
}

export {index, create}