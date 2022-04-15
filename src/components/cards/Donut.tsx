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
  options: any,
  series: any,
  labels: any,
}

export class Donut extends React.Component<{}, cardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        title: {
          text: 'Passwords Containing Number Sequence'
        },
      },
      series: [486, 9514],
      labels: ['Without', 'With']
    }
  }

  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="donut">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"
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


export default Donut;
