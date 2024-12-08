import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[] = [];
  constructor(private countriesService:CountriesService) {}
  
  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term)
    .subscribe((country) => {
      this.region = country;
    });
  }

}
