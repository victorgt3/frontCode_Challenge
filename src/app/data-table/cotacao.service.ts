import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../config.service';
import { ServiceBase } from '../service-base';
import { Cotacao, TipoCargueiro } from './model/cotacao';


@Injectable()
export class CotacaoService extends ServiceBase{

    constructor(private http: HttpClient) {
        super();
      }

    obterCotacao(dataSaida: string, dataRetorno: string, tipoCargueiro: TipoCargueiro[]): Observable<Cotacao[]>{
       
        return this.http.get<Cotacao[]>(ConfigService.getUrlApi(`minerais?DataSaida=${dataSaida}&DataRetorno=${dataRetorno}&TipoCargueiro=${tipoCargueiro}`), super.obterHttpOptions()).pipe(catchError(super.serviceError));
    }
}

