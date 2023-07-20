import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { ModifierproduitComponent } from './modifierproduit/modifierproduit.component';


const routes: Routes = [
  { path: "produit", component: ProduitComponent },
  { path: "modifierproduit", component: ModifierproduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
