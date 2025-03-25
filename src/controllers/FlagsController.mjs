import Joi from 'joi';
import { StoreFlag } from '../actions/StoreFlag.mjs';
import { Flag } from '../models/Flag.mjs';

export async function index(req, res) {
    const query = req.query;
    if (query.limit && query.offset) {
        const limit = parseInt(query.limit);
        const offset = parseInt(query.offset);
        const flags = await Flag.findAll({ limit, offset });
        return res.json({ message: 'Flags index', data: flags });
    }
    if(query.status){
        const flags = await Flag.findAll({ where: { status: query.status } });
        return res.json({ message: 'Flags index', data: flags });
    }
    const flags = await Flag.findAll();
    res.json({ message: 'Flags index', data: flags, pagination: { total: flags.length } });
}

export async function show(req, res) {
    const idParam = req.params.id;

    const flag = await Flag.findByPk(idParam);
    res.json({ message: 'Flags show', data: flag });
}

export async function store(req, res) {
    const schema = Joi.object({
        name: Joi.number().required(),
        status: Joi.string().required()
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const newFlag = await StoreFlag(req.body);
    res.status(201).json({ message: 'Flags store', data: newFlag });

}


export async function update(req, res) {
    const idParam = req.params.id;
    const schema = Joi.object({
        name: Joi.number().required(),
        status: Joi.string().required()
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const updatedFlag = await Flag.update(req.body, { where: { id: idParam } });


    res.json({ message: 'Flags update' });
}

export async function destroy(req, res) {

    const idParam = req.params.id;
    await Flag.destroy({ where: { id: idParam } });

    res.json({ message: 'Flags destroy' });
}
