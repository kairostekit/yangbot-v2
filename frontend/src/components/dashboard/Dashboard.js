import React, { useEffect,useState } from "react";
import Approach from "./Approach";
import AreaChart from "./AreaChart";
import DashboardCards from "./DashboardCards";
import Illustrations from "./Illustrations";
import Projects from "./Projects";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import BarChart  from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import "../../App.css";
 const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 2,
  },
}); 

function Dashboard() {
  const [data, setWordData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/linebot_log2')
    .then(res => res.json())
    .then(data => {
      const wordCloudData = data.map(item => ({
        text: item.textProperty, // แทนที่ 'textProperty' ด้วย property ที่มาจาก API
        value: item.valueProperty, // แทนที่ 'valueProperty' ด้วย property ที่มาจาก API
      }));
      setWordData(wordCloudData);
    })
    .catch(err => console.log(err));
}, []);



  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3333/authen',{
      method: 'POST', // or 'PUT
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+token
      }
       
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok'){
        
      } else {
        alert ('authen failed')
        localStorage.removeItem('token')
        window.location = '/chalothon/yangbot_frontend'
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  })

  const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
      }, [])

      const UserGet = () => {
        fetch("http://localhost:3333/linebot_log2")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
      }

      

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <Typography variant="h2" style={{ fontSize: '40px' }}>
        ภาพรวมของข้อมูลระบบยางบอท
      </Typography>

        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm "
        >
          <i className="fas fa-download fa-sm text-white-50 "></i> Refresh
        </a>
      </div>
      <div className="row">
        <DashboardCards />
      </div>
      <div className="container-fluid  ">
        <div className="row  ">
          <div className="col-xl-6 mb-4 ml-4  ">
            <BarChart/> 
          </div>
          <div className="col-lg-5 mb-4 ml-5 ">
            <PieChart/>
          </div>
        </div>
       <div className="row">
       <iframe height="631" src="https://misdata.rubberthaiecon.com/report/rbprice.php" frameborder="0" width="927" scrolling="no" align="center"></iframe>

       </div>
        
      </div>
     
      
  
    </>
    
  );
}

export default Dashboard;
