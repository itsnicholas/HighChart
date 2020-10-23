import React, { useState } from 'react';

// Import types
import { TimeSeriesResponseFormat } from "./types";
import * as DataAPI from './api/DataAPI'
import Chart from "./components/Chart";


const App: React.FC = () => {
  const [stocks, setStocks] = useState<TimeSeriesResponseFormat>();

  // Perform GET request to backend after render
  React.useEffect(() => {
    console.log('effect');
    DataAPI.onData(setStocks);
  }, []);

  // If 'stocks' is not undefined return chart
  if (stocks !== undefined) {

    // Reversed array of object's own enumerable property names
    const dates: string[] = 
      Object
        .keys(stocks["Time Series (Daily)"])
        .reverse();

    // Reversed array of object's own enumerable property values
    // populated by "4. close" element as Number data type
    const prices: number[] = 
      Object
        .values(stocks["Time Series (Daily)"])
        .reverse()
        .map(x => x["4. close"])
        .map(Number);
    
    // Create empty array to supply chart data to  
    var data: Array<[string, number]>= [];

    /**
     * For-loop: combine arrays into a suitable form for
     * Highchart and take in account AAPL stock split on 
     * a 4-for-1 basis on August 28, 2020
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

    // Return chart
    return (
      <div>
        <Chart data={data} />
      </div>
    );

    // If 'stocks' is undefined return null
  } else {
    return null;
  }

};


export default App;