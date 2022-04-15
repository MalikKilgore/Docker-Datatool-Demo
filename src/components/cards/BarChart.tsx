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

export class BarChart extends React.Component<{}, cardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        title: {
          text: 'Starting Letter Counts'
        },
        xaxis: {
          categories: ['s', 1, 'c', 'b', 'm', 'p', 0, 2, 'a', 'd']
        }
      },
      series: [
        {
          name: "series-1",
          data: [908, 894, 643, 639, 588, 492, 472, 437, 432, 414]
        }
      ]
    };
  }

  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="barchart">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
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


export default BarChart;
