import { type } from "os";

export class Empanada {
    name: string;
    price: number;
    description: string;
    type: string;

    constructor(name: string, price: number, description: string, type: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
    }
}
