import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TimeSeriesResponseFormat } from "./types";

const baseUrl = 'http://localhost:3001/api/data';

const App: React.FC = () => {
  const [stocks, setStocks] = useState<TimeSeriesResponseFormat>();

  useEffect(() => {
    console.log('effect');
    axios
      .get<TimeSeriesResponseFormat>(baseUrl)
      .then(response => {
        console.log('promise fulfilled');
        console.log(response.data, 'response.data');
        setStocks(response.data);
    });
  }, []);

  if (stocks !== undefined) {
    const dates: string[] = 
      Object
        .keys(stocks["Time Series (Daily)"])
        .reverse();
    const prices: number[] = 
      Object
        .values(stocks["Time Series (Daily)"])
        .reverse()
        .map(x => x["4. close"])
        .map(Number);
    
    var data: Array<[string, number]>= [];

    //Combining arrays into a suitable format to work in Highchart
    //and also taking in account the AAPL stock split on a 4-for-1 
    //basis on August 28, 2020.
    for (var i = 0; i < 100; i++) {
      if (i < 88) {
      prices[i] = prices[i]/4;
      }
      data.push([dates[i], prices[i]]);
    } 

    console.log(dates, 'dates in App.tsx');
    console.log(prices, 'info in App.tsx');
    console.log(data, 'data in App.tsx');

    const options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Apple Inc.'
      },
      subtitle: {
        text: '(NASDAQ: AAPL): 100 days'
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      yAxis: {
        title: {
          text: 'Price USD',
        },
      },
      xAxis: {
        labels: {
          enabled: false
        },
      },
      series: [
        { 
          name: 'Price USD',
          data: data
        }
      ]
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  } else {
    return null;
  }

};


export default App;