import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmpanadaListableComponent } from 'src/app/reusables/empanada-listable/empanada-listable.component';
import { Empanada } from 'src/app/models/empanada';
import { EmpanadasService } from 'src/app/services/empanadas.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, EmpanadaListableComponent]
})
export class SelectionComponent {
  empanadas : Empanada[];

  constructor(private empanadasService: EmpanadasService) {
    this.empanadas = this.empanadasService.getEmpanadas();
  }
}
