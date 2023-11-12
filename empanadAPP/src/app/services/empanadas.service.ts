import { Injectable } from '@angular/core';
import { Empanada } from '../models/empanada';
import { Profile } from '../models/profile';
import { TupleProfile } from '../models/profile';


@Injectable({
  providedIn: 'root'
})

export class EmpanadasService {
  empanadas: Empanada[];
  activeProfiles: Profile[] = [];

  constructor() {
    this.empanadas = [{"id":1,"name":"JAMÓN Y QUESO","price":92,"description":"","type":"Queso"},{"id":2,"name":"QUESO Y LONGANIZA","price":92,"description":"","type":"Queso"},{"id":3,"name":"QUESO Y PANCETA","price":92,"description":"","type":"Queso"},{"id":4,"name":"CAPRESSE","price":92,"description":"QUESO, TOMATE Y ALBAHACA","type":"Queso"},{"id":5,"name":"LIBANESA","price":92,"description":"QUESO, AJO Y PEREJIL","type":"Queso"},{"id":6,"name":"TROPICAL","price":92,"description":"JAMÓN, QUESO Y ANANÁ","type":"Queso"},{"id":7,"name":"QUESO Y CEBOLLA","price":92,"description":"","type":"Queso"},{"id":8,"name":"QUESO Y ACEITUNAS","price":92,"description":"","type":"Queso"},{"id":10,"name":"CUATRO QUESOS","price":92,"description":"","type":"Queso"},{"id":11,"name":"PROVOLONE ","price":92,"description":"CON OREGANO","type":"Queso"},{"id":12,"name":"ROQUEFORT","price":92,"description":"CON APIO Y NUEZ","type":"Queso"},{"id":13,"name":"PIAMONTESA","price":92,"description":"QUESO, PANCETA Y CEBOLLA","type":"Queso"},{"id":14,"name":"PANCHO","price":92,"description":"PANCHO COM MUZZARELLA","type":"Queso"},{"id":15,"name":"JAMÓN Y ACEITUNAS C/QUESO","price":92,"description":"","type":"Queso"},{"id":20,"name":"ESPINACA","price":92,"description":"","type":"Verdura"},{"id":21,"name":"ESPINACA Y QUESO","price":92,"description":"","type":"Verdura"},{"id":22,"name":"VERDURAS SALTEADAS","price":92,"description":"","type":"Verdura"},{"id":23,"name":"PALMITOS","price":92,"description":"C/JAMÓN Y SALSA GOLF","type":"Verdura"},{"id":24,"name":"HUMITA","price":92,"description":"CHOCLO, JAMÓN Y SALSA BLANCA","type":"Verdura"},{"id":30,"name":"POLLO","price":96,"description":"CON CEBOLLA FRITA Y SALSA","type":"Pollo"},{"id":31,"name":"POLLO AL AJILLO","price":96,"description":"","type":"Pollo"},{"id":32,"name":"SUPREMA DE POLLO","price":96,"description":"EN SALSA DE PERROS","type":"Pollo"},{"id":33,"name":"CHOP SUEY","price":96,"description":"POLLO CON VERDURAS","type":"Pollo"},{"id":34,"name":"POLLO REY","price":96,"description":"ACEITUNAS, HUEVO, CEBOLLA Y MORRÓN","type":"Pollo"},{"id":40,"name":"CRIOLLA","price":96,"description":"CARNE Y HUEVO","type":"Carne"},{"id":41,"name":"PAISANA","price":96,"description":"CARNE, CEBOLLA MORRON, HUEVO, Y ACEITUNAS","type":"Carne"},{"id":42,"name":" CORDOBESA","price":96,"description":"CARNE Y PASAS","type":"Carne"},{"id":43,"name":"MENDOCINA ","price":96,"description":"CARNEY PANCETA","type":"Carne"},{"id":44,"name":"CARNE PICANTE","price":96,"description":"","type":"Carne"},{"id":45,"name":"CRI'SUI ","price":96,"description":"CRIOLLA Y QUESO COLONIA","type":"Carne"},{"id":46,"name":"TROZOS DE CARNES ","price":96,"description":"CEBOLLA, MORRÓN Y SALSA","type":"Carne"},{"id":47,"name":"DON PEDRO","price":96,"description":"CARNE PICADA A CUCHILLO, SALAME MUZZARELLA Y CEBOLLAS FRITAS","type":"Carne"},{"id":48,"name":"NAPOLITANA ","price":96,"description":"SALSA PIZZERA Y QUESO","type":"Carne"},{"id":50,"name":"POLLO, PANCETA Y QUESO","price":98,"description":"","type":"Especial"},{"id":51,"name":"BONDIOLA, RUCULA Y QUESO","price":98,"description":"","type":"Especial"},{"id":52,"name":"BACON ","price":98,"description":"QUESO Y PANCETA SALTEADA CON CEBOLLA Y AJO","type":"Especial"},{"id":53,"name":"CAMARONES","price":98,"description":"AL AJILLO CON QUESO","type":"Especial"},{"id":54,"name":"MEJILLONES A LA GALLEGA","price":98,"description":"","type":"Especial"},{"id":55,"name":"ATÚN","price":98,"description":"CEBOLLA FRITA, MUZZARELLA Y MORRON","type":"Especial"},{"id":56,"name":"CERDO AGRIDULCE","price":98,"description":"","type":"Especial"},{"id":57,"name":"CERDO BBQ ","price":98,"description":"CERDO AL HORNO CON SALSA BARBACOA","type":"Especial"},{"id":58,"name":"CHEESBURGER ","price":98,"description":"CARNE PANCETA Y CHEDDAR","type":"Especial"},{"id":60,"name":"DULCE DE LECHE","price":84,"description":"","type":"Dulce"},{"id":61,"name":"DULCE CON NUEZ","price":84,"description":"","type":"Dulce"},{"id":62,"name":"DULCELATE","price":84,"description":"DULCE DE LECHE CON CHOCOLATE","type":"Dulce"},{"id":63,"name":"DULCE DE MEMBRILLO","price":84,"description":"","type":"Dulce"},{"id":64,"name":"MANZANA","price":84,"description":"","type":"Dulce"},];
  }

  getEmpanadas(): Empanada[] {
    return this.empanadas;
  }

  getProfiles(): Profile[] {
    const profilesJSON = localStorage.getItem('profiles');
    return profilesJSON ? JSON.parse(profilesJSON) : [];
  }

  resetActiveProfiles() {
    this.activeProfiles = [];
  }

  getActiveProfiles(): Profile[] {
    return this.activeProfiles
  }

  addActiveProfile(profile: Profile) {
    const existingProfile = this.activeProfiles.find(item => item.name === profile.name);

    if (!existingProfile) {
      this.activeProfiles.push(profile);
    }
  }

  removeActiveProfile(profile: Profile) {
    const existingProfile = this.activeProfiles.find(item => item.name === profile.name);

    if (existingProfile) {
      this.activeProfiles = this.activeProfiles.filter(item => item.name !== profile.name);
    }
  }

  getEmpanadasTypes(): string[] {
    return this.empanadas.map(empanada => empanada.type).filter((value, index, self) => self.indexOf(value) === index);
  }

  getEmpanadaByType(type: string): Empanada[] {
    return this.empanadas.filter(empanada => empanada.type === type);
  }

  guardarPedido(profile: Profile) {
    // Get existing profiles from local storage or an empty array if it doesn't exist
    const existingProfilesJSON = localStorage.getItem('profiles');
    const existingProfiles = existingProfilesJSON ? JSON.parse(existingProfilesJSON) : [];

    // Check if the profile already exists in the array based on some criteria (e.g., profile.name)
    const existingProfileIndex = existingProfiles.findIndex((p: Profile) => p.name === profile.name);

    if (existingProfileIndex !== -1) {
      // If the profile exists, update it
      existingProfiles[existingProfileIndex] = profile;
    } else {
      // If the profile doesn't exist, add it to the array
      existingProfiles.push(profile);
    }

    // Save the updated profiles array back to local storage
    localStorage.setItem('profiles', JSON.stringify(existingProfiles));
  }
  
  deleteProfile(profile: Profile) {
    alert("delete")
    // Get existing profiles from local storage or an empty array if it doesn't exist
    const existingProfilesJSON = localStorage.getItem('profiles');
    const existingProfiles = existingProfilesJSON ? JSON.parse(existingProfilesJSON) : [];

    // Check if the profile already exists in the array based on some criteria (e.g., profile.name)
    const existingProfileIndex = existingProfiles.findIndex((p: Profile) => p.name === profile.name);

    if (existingProfileIndex !== -1) {
      // If the profile exists, update it
      existingProfiles.splice(existingProfileIndex,1);
    }

    // Save the updated profiles array back to local storage
    localStorage.setItem('profiles', JSON.stringify(existingProfiles));
  }

}
