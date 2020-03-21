import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent  {
  title = 'Population (in millions)';
  type = 'ColumnChart';
  data = [
    ["2012", 900],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 1250],
    ["2016", 1530]

  ];
  columnNames = ['Year', 'Asia'];
  options = {};
  width = 550;
  height = 400;
}
