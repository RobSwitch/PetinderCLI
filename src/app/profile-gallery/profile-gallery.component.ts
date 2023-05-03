import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EnumValue} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit{

  petsArray: Pet[] = [];
  selectedPet: Pet | any;
  searchText: string | any;
  newPetForm: FormGroup<any> = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  })

  constructor(public petService: PetService, private formBuilder: FormBuilder){
    this.selectedPet = undefined;
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.petsArray = pets);
  }

  onSubmit(): void {
    this.petService.addPet(this.newPetForm.value).subscribe()
    console.warn('Your pet has been created', this.newPetForm.value)
    this.newPetForm.reset();
    location.reload();
  }

  onSubmitDelete(): void {
    this.petService.deletePet(this.selectedPet).subscribe();
    location.reload();
  }
  ngOnInit() {
    this.getPets()
  }
  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }
}
