import React from "react";
import DashboardImage from "../../assets/img/undraw_posting_photo.svg";

function Illustrations() {

  const imageUrl = "https://doaenews.doae.go.th/wp-content/uploads/2021/12/%E0%B9%83%E0%B8%9A%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-3-1024x683.jpg";
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">ลักษณะโรคใบร่วงของยางพารา</h6>
        </div>
        <div className="card-body"   >
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src={imageUrl}
            />
          </div>
          <p>
          โรคใบร่วงยางพารา เกิดจากเชื้อรา Phytophthora botryosa Chee หากเกิดโรคจะมีลักษณะ ใบแก่ เกิดจุดแผลฉ่ำน้ำ ขนาดไม่แน่นอน บริเวณก้านใบมีรอยช้ำ จุดกึ่งกลางของรอยแผลช้ำ มีหยดน้ำยางเกาะอยู่ ใบย่อยหลุดร่วงจากก้านใบ 
          ใบร่วงทั้งที่ยังมีสีเขียวสด หรือเหลือง หากเชื้อเข้าทำลายฝักจะเกิดอาการเน่า โดยอาจพบเชื้อราสีขาวเจริญปกคลุม ฝักไม่แตก และไม่ร่วงหล่น{" "}
           
          </p>
          <a target="_blank" rel="nofollow" href="https://esc.doae.go.th/wp-content/uploads/2019/08/warn286.pdf">
            เพิ่มเติม &rarr;
          </a>
        </div>
      </div>
    </>
  );
}

export default Illustrations;
