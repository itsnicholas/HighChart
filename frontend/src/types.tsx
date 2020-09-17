export interface SeriesFormat {
  [entryTitle: string]: {
      ["1. open"]: string,
      ["2. high"]: string,
      ["3. low"]: string,
      ["4. close"]: string,
      ["5. volume"]: string
  }
}

export interface Stock {
  open: string,
  high: string,
  low: string,
  close: string,
  volume: string
}[]

interface MetadataFormat {
  ["1. Information"]: string,
  ["2. Symbol"]: string,
  ["3. Last Refreshed"]: string,
  ["4. Output Size"]: string,
  ["5. Time Zone"]: string
}

export interface TimeSeriesResponseFormat {
  [key: string]: MetadataFormat | SeriesFormat
}