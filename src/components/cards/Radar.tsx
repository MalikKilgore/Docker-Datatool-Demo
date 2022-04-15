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

export class Radar extends React.Component<{}, cardState> {
  constructor(props: any) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Series 1',
        data: [4969, 4990, 3273, 3511, 1316, 1082],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Passwords Containing Vowels'
        },
        xaxis: {
          categories: ['a', 'e', 'i', 'o', 'u', 'y']
        }
      },
    };
  }

  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="radar">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="radar"
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


export default Radar;
