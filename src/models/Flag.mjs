export class Flag {
    constructor(name, value) {
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('Invalid name');
        }
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error('Invalid value');
        }
        this.name = name;
        this.value = value;
    }
}