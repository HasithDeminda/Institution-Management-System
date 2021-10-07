
import React from 'react'
import './sidebar.css'
import {
    LineStyle,
    Timeline,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Student Management</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Student List
              </li>
            </Link>

            <Link to="/addstudents" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Students
              </li>
            </Link>
            <Link to="/blogs" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Blogs
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Teacher Management</h3>
          <ul className="sidebarList">
            <Link to="/teacher/list" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Teachers List
              </li>
            </Link>
            <Link to="/teacher/add" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Add Teachers
              </li>
            </Link>
            <Link to="/teacher/reports" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Class Management</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              View Classes
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Time Table
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Request Handling</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Requests
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Feedbacks
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Payments</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Approve Payments
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Payments List
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Employee Management</h3>
          <ul className="sidebarList">
            <Link to="/addstaff" className="link">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Add Employee
              </li>
            </Link>
            <Link to="/viewstaff" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Pay Salary
              </li>
            </Link>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
<br/>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Attendance Management</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  View Attendance
                </li>
                
                
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
