export class Empanada {
    name: string;
    id: number;
    price: number;
    description: string;
    type: string;

    constructor(name: string, price: number, description: string, type: string, id: number) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
        this.id = id;
    }
}
