import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
  data: Array<[string, number]>;
}

const Chart: React.FC<Props> = ({ data })  => {

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
    <HighchartsReact highcharts={Highcharts} options={options} />
  );

};


export default Chart;