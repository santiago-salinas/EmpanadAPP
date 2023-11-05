import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'empanadAPP';

  slogans:string[] = [
    "¡Administra tus empanadas con facilidad!",
    "Tu empanadería en la palma de tu mano",
    "Gestiona tus pedidos y ventas de empanadas sin complicaciones",
    "Haz crecer tu negocio de empanadas con nuestra app",
    "Control total de tus ingredientes, recetas y ventas",
    "Una app diseñada para amantes de las empanadas",
    "Simplifica la gestión de tu negocio empanadero",
    "Toma el control de tu negocio de empanadas con nuestra app",
    "Optimiza tus procesos con nuestra aplicación",
    "Empanadas + Tecnología = Éxito seguro",
  ];

  randomSlogan: string = "";

  constructor() {
    this.generateRandomSlogan();
  }

  generateRandomSlogan() {
    const randomIndex = Math.floor(Math.random() * this.slogans.length);
    this.randomSlogan = this.slogans[randomIndex];
  }
}
