import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './DoughnutChart.css';
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#004d40", "#00bfa5", "#ffe57f", "#ffc400"], // กำหนดสีตามลำดับ
      },
    ],
  });

  useEffect(() => {
    // ส่งคำขอ GET ไปยัง API ของคุณ เพื่อดึงข้อมูลจาก URL /linebot_log_count
    axios
      .get("http://localhost:3333/linebot_log_count_types") // เปลี่ยน URL เป็น URL ของ API ของคุณ
      .then((response) => {
        // ดึงข้อมูลจาก API และอัปเดตแผนภูมิ
        const labels = response.data.map((entry) => entry.QuestionType);
        const data = response.data.map((entry) => entry.Count);

        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: ["#004d40", "#00bfa5", "#ffe57f", "#ffc400"], // กำหนดสีตามลำดับ
            },
          ],
        });
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการโหลดข้อมูล", error);
      });
  }, []);

  return <Doughnut data={chartData} />;
}



export default DoughnutChart;
