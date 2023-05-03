import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";
import {WhatsApp} from "../model/WhatsApp";
@Injectable({
  providedIn: 'root'
})
export class PetService {
  private _urlPets: string;

  constructor(private _http: HttpClient) {
    this._urlPets = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this._http.get<Pet[]>(this._urlPets)
      .pipe(map(pets => pets.sort((a:Pet,b:Pet) => a.name.localeCompare(b.name))));
  }

  addPet(pet: Pet) {
  return this._http.post(this._urlPets, pet);
  }

  deletePet(pet: Pet) {
    return this._http.delete(`${this._urlPets}/${pet.id}`)
  }

  findByName(name: string): Observable<any> {
    return this._http.get(`${this._urlPets}/${name}`);
  }

  sendWhatsApp(whatsApp: WhatsApp) {
    return this._http.post(`${this._urlPets}/sendText`, whatsApp);
  }
}
