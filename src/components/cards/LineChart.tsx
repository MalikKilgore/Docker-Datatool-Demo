import React, { Component } from "react";
import Chart from "react-apexcharts";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface cardState {
  options: any
  series: any;
}

export class LineChart extends React.Component<{}, cardState> {
  constructor(props: any) {
    super(props);

    this.state = {
          
      series: [{
          name: "Number of passwords",
          data: [1567, 1800, 4007, 2663, 4552, 2474, 467, 385, 148]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Password Length',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [4, 5, 6, 7, 8, 9, 10, 11, '12+'],
        }
      },
    
    
    };
  }

  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="linechart">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="500"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}


export default LineChart;
