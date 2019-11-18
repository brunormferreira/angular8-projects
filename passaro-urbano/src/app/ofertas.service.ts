import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${environment.URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${environment.URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${environment.URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        // console.log(resposta.shift());
        return resposta[0];
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${environment.URL_API}/como-usar/?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta[0].descricao);
        return resposta[0].descricao;
      });
  }
}
