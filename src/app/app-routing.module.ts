import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [
  {path : "", component :HomeComponent},
  {path : "contact" , component :ContactComponent},
  {path : "equipe" , component :EquipeComponent},
  {path : "quote" , component :QuoteComponent},
  {path : "about" , component : AboutComponent},
  {path : "reference" , component : ReferenceComponent},
  {path : "expertise" , component : ExpertiseComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
