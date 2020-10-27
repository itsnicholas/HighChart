Apple Inc. stock chart web app

Language: JavaScript

Keywords: React, TypeScript, Node.js/Express, Highcharts, Heroku

The web app displays an Apple Inc. (NASDAQ: AAPL) 100 day stock chart. The frontend performs a GET request to the backend, and displays the Apple Inc. stock chart based on the response on render. When the backend is called by the frontend’s GET request, the backend makes GET request to the Alpha Vantage API and this response data is sent with the response to the frontend.

The project can be accessed at: https://afternoon-peak-54447.herokuapp.com/

The project would benefit from e.g. using better documentation standards and perhaps using a library for validation of external data received by the backend.