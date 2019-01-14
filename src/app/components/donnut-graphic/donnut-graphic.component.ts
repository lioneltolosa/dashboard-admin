import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donnut-graphic',
  templateUrl: './donnut-graphic.component.html',
  styleUrls: ['./donnut-graphic.component.css']
})
export class DonnutGraphicComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
