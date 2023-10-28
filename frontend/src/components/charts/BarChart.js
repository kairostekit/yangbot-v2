import React, { useState, useEffect } from 'react';
import { ResponsiveContainer,XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart, 
  Pie, Cell, } from 'recharts';
import axios from 'axios';


export default function BasicBars() {

  const [apiData, setApiData] = useState([]);
  

  function formatDateString(dateString) {
    const dateParts = dateString.split('-'); // แยกส่วนวันที่
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
  
    // สร้างวันที่ในรูปแบบ JavaScript Date
    const date = new Date(year, month - 1, day);
  
    // แปลงวันที่ให้อยู่ในรูปแบบที่ต้องการ (เช่น DD/MM/YYYY)
    const formattedDate = `${month}/${year}`;
    return formattedDate;
  }

  useEffect(() => {
    axios.get('http://localhost:3333/barimg')
      .then((response) => {
        const rawData = response.data;
  
        // สร้างอ็อบเจ็กต์ที่ใช้เก็บข้อมูลตามวันที่
        const dateMap = {};
  
        rawData.forEach((item) => {
          const formattedDate = formatDateString(item.Date);
          if (!dateMap[formattedDate]) {
            dateMap[formattedDate] = 0;
          }
          dateMap[formattedDate] += item.count;
        });
  
        // แปลงข้อมูลใน dateMap เป็นรูปแบบที่เหมาะสำหรับใช้กับ BarChart
        const chartData = Object.keys(dateMap).map((date) => ({
          Date: date,
          count: dateMap[date],
        }));
  
        // อัปเดต state หรือตัวแปรของคุณเมื่อข้อมูล API มีการเปลี่ยนแปลง
        setApiData(chartData);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);
  
  return (
    <>
    <div className="row ">
        <div className="card shadow mb-4 ">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between row">
            <h4 className="m-0 font-weight-bold text-primary row w-50">
              สถิติการอัพโหลดรูป
            </h4>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body  ">
            <div className="row " >
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  width={500}
                  height={300}
                  data={apiData}
                  margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  
                  <Bar dataKey="count" fill="#FF9AA2" />
                  
                </BarChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>
      </div>
    </>
    
  );
}
