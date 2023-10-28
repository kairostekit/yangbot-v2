import React, { useState } from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  const [compoIsDrop, setCompoIsDrop] = useState(false);
  const [utiliIsDrop, setUtiliIsDrop] = useState(false);
  const [pageIsDrop, setPageIsDrop] = useState(false);



  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon   ">
            <img src="https://i.ibb.co/2v3kVkR/sun-farm-100-40px-40-40px-1.png" alt="รูปภาพใบไม้" max-width="1000px" />
          </div>
          <div className="sidebar-brand-text mx-3" style={{ fontSize: '18px' }}>
            Yangbot <sup></sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span style={{ fontSize: '18px' }} >Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        {/* <!-- Heading --> */}
        <div className="sidebar-heading" style={{ fontSize: '16px' }}>Menu</div>
        {/* <!-- Nav Item - UserlogEdit --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            <i className="fas fa-fw fa-user"></i>
            <span style={{ fontSize: '18px' }}>บัญชีผู้ใช้งาน</span>
          </Link>
        </li>
        {/* <!-- Nav Item - Question --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/question">
            <i className="fas fa-fw fa-circle-question"></i>
            <span style={{ fontSize: '18px' }}>คำถามที่พบบ่อย</span>
          </Link>
        </li>
        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/upload">
            <i className="fas fa-fw fa-file-arrow-up"></i>
            <span style={{ fontSize: '18px' }}>อัพโหลด</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/tables">
            <i className="fas fa-fw fa-table"></i>
            <span style={{ fontSize: '18px' }}>จัดการข้อมูลรูปภาพ</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mapshow">
            <i className="fas fa-fw fa-table"></i>
            <span style={{ fontSize: '18px' }}>แสดงพื้นที่</span>
          </Link>
        </li>


        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}

      </ul>
    </>
  );
}

export default Sidebar;
