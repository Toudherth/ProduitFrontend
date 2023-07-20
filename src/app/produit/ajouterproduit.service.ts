import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AjouterproduitService {

  private urlBase = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }


  ajouterProduit(nouveauProduit: any): Observable<any> {
    return this.http.post(this.urlBase + 'produits', nouveauProduit);
  }
}
