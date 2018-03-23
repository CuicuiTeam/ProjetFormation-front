import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IdentifiantsVM } from '../model/IdentifiantsVM';
import { LivreVM } from '../model/LivreVM'
import { AuteurVM } from '../model/AuteurVM'
import { MembreVM } from '../model/MembreVM';
import { PanierVM } from '../model/PanierVM'
import { CategorieVM } from '../model/CategorieVM'
import { BibliothequeVM } from '../model/BibliothequeVM';
import { HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}


@Injectable()
export class BackEndService {

  constructor(private http: HttpClient) { }


  Login(identifiantsVm: IdentifiantsVM): Observable<any>
  {
    console.log(identifiantsVm);
    return this.http.post<IdentifiantsVM>("http://localhost:8080/ProjetFormation/connexion", identifiantsVm, httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  } 

   newMembre(membreVm: MembreVM): Observable<any>
  {
    console.log(membreVm);
    return this.http.put<MembreVM>("http://localhost:8080/ProjetFormation/admin/membre", membreVm, httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  }

Bibliotheque(bibliothequeVm: BibliothequeVM[]): Observable<any>
  {
    console.log(bibliothequeVm);
    return this.http.get<BibliothequeVM>("http://localhost:8080/ProjetFormation/admin/bibliotheque", httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  }

 Livres(livreVm: LivreVM[]): Observable<any>
  {
    console.log(livreVm);
    return this.http.get<LivreVM[]>("http://localhost:8080/ProjetFormation/livre/recommandes", httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  } 

  LivresPeriodiques(livreVm: LivreVM[]): Observable<any>
  {
    console.log(livreVm);
    return this.http.get<LivreVM[]>("http://localhost:8080/ProjetFormation/livre/periodiques", httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  } 

  LivresCategorie(id): Observable<any>
  {
    console.log(id);
    return this.http.get<CategorieVM>("http://localhost:8080/ProjetFormation/livre/categorie/" + id, httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  }

  Auteurs(auteurVm: AuteurVM[]): Observable<any>
  {
    console.log(auteurVm);
    return this.http.get<AuteurVM[]>("http://localhost:8080/ProjetFormation/auteur", httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  } 

   OneAuteur(id): Observable<any>
  {
    console.log(id);
    return this.http.get<AuteurVM>("http://localhost:8080/ProjetFormation/auteur/" + id, httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  } 

  OneLivre(id): Observable<any>
  {
    console.log(id);
    return this.http.get<LivreVM>("http://localhost:8080/ProjetFormation/livre/" + id, httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  } 

  
AjoutLivre(livreVm: LivreVM): Observable<any>
  {
    console.log(livreVm);
    return this.http.put<LivreVM>("http://localhost:8080/ProjetFormation/livre", livreVm, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  AjoutPanier(id:number):Observable<any>{
    return this.http.post<PanierVM>("http://localhost:8080/ProjetFormation/panier/addbook?idLivre="+id,{httpOptions,withCredentials:true})
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  AfficherPanier(panierVm: PanierVM[]): Observable<any>
  {
    console.log(panierVm);
    return this.http.get<PanierVM>("http://localhost:8080/ProjetFormation/panier", httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
    };

    handleData(data: any){      
      if(data.success){
        //resquest suceed in server
        console.log(data.message);
        //messageService.displaySucessfulMessage(data.message);
      }else{
        console.error(data.message);
        //messageService.displayFailureMessage(data.message);
      }

    }
}