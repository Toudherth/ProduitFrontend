import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModifierproduitService } from './modifierproduit.service'; 

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {

  produitId: number=0;
  nouveauNom: string="";
  nouveauPrix: number=0;
  nouvelleQuantite: number=0;

  constructor(private route: ActivatedRoute, private produitsService: ModifierproduitService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.produitId = +params['id'];
    });
  }

  modifierProduit() {
    const nouveauProduit = {
      nom: this.nouveauNom,
      prix: this.nouveauPrix,
      quantite: this.nouvelleQuantite
    };

    this.produitsService.modifierProduit(this.produitId, nouveauProduit).subscribe(
      (result) => {
        console.log('Le produit a été modifié avec succès !', result);
       },
      (error) => {
        console.error('Une erreur s\'est produite lors de la modification du produit :', error);
      }
    );
  }
}