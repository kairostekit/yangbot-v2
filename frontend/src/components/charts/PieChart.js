import React, { useState, useEffect } from 'react';
import { ResponsiveContainer,XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';
import axios from 'axios';


export default function BasicBars() {

  const [apiData2, setApiData] = useState([]);
  

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
      // 2. อัปเดต state เมื่อข้อมูล API มีการเปลี่ยนแปลง
      setApiData(uniqueData);
    })
    .catch((error) => {
      console.error('Error fetching data from API:', error);
    });
}, []);
  // ...
  
  return (
    <>
    <div className="row ">
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between row">
            <h4 className="m-0 font-weight-bold text-primary row text-md">
              คำถามแต่ละประเภท
            </h4>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <div className="row ">
            <ResponsiveContainer width="100%" height={300} > 
                  <PieChart width={400} height={400} >
                    <Legend  />
                    <Pie dataKey="QuestionTypeCount" isAnimationActive={false} 
                    data={apiData2} 
                    outerRadius={100} 
                    label 
                    nameKey="QuestionType">
                      <Cell  fill="#4DB6AC " />
                      <Cell fill="#81C784 " />
                      <Cell fill="#FFA000 " />
                      <Cell fill="#AED581 " />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
            </div>
            
          </div>
        </div>
      </div>
    </>
    
  );
}
