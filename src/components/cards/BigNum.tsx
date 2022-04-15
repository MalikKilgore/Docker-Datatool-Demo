import React, { Component } from "react";
import Chart from "react-apexcharts";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

function BigNum() {

  return (
    <div className="bigNumContainer">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="bigNum">
          <Typography variant="h4" component="div">
          6.6513
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Average Length
          </Typography>
        </div>
      </CardContent>
    </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="bigNum">
            <Typography variant="h4" component="div">
            5.0303
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Average Letters
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="bigNum">
            <Typography variant="h4" component="div">
            1.6176
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Average Numbers
            </Typography>
          </div>
        </CardContent>
      </Card>      
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="bigNum">
            <Typography variant="h4" component="div">
            0.0253
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Average Upper Case
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="bigNum">
            <Typography variant="h4" component="div">
            0.0034
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Average Special Chars
            </Typography>
          </div>
        </CardContent>
      </Card>
      </div>
  );
}


export default BigNum;
