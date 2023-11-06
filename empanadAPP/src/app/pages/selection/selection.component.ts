import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmpanadaListableComponent } from 'src/app/reusables/empanada-listable/empanada-listable.component';
import { Empanada } from 'src/app/models/empanada';
import { EmpanadasService } from 'src/app/services/empanadas.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import {MatTableModule} from '@angular/material/table';
import { ProfileListableComponent } from 'src/app/reusables/profile-listable/profile-listable.component';
interface Tuple {
  empanada: Empanada;
  quantity: number;
}
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  standalone: true,
  imports: [CommonModule,ProfileListableComponent,MatTableModule,FormsModule,  RouterLink, RouterLinkActive, RouterOutlet, EmpanadaListableComponent, MatButtonModule, MatIconModule,MatButtonModule, MatIconModule, MatInputModule]
})

export class SelectionComponent {
  empanadaList: Tuple[] = [];
  activeProfiles: Profile[] = [];

  constructor(private empanadasService: EmpanadasService) {
    this.activeProfiles = this.empanadasService.getProfiles();
  }

  getProfiles(): Profile[] {
    return this.empanadasService.getProfiles();
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