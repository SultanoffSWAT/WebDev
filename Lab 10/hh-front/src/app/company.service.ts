import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import { Company} from "./models";
import {HttpClient} from "@angular/common/http";
import {CompanyComponent} from "./company/company.component";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000/'
  constructor(private client: HttpClient) { }

  get_companies(): Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}api/companies/`
    )
  }

  get_company_vacancy(id: number): Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}api/companies/`+id+`/vacancies`
    )
  }
}
