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
    
    //Get empanadas from active profiles group by id sum quantity
    const empanadas = activeProfiles
    
  }

  openWhatsapp() {
    const phoneNumber = localStorage.getItem('phone');
    const text = localStorage.getItem('profiles');; // Replace with the desired message

    if (phoneNumber) {
      const whatsappURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
      window.open(whatsappURL, '_blank');
    } else {
      // Handle the case where the phone number is not found in localStorage
      alert('Phone number not found in localStorage');
    }
  }

}