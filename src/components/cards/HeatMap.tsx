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
  series: any
}

function generateData(arg0: string, arg1: number) {
  //Data function needs to be an array that can slot in multiple objects containing x: and y:. TS interface for this.
  let x
  let y
  return {
    x: arg0,
    y: arg1
  }
}

export class HeatMap extends React.Component<{}, cardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [{
        name: 'Metric1',
        data: [{
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric2',
        data: [{
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric3',
        data: [{
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 47
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric4',
        data: [{
          x: 'W1',
          y: 73
        }, {
          x: 'W2',
          y: 72
        }, {
          x: 'W3',
          y: 45
        }, {
          x: 'W4',
          y: 80
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric5',
        data: [{
          x: 'W1',
          y: 9
        }, {
          x: 'W2',
          y: 47
        }, {
          x: 'W3',
          y: 22
        }, {
          x: 'W4',
          y: 12
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric6',
        data: [{
          x: 'W1',
          y: 60
        }, {
          x: 'W2',
          y: 4
        }, {
          x: 'W3',
          y: 85
        }, {
          x: 'W4',
          y: 24
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric7',
        data: [{
          x: 'W1',
          y: 53
        }, {
          x: 'W2',
          y:82
        }, {
          x: 'W3',
          y: 16
        }, {
          x: 'W4',
          y: 39
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric8',
        data: [{
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      },
      {
        name: 'Metric9',
        data: [{
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        },
        {
          x: 'W1',
          y: 22
        }, {
          x: 'W2',
          y: 29
        }, {
          x: 'W3',
          y: 13
        }, {
          x: 'W4',
          y: 32
        }]
      }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        title: {
          text: 'HeatMap Chart'
        },
      },
    };
  }
  
  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="cardtemplate">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="heatmap"
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

export default HeatMap;
