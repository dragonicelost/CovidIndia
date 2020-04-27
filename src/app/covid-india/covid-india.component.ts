import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { Chart } from 'chart.js';
import { Data } from '../Model/Data';
import { Summary } from '../Model/Summary';
import { Region } from '../Model/Region';
import { UnSummary } from '../Model/UnSummary';
import { stringify } from 'querystring';




@Component({
  selector: 'app-covid-india',
  templateUrl: './covid-india.component.html',
  styleUrls: ['./covid-india.component.css']
})
export class CovidIndiaComponent implements OnInit {
 

  constructor(private service: CovidServiceService) { }
 
 
  ngOnInit(): void {
    this.getdata();

  }
  chart: any;
  covids: CovidServiceService
  datavalues: Data=new Data();
  error: any;
  labelset:string[]=new Array<string>();
  dataset:number[]=new Array<number>();
  getdata() {
     this.covids=this.service;
    this.covids.getData().subscribe(

      success_data => {
      this.datavalues = success_data;
      this.add(this.datavalues);
      },
      error => {
      this.error = <any>error;
        console.log("ERROR")
      }
    )
 
  
    
          
console.log("hello");

  }
add(datas:Data)
{
  for(let i=0;i<datas.data.regional.length;i++)
  {
    console.log(this.datavalues.data.regional[i].loc)
    this.labelset.push(this.datavalues.data.regional[i].loc);
    this.dataset.push(this.datavalues.data.regional[i].totalConfirmed);

  }

  console.log("madarhcod->"+this.labelset.length)
  var graphColors = [];
  var bgcolor: string;
  var graphOutlines = [];
  var hoverColor = [];
  var internalDataLength = 7;
  let i = 0;
  while (i <= this.dataset.length) {
    var randomR = Math.floor((Math.random() * 130) + 100);
    var randomG = Math.floor((Math.random() * 130) + 100);
    var randomB = Math.floor((Math.random() * 130) + 100);

    var graphBackground = "rgb("
      + randomR + ", "
      + randomG + ", "
      + randomB + ")";


    graphColors.push(graphBackground);

    var graphOutline = "rgb("
      + (randomR - 80) + ", "
      + (randomG - 80) + ", "
      + (randomB - 80) + ")";
    graphOutlines.push(graphOutline);

    var hoverColors = "rgb("
      + (randomR + 25) + ", "
      + (randomG + 25) + ", "
      + (randomB + 25) + ")";
    hoverColor.push(hoverColors);

    i++;
  };
  var chart = new Chart("myChart", {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
      labels:this.labelset,
      datasets: [{
        label: 'CONFIRMED CASES',
        backgroundColor: graphColors,
        borderColor: graphOutlines,
        data: this.dataset
      }]
    },

    // Configuration options go here
    options: {legend: {
            display: false,
            position:'bottom',
            Align:'center',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }}
  });

}


}
