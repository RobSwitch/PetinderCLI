import {Component, OnInit} from '@angular/core';
import {Pet} from "../../model/Pet";
import {PetService} from "../../service/pet.service";
import {ActivatedRoute} from "@angular/router";
import {Form, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit{
  _selectedPet!: Pet | any;
  newDateForm: FormGroup<any> = this.formBuilder.group({
    name: ''
  })

  constructor(private petService: PetService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    let name = this.route.snapshot.params['name'];
    this.petService.findByName(name).subscribe(pet => this._selectedPet = pet)
  }

  onSubmit(): void{
    this.petService.sendWhatsApp(this.newDateForm.value).subscribe(alert.toString)
    alert('your date has been created')
    this.newDateForm.reset();
  }
  get selectedPet(): any {
    return this._selectedPet;
  }
}
