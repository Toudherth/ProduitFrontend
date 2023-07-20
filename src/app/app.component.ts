import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Importez Router ici
import { ProduitsService } from "./produits.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HI TECH';
  termeRecherche: string = "";
  public produits: any[] = [];

  constructor(private route: ActivatedRoute, private produitsService: ProduitsService, private router: Router) { } // Injectez Router ici

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params["nom"] !== undefined) {
        console.log("/produits/" + params['nom']);
        this.produitsService.getProduitsParNom(params["nom"]).subscribe(produits => {
          this.produits = produits;
        });
      } else {
        this.produitsService.getProduits().subscribe(produits => this.produits = produits);
      }
    });
  }  
  naviguerVersAutre() {
    this.router.navigate(['/produit']); 
  }

  rechercher() {
    if (this.termeRecherche.trim() === '') {
      this.produitsService.getProduits().subscribe(produits => this.produits = produits);
    } else {
      this.produitsService.getProduitsParNom(this.termeRecherche).subscribe(produits => this.produits = produits);
    }
  }

  chargerProduits() {
    this.produitsService.getProduits().subscribe(produits => {
      this.produits = produits;
    });
  }

  supprimerProduit(id: number) {
    this.produitsService.supprimerProduit(id).subscribe(() => {
      this.chargerProduits();
    });
  }

  
}
