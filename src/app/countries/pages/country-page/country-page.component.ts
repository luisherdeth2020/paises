import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  // inyectar un par de servicios
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    // .subscribe(({ id }) => {
    //   // .subscribe((params) => {
    //   // console.log({ params: params['id'] });
    //   console.log({ params: id });
    //   this.searchCountry(id)
    // });

    // searchCountry(code:string){
    //   this.countriesService.searchCountryByAlphaCode(code)
    //     .subscribe(country =>{
    //       console.log({country})
    //     })
    // }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        console.log({ country });
      });
  }
}
