import { Empanada } from "./empanada";

interface Tuple {
    empanada: Empanada;
    quantity: number;
}

export class Profile {
    name: string;
    empanadaList: Tuple[];

    constructor(name: string, empanadaList: Tuple[]) {
        this.name = name;
        this.empanadaList = empanadaList;
    }
}

