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

export class PieChart extends React.Component<{}, cardState> {
  constructor(props: any) {
    super(props);

    this.state = {
          
      series: [16176, 50303],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Total Nums', 'Total chars',],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            title: {
              text: 'Basic Pie Chart'
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }

  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="piechart">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="pie"
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


export default PieChart;
