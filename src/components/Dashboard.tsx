import React, { useState, useEffect } from "react";
import '../css/Dashboard.css';
import BarChart from './cards/BarChart'
import Donut from "./cards/Donut"
import Radar from './cards/Radar'
import PieChart from './cards/PieChart'
import LineChart from "./cards/LineChart";
import BigNum from "./cards/BigNum"
import axios from 'axios'

function Dashboard() {
  const [dataTables, setTables] = useState([
    {
      title: 'Line chart',
      dataset: 'letters_used_alphabetical',
      data: null
    },
    {
      title: 'Radar',
      dataset: 'vowel_counts',
      data: null
    },
    {
      title: 'Bar chart',
      dataset: 'starting_letter_counts',
      data: null
    },
    {
      title: 'Donut',
      dataset: 'pw_contains_numseq',
      data: null
    },
    {
      title: 'Pie chart',
      dataset: 'pw_totals_num_chars',
      data: null
    },
    {
      title: 'Big Numbers',
      dataset: 'bignum_averages',
      data: null
    },
  ]);
  //Stores Received lists in an array
  //DATA TYPES: N/A
  const [returnedLists, setRenderLists] = useState<any[]>([]);
  const nodePropagate = 'services/m/propagate'
  useEffect(() => {
    populatePage()
  }, [])

  function createList() {
    let newList = [...dataTables]

    let payload = {
      vowel: 'vowel_counts',
      startingLetter: 'starting_letter_counts',
      pwTotals: 'pw_totals_num_chars',
      pwContains: 'pw_contains_numseq',
      lettersUsed: 'letters_used_alphabetical',
      bignumAve: 'bignum_averages'
    }

    axios.get(nodePropagate).then((response) => {
      //Response is an array of objects.
      const array = response.data
    })
  }

  return (
    <div className="Dashboard">
      <br />
      <div className='Dash-body'>
        <BarChart></BarChart>
        <Donut></Donut>
        <Radar></Radar>
        <PieChart></PieChart>
        <LineChart></LineChart>
        <BigNum></BigNum>
      </div>
    </div>
  );
  
  function populatePage() {
    axios.get(nodePropagate).then((response) => {
      //Response is an array of lists, that contain multiple objects.
      const array = response.data
      console.log(array)
      setRenderLists(array)
    })
  }
}

export default Dashboard;
