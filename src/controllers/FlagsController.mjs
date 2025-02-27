
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
    
    res.json({ message: 'Flags store' });
}


export function update(req, res) {
    
    res.json({ message: 'Flags update' });
}

export function destroy(req, res) {

    res.json({ message: 'Flags destroy' });
}
