import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.scss']
})
export class ViewCharacterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewCharacterComponent>,
    @Inject(MAT_DIALOG_DATA) public character: any,
    public httpClient: HttpClient
  ) { }

  films: string[] = [];
  homeworld: string[] = [];
  species: string[] = [];
  starships: string[] = [];
  vehicles: string[] = [];
  isLoading = true;

  ngOnInit() {
    this.getFilms();
    this.getHomeWorlds();
    this.getSpecies();
    this.getStarShips();
    this.getVehicles();
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }

  getFilms() {
    this.character.character.films.forEach((film: string) => {
      this.httpClient.get<any>(film).subscribe(data => {
        this.films.push(data.title);
      });
    });
    this.character.character.cfilms = this.films;
  }


  getHomeWorlds() {
    this.httpClient.get<any>(this.character.character.homeworld).subscribe(data => {
      this.homeworld.push(data.name);
    });
    this.character.character.chomeworld = this.homeworld;
  }

  getSpecies() {
    this.character.character.species.forEach((specie: string) => {
      this.httpClient.get<any>(specie).subscribe(data => {
        this.species.push(data.name);
      });
    });
    this.character.character.cspecies = this.species;
  }

  getStarShips() {
    this.character.character.starships.forEach((starship: string) => {
      this.httpClient.get<any>(starship).subscribe(data => {
        this.starships.push(data.name);
      });
    });
    this.character.character.cstarships = this.starships;
  }

  getVehicles() {
    this.character.character.vehicles.forEach((vehicle: string) => {
      this.httpClient.get<any>(vehicle).subscribe(data => {
        this.vehicles.push(data.name);
      });
    });
    this.character.character.cvehicles = this.vehicles;
  }

}
