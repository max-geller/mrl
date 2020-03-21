import { Component, OnInit } from '@angular/core';



export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cost-indices',
  templateUrl: './cost-indices.component.html',
  styleUrls: ['./cost-indices.component.scss']
})
export class CostIndicesComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'SFO Terminal 3 West Modernization'},
    {value: 'pizza-1', viewValue: 'SF Crime Lab'},
    {value: 'tacos-2', viewValue: 'Facebook MPK 61 & 62'}
  ];
  constructor() { }

  ngOnInit() {
  }
  linetitle = 'Total Construction Costs';
  linetype = 'AnnotationChart';
  linedata = [

     [new Date(2017, 5, 15),  10.5, 9.3, 8.4, 8.5],
     [new Date(2018, 5, 15),  10.8, 10.0, 9.5, 9.9],
     [new Date(2019, 5, 15),  11.2, 10.8, 10.6, 10.4],

  ];
  linecolumnNames = ["Year", "HCI Consruction Cost Index", "Turner Building Cost Index","Leeland Saylor Construction Index", "ENR Building Cost Index"];
  lineoptions = {
     hAxis: {
        title: 'Year'
     },
     vAxis:{
        title: 'Index'
     },
  };
  linewidth = 800;
  lineheight = 400;


}

