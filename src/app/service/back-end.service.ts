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
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }), withCredentials: true
}


@Injectable()
export class BackEndService {

  url : string = "http://172.16.2.9:8080/ProjetFormation/"

  constructor(private http: HttpClient) { }


  Login(identifiantsVm: IdentifiantsVM): Observable<any> {
    console.log(identifiantsVm);
    return this.http.post<IdentifiantsVM>(this.url+"connexion", identifiantsVm, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  Logout(): Observable<any> {
    return this.http.post<IdentifiantsVM>(this.url+"deconnexion", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  newMembre(membreVm: MembreVM): Observable<any> {
    console.log(membreVm);
    return this.http.put<MembreVM>(this.url+"admin/membre", membreVm, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  Bibliotheque(bibliothequeVm: BibliothequeVM[]): Observable<any> {
    console.log(bibliothequeVm);
    return this.http.get<BibliothequeVM>(this.url+"admin/bibliotheque", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  Livres(): Observable<any> {
    return this.http.get<LivreVM[]>(this.url+"livre", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  LivresRecommandes(): Observable<any> {
    return this.http.get<LivreVM[]>(this.url+"livre/recommandes", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  LivresPeriodiques(livreVm: LivreVM[]): Observable<any> {
    console.log(livreVm);
    return this.http.get<LivreVM[]>(this.url+"livre/periodiques", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  LivresCategorie(id): Observable<any> {
    console.log(id);
    return this.http.get<CategorieVM>(this.url+"livre/categorie/" + id, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  ListerMembre(membreVm: MembreVM[]): Observable<any>
  {
    console.log(membreVm);
    return this.http.get<MembreVM[]>(this.url+"admin/membre", httpOptions)
    .pipe(      
      retry(3),
      catchError(this.handleError)
    );
  }

  Auteurs(): Observable<any>
  {
    return this.http.get<AuteurVM[]>(this.url+"auteur", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  Categories(categorieVm: CategorieVM[]): Observable<any>
  {
    console.log(categorieVm);
    return this.http.get<CategorieVM[]>(this.url+"categorie", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  OneAuteur(id): Observable<any> {
    console.log(id);
    return this.http.get<AuteurVM>(this.url+"auteur/" + id, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  OneLivre(id): Observable<any> {
    console.log(id);
    return this.http.get<LivreVM>(this.url+"livre/" + id, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }


  AjoutLivre(livreVm: LivreVM): Observable<any> {
    return this.http.put<LivreVM>(this.url+"livre", livreVm, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  ModifLivre(livreVm: LivreVM): Observable<any> {
    return this.http.post<LivreVM>(this.url+"livre", livreVm, httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  AjoutPanier(id: number): Observable<any> {
    return this.http.post<PanierVM>(this.url+"panier/addbook?idLivre=" + id, { httpOptions, withCredentials: true })
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  AfficherPanier(): Observable<any> {

    return this.http.get(this.url+"panier", httpOptions)
      .pipe(
      retry(3),
      catchError(this.handleError)
      );
  }

  Recherche(recherche: string): Observable<any> {
    return this.http.get<LivreVM>(this.url+"recherche/" + recherche, httpOptions)
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

  handleData(data: any) {
    if (data.success) {
      //resquest suceed in server
      console.log(data.message);
      //messageService.displaySucessfulMessage(data.message);
    } else {
      console.error(data.message);
      //messageService.displayFailureMessage(data.message);
    }

  }
}