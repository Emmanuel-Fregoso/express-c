import { Flag } from '../models/Flag.mjs';

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
    // Validate the request
    if (!req.body.name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    if (!req.body.value) {
        return res.status(400).json({ message: 'Value is required' });
    }
    const newFlag = new Flag(req.body.name, req.body.value);
    res.json({ message: 'Flags store', data: newFlag });
}


export function update(req, res) {
    
    res.json({ message: 'Flags update' });
}

export function destroy(req, res) {

    res.json({ message: 'Flags destroy' });
}
