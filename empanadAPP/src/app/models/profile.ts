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

    getEmpanadaList(): Tuple[] {
        return this.empanadaList;
    }

    addEmpanada(empanada: Empanada, quantity: number) {
        const existingEmpanada = this.empanadaList.find(item => item.empanada.id === empanada.id);

        if (quantity === 0) {
            // Remove the empanada from the list if the quantity is zero
            if (existingEmpanada) {
                this.empanadaList = this.empanadaList.filter(item => item.empanada.id !== empanada.id);
            }
        } else {
            if (existingEmpanada) {
                // If the empanada already exists in the list, modify the quantity
                existingEmpanada.quantity = quantity;
            } else {
                // If the empanada doesn't exist, add it to the list
                this.empanadaList.push({ empanada, quantity });
            }
        }
        this.updateListOrder();
    }

    updateListOrder() {
        // Sort the empanadaList based on quantity and then by ID
        this.empanadaList.sort((a, b) => {
          // Sort by quantity in descending order (highest quantity first)
          if (a.quantity > b.quantity) return -1;
          if (a.quantity < b.quantity) return 1;
          // If quantities are equal, sort by ID in ascending order
          if (a.empanada.id < b.empanada.id) return -1;
          if (a.empanada.id > b.empanada.id) return 1;

          return 0;
        });
      }

}

