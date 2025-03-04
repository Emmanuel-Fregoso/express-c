import Joi from 'joi';

export function index(req, res) {
    const allFlags = [
        { id: 1, name: 'flag1' },
        { id: 2, name: 'flag2' },
        { id: 3, name: 'flag3' },
    ];
    res.json({ message: 'Flags index', data: allFlags });
}

export function show(req, res) {
    const flag = { id: 1, name: 'flag1' };
    res.json({ message: 'Flags show', data: flag });
}

export function store(req, res) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    const newFlag = { id: 10, name: req.body.name, description: req.body.description };
    res.status(201).json({ message: 'Flags store', data: newFlag });
}


export function update(req, res) {
    
    res.json({ message: 'Flags update' });
}

export function destroy(req, res) {

    res.json({ message: 'Flags destroy' });
}
