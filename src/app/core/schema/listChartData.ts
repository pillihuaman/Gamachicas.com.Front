import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from 'ng2-charts';

export interface ListChartData {
    charts?:ChartDataSets[],
    labels?: Label[],
    legend?:boolean,
    options?: ChartOptions
}


