import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  // {
    // sin "/"
    // path: 'home',
    // path: '',
    // component: HomePageComponent,
  // },
  {
    // sin "/"
    path: 'about',
    component: AboutPageComponent,
  },
  {
    // sin "/"
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    // sin "/"
    path: 'countries',
    // component: ContactPageComponent,
    // loadChildren:()=>import('./countries/contries-routing.module').then(module => module.CountriesRoutingModule)
    loadChildren:()=>import('./countries/countries.module').then(module => module.CountriesModule)
  },
  {
    // si pone cualquier ruta
    path: '**',
    // redirectTo: 'home',
    // redirectTo: '',
    redirectTo:'countries'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
