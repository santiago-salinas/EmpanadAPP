import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router'; // Assuming you're using Angular Router

import { EmpanadaListableComponent } from 'src/app/reusables/empanada-listable/empanada-listable.component';
import { ProfileListableComponent } from 'src/app/reusables/profile-listable/profile-listable.component';
import { Empanada } from 'src/app/models/empanada';
import { EmpanadasService } from 'src/app/services/empanadas.service';
import { Profile } from 'src/app/models/profile';

interface Tuple {
  empanada: Empanada;
  quantity: number;
}

interface TupleProfile {
  profile: Profile;
  selected: boolean;
}

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // Add RouterModule if you're using Angular Router
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    EmpanadaListableComponent,
    ProfileListableComponent,
  ],
})

export class SelectionComponent {
  empanadaList: Tuple[] = [];
  fakeProfile: Profile = new Profile('', []);
  allProfiles: TupleProfile[] = [];

  constructor(private empanadasService: EmpanadasService) {
    this.empanadasService.resetActiveProfiles();
    this.allProfiles = this.empanadasService.getProfiles().map(profile => ({
      profile,
      selected: false
    }));
  }


  getProfiles(): TupleProfile[] {
    this.onActiveProfileChanged();
    return this.allProfiles;
  }

  onActiveProfileChanged() {
    console.log(this.empanadaList);
    this.empanadaList = [];
    //Get active profiles
    const activeProfiles = this.empanadasService.getActiveProfiles();
    console.log(activeProfiles);
    
    //Get empanadasList from every profile, and add them to the empanadaList, group by id, add to the quantity if its already in the list
    activeProfiles.forEach(profile => {
      profile.empanadaList.forEach(empanada => {
        const existingEmpanada = this.empanadaList.find(item => item.empanada.id === empanada.empanada.id);
    
        if (existingEmpanada) {
          // If the empanada already exists, update the quantity
          existingEmpanada.quantity += empanada.quantity;
        } else {
          // If the empanada doesn't exist, add a deep copy to the empanadaList
          this.empanadaList.push(this.deepCopy(empanada));
        }
      });
    });
    this.updateListOrder();
  }

  deepCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  openWhatsapp() {
    const phoneNumber = localStorage.getItem('phone');
    const text = this.getFormattedText();
    const text2 = this.getFormattedText2();

    console.log('Formatted Text:', text);
    console.log(text2);
    
    if (phoneNumber) {
      const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
      window.open(whatsappURL, '_blank');
    } else {
      // Handle the case where the phone number is not found in localStorage
      alert('Phone number not found in localStorage');
      //Ask for number
      const phone = prompt('Please enter business phone number +598 xx xxx xxx', '');
      if (phone != null) {
        localStorage.setItem("phone", "598".concat(phone));
      }
    }
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

  getFormattedText(): string {
    let result = '';

    this.empanadaList.forEach((tuple, index) => {
      const { empanada, quantity } = tuple;
      result += `${quantity} ${empanada.name} (n°${empanada.id})`;

      if (index < this.empanadaList.length - 1) {
        result += '%0A'; // Add a newline if it's not the last entry
      }
    });

    return result;
  }

  getFormattedText2(): string {
  let result = '';

  this.empanadaList.forEach((tuple, index) => {
    const { empanada, quantity } = tuple;
    result += `${quantity} ${empanada.name} (n°${empanada.id})`;

    if (index < this.empanadaList.length - 1) {
      result += ', '; // Separate entries with a comma and space
    }
  });

  return result;
}
}
