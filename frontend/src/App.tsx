import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { DataEntry } from "./types";

const baseUrl = 'http://localhost:3001/api/data';

const App: React.FC = () => {
  const [stocks, setStocks] = useState<DataEntry>();

  useEffect(() => {
    console.log('effect');
    axios
      .get<DataEntry>(baseUrl)
      .then(response => {
        console.log('promise fulfilled');
        console.log(response.data, 'response.data');
        setStocks(response.data);
    });
  }, []);

  console.log(stocks, 'console log of stocks in App.tsx');

  if (stocks !== undefined) {
    return (
      <div>
        {stocks['c'].map((entry: number, index) => 
          <li key={index}>{entry}</li> 
        )}
      </div>
    );
  } else {
    return null;
  }

};

export default App;