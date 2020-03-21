import { Component, OnInit } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss']
})

export class CalculatorsComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'SFO Terminal 3 West Modernization'},
    {value: 'pizza-1', viewValue: 'SF Crime Lab'},
    {value: 'tacos-2', viewValue: 'Facebook MPK 61 & 62'}
  ];

  pietitle = 'Labor Rate Breakdown';
  pietype = 'PieChart';
  piedata = [
     ['Wages', 45.0],
     ['Fringe/Benefits', 26.8],
     ['Taxes', 12.8],
     ['Insurance', 8.5],
     ['Truck/Tool', 6.2],
     ['Others', 0.7] 
  ];
  piecolumnNames = ['Browser', 'Percentage'];
  pieoptions = {    
  };
  piewidth = 550;
  pieheight = 400;


  linetitle = 'Labor Rate Escalation';
  linetype = 'LineChart';
  linedata = [

     ["2016",  14.5, 11.3, 8.4, 8.5],
     ["2017",  18.2, 17.0, 13.5, 11.9],
     ["2018",  21.5, 22.0, 17.0, 15.2],
     ["2019",  25.2, 24.8, 18.6, 17.0],
     ["2020",  26.5, 24.1, 17.9, 16.6],

  ];
  linecolumnNames = ["Year", "General Foreman", "Foreman","Journeyman", "Apprentice"];
  lineoptions = {   
     hAxis: {
        title: 'Year'
     },
     vAxis:{
        title: 'Classification'
     },
  };
  linewidth = 850;
  lineheight = 400;
}

