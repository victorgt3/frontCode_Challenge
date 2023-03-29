import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { CotacaoService } from "./cotacao.service";
import { Cotacao } from "./model/cotacao";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"],
})
export class DataTableComponent implements OnInit {

  constructor(private cotacaoService: CotacaoService){}
  public errorMessage: string = "";
  public cotacao: Cotacao[];
  displayedColumns: string[] = ['dataSaida', 'dataRetorno', 'tipoCargueiro', 'valorTotalCarga', 'quantidadeCarga'];
  dataSource = new MatTableDataSource<Cotacao>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.cotacaoService.obterCotacao('2021-04-23T10:00:00.000', '2021-04-23T10:00:00.000', [1] ).subscribe(
      result =>  {this.dataSource.data = result},
      error => this.errorMessage
    );
    this.dataSource.paginator = this.paginator;
  }
}
