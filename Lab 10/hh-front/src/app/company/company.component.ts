import {Component, OnInit} from '@angular/core';
import { Company } from 'src/app/models'
import {CompanyService} from "../company.service";
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies: Company[] = [];

  constructor(private CompanyService: CompanyService) {
  }
  show_vacancies(id: number){
    this.CompanyService.get_company_vacancy(id).subscribe((data)=>{
      this.companies = data;
    })
  }
  ngOnInit() {
    this.CompanyService.get_companies().subscribe((data)=> {
      this.companies = data;
    })
  }
}
