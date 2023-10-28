import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';

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
    marginTop: theme.spacing(2)

  },
});

function App(props) {
  const { classes } = props;
  

  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:3333/linebot_log_count_types')
    .then((response) => {
      const rawData = response.data;
      // 1. กรองข้อมูลที่มีค่าซ้ำ
      const uniqueData = rawData.reduce((accumulator, current) => {
        const existingItem = accumulator.find(item => item.QuestionType === current.QuestionType);
        if (!existingItem) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
      // 2. อัปเดต state หรือตัวแปรของคุณเมื่อข้อมูล API มีการเปลี่ยนแปลง
      setApiData(uniqueData);
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error);
    });
}, []);
  // ...
  console.log(apiData)

  useEffect(() => {
    axios.get('http://localhost:3333/linebot_log_count')
      .then((response) => {
        const new2Data = response.data;
        // 2. อัปเดต state หรือตัวแปรของคุณเมื่อข้อมูล API มีการเปลี่ยนแปลง
        setApiData2(new2Data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);
  console.log(apiData2)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.appBarSpacer} />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
             
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
             
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              
            </Paper>
          </Grid>
          
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  width={500}
                  height={300}
                  data={apiData}
                  margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="QuestionType" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="QuestionTypeCount" fill="#8884d8" />
                  <Bar dataKey="count" fill="#FF9AA2" />
                  
                </BarChart>
              </ResponsiveContainer>
           
          
            <ResponsiveContainer width="100%" height={300}>
                  <PieChart width={400} height={400}>
                    <Legend  />
                    <Pie dataKey="QuestionTypeCount" isAnimationActive={false} data={apiData2} outerRadius={100} label nameKey="QuestionType">
                      <Cell  fill="#8884d8" />
                      <Cell fill="#FF9AA2" />
                      <Cell fill="#8FC1A9" />
                      <Cell fill="#8FC1A9" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
            
          <Grid item xs={12}>
            <Paper className={classes.paper}>
             
            </Paper>
          </Grid>
        </Grid>
      </Container>
     
    </div>
  );
}

export default withStyles(styles)(App);
