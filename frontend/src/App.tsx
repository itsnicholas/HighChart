import React, { useState } from 'react';

// Import components
import * as DataAPI from './api/DataAPI'
import Chart from "./components/Chart";


const App: React.FC = () => {
  const [data, setData] = useState<Array<[string, number]>>();

  // Perform GET request to backend after render
  React.useEffect(() => {
    console.log('effect');
    DataAPI.onData(setData);
  }, []);

  // If 'data' is not undefined return chart
  if (data !== undefined) {

    // Return chart
    return (
      <div>
        <Chart data={data} />
      </div>
    );

  // If 'data' is undefined return "Loading..." screen
  } else {
    return  (
      <div>
        Loading...
      </div>
    );
  }

};


export default App;