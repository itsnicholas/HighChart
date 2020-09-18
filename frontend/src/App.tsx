import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Import types
import { TimeSeriesResponseFormat } from "./types";

// Backend url
const baseUrl = 'http://localhost:3001/api/data';

const App: React.FC = () => {
  const [stocks, setStocks] = useState<TimeSeriesResponseFormat>();

  // Perform GET request to backend after render
  useEffect(() => {
    console.log('effect');
    axios
      .get<TimeSeriesResponseFormat>(baseUrl)
      .then(response => {
        // Handle success
        console.log('promise fulfilled');
        console.log(response.data, 'response.data');
        // Add response data to 'stocks'
        setStocks(response.data);
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
  }, []);

  // If 'stocks' is not undefined return chart
  if (stocks !== undefined) {

    // Reverse array of object's own enumerable property names
    const dates: string[] = 
      Object
        .keys(stocks["Time Series (Daily)"])
        .reverse();

    // Reverse array of object's own enumerable property values
    // populated by "4. close" element as Number data type
    const prices: number[] = 
      Object
        .values(stocks["Time Series (Daily)"])
        .reverse()
        .map(x => x["4. close"])
        .map(Number);
    
    // Create empty array to supply chart data   
    var data: Array<[string, number]>= [];

  /**
   * Combine arrays into a suitable form for Highchart
   * and take in account AAPL stock split on a 4-for-1 
   * basis on August 28, 2020
  */
    // Loop through all (100) entries of 'dates' and 'prices'
    for (var i = 0; i < 100; i++) {

      // Change prices before stock split by comparing dates
      if (new Date(dates[i]) < new Date('2020-08-29')) {
        prices[i] = prices[i]/4;
      }

      // Push suitable format to data array
      data.push([dates[i], prices[i]]);
    } 

    console.log(dates, 'dates in App.tsx');
    console.log(prices, 'info in App.tsx');
    console.log(data, 'data in App.tsx');

    // Highchart chart setup options
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

    // Return highchart chart
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );

    // If 'stocks' is undefined return null
  } else {
    return null;
  }

};


export default App;