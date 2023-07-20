import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AjouterproduitService } from './ajouterproduit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})


export class ProduitComponent implements OnInit {
  title = 'HI TECH';
  termeRecherche: string = "";
  public produits: any[] = [];
  nom: string = ""; 
  prixUnitaire: number = 0; 
  quantite: number = 0; 

  constructor(private route: ActivatedRoute, private ajouterproduitService: AjouterproduitService, private router: Router) { }

  
  ngOnInit() {
  }

  ajouterProduit() {
    const nouveauProduit = {
      nom: this.nom,
      prixUnitaire: this.prixUnitaire,
      quantite: this.quantite
    };

    this.ajouterproduitService.ajouterProduit(nouveauProduit).subscribe(() => {
    //this.chargerProduits();

      this.nom = "";
      this.prixUnitaire = 0;
      this.quantite = 0;
    });
    
    }
  
  

  annulerAjout() {
    this.nom = "";
    this.prixUnitaire = 0;
    this.quantite = 0;
  }

}
