import React, {useState, useEffect} from "react";

function DashboardCards() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3333/linebot_image");
        const data1 = await response.json();

        const response2 = await fetch("http://localhost:3333/linebot_log");
        const data2 = await response2.json();

        const response3 = await fetch("http://localhost:3333/wepapp_labelsuccess");
        const data3 = await response3.json();

        const response4 = await fetch("http://localhost:3333/webapp_users");
        const data4 = await response4.json();
        setCardData([
          {
            heading: "รูปภาพใบยางทั้งหมด",
            price: data1.count + "รูป",
            icon: "image",
            color: "primary",
          },
          {
            heading: "รูปภาพใบยางที่ label แล้ว",
            price: data3.count + "รูป",
            icon: "tags",
            color: "info",
          },
          {
            heading: "จำนวนผู้ใช้งาน (Line)",
            price: data4.count + "ผู้ใช้งาน",
            icon: "sun-plant-wilt",
            color: "success",
          },
          {
            heading: "จำนวนคำถามที่ถามเข้ามา",
            price: data2.count + "คำถาม",
            icon: "person-circle-question",
            color: "warning",
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {cardData.map((data, index) => {
        return (
          <div className="col-xl-3 col-md-6 mb-4" key={index}>
            <div className={`card border-left-${data.color} shadow h-100 py-2`}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div
                      className={`text-lg font-weight-bold text-${data.color} text-uppercase mb-1`}
                    >
                      {data.heading}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {data.price}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i
                      className={`fas fa-${data.icon} fa-2x text-gray-300`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DashboardCards;
