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
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [CommonModule,MatTableModule,FormsModule,  RouterLink, RouterLinkActive, RouterOutlet, EmpanadaListableComponent, MatButtonModule, MatIconModule,MatButtonModule, MatIconModule, MatInputModule]
})


export class OrderComponent {
  empanadas : Empanada[];
  profileName : string = "";
  profile : Profile = new Profile("", []);

  constructor(private empanadasService: EmpanadasService, private route: ActivatedRoute, private router: Router) {
    this.empanadas = this.empanadasService.getEmpanadas();
  }

  ngOnInit() {
    this.empanadas = this.empanadasService.getEmpanadas();
    // Subscribe to query params to get the profileName from the URL
    this.route.queryParams.subscribe(params => {
      this.profileName = params['profileName'];
    });
    console.log(this.profileName);
      this.profile = this.empanadasService.getProfileByName(this.profileName);
    }



  empanadasTypes(): string[]{
    return this.empanadasService.getEmpanadasTypes();
  }

  getEmpanadaByType(empanadaType : string){
    return this.empanadasService.getEmpanadaByType(empanadaType);
  }

  guardarPedido(){
    alert(this.profileName);
    this.profile.name = this.profileName;
    this.empanadasService.guardarPedido(this.profile);
    this.router.navigate(['/selection']);
  }
}