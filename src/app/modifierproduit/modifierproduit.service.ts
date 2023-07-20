import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifierproduitService {

  private urlBase = 'http://localhost:9090/';

  constructor(private http: HttpClient) {}

  
  modifierProduit(id: number, nouveauProduit: any): Observable<any> {
    return this.http.put(`${this.urlBase}produits/${id}`, nouveauProduit);
  }

}

