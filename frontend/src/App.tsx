import React, { useState } from 'react';

// Import components
import * as DataAPI from './api/DataAPI'
import Chart from "./components/Chart";
import ErrorNotification from "./components/ErrorNotification";


const App: React.FC = () => {
  const [ data, setData ] = useState<Array<[string, number]>>();
  const [ message, setMessage ] = useState<string | null>(null);
  const text: string = "Loading...";

  // Perform GET request to backend after render
  React.useEffect(() => {
    console.log('effect');
    DataAPI.onData(setData, setMessage);
  }, []);

  // If 'data' is not undefined return chart
  if (data !== undefined) {

    // Return chart or error message
    return (
      <div>
        {message ? (
          <ErrorNotification message={message} />
        ) : (
          <Chart data={data} />
        )}
      </div>
    );

  // If 'data' is undefined return "Loading..." or error message
  } else {
    return  (
      <div>
        {message ? (
          <ErrorNotification message={message} />
        ) : (
          text
        )}
      </div>
    );
  }

};


export default App;