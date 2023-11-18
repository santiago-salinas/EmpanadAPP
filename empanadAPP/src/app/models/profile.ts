import { Empanada } from "./empanada";

interface Tuple {
    empanada: Empanada;
    quantity: number;
}

export interface TupleProfile {
    profile: Profile;
    selected: boolean;
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
        const existingEmpanadaIndex = this.empanadaList.findIndex(item => item.empanada.id === empanada.id);
      
        if (quantity === 0) {
          // Remove the empanada from the list if the quantity is zero
          if (existingEmpanadaIndex !== -1) {
            this.empanadaList.splice(existingEmpanadaIndex, 1);
          }
        } else {
          if (existingEmpanadaIndex !== -1) {
            // If the empanada already exists in the list, modify the quantity
            this.empanadaList[existingEmpanadaIndex].quantity = quantity;
          } else {
            // If the empanada doesn't exist, add it to the list
            this.empanadaList.push({ empanada, quantity });
          }
        }
      
        console.log(this.empanadaList);
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

      getEmpanadaQuantity(empanadaData : Empanada): number{
        const existingEmpanada = this.empanadaList.find(item => item.empanada.id === empanadaData.id);
        if (existingEmpanada) {
          return existingEmpanada.quantity;
        }
        return 0;
      }
}

