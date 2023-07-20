import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private urlBase = 'http://localhost:9090/';

  constructor(private http: HttpClient) {

  }

  getProduits(): Observable<any> {
    return this.http.get(this.urlBase+'produits');  
  }

  getProduitsParNom(nom: any): Observable<any> {
    const encodedNom = encodeURIComponent(nom); 
    console.log(this.urlBase + 'produits/recherche/' + encodedNom);
    return this.http.get(this.urlBase + 'produits/recherche/' + encodedNom);
  }

  supprimerProduit(id: number): Observable<any> {
    return this.http.delete(this.urlBase + 'produits/' + id);
  }
  
}