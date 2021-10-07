import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/Users";
import UserUpdate from "./pages/userUpdate/UserUpdate";
import AddStudent from "./pages/addStudent/AddStudent";

import { useState } from "react";

//teacher management
import AddTeacher from "./pages/manageTeacher/AddTeacher";
import ViewTeacher from "./pages/manageTeacher/ShowTeachers";
import UpdateTeacher from "./pages/manageTeacher/EditTeacher";
import DeleteTeacher from "./pages/manageTeacher/DeleteTeacher";

import ListClass from "./pages/ViewClass/ViewClass";
import AddstaffFrom from "./pages/AddEmpoolye/From";
import Profile from "./pages/Staff profile cards/Profile Cards";
import Profilepage from "./pages/Profile page/profilepage";
import Profileupdate from "./pages/Profile Update page/Profileupdate";
import Allowance from "./pages/allowance/allowance";
import Paysalary from "./pages/PaySalary/paysalary";
import Staffreport from "./pages/Staff report/Saffreport";
import AllBlogs from "./pages/Blogs/allBlogs";
import ViewBlogs from "./pages/Blogs/viewBlogs";



function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList setSearch={setSearch} search={search} />
          </Route>
          <Route path="/addstudents">
            <AddStudent />
          </Route>
          <Route path="/user/:_id">
            <UserUpdate />
          </Route>
          <Route path="/newUser">
            <AddStudent />
          </Route>
          <Route path="/blogs">
            <AllBlogs />
          </Route>
          <Route path="/viewblogs/:_id">
            <ViewBlogs />
          </Route>
          <Route path="/viewClass">
            <ListClass />
          </Route>
          <Route path="/addstaff">
            <AddstaffFrom />
          </Route>
          <Route path="/viewstaff">
            <Profile />
          </Route>
          <Route path="/proflie/:nic">
            <Profilepage />
          </Route>
          <Route path="/update/proflie/:nic">
            <Profileupdate />
          </Route>
          <Route path="/allowance/:nic">
            <Allowance />
          </Route>
          <Route path="/paysalary/:nic">
            <Paysalary />
          </Route>
          <Route path="/staffreport">
            <Staffreport />
          </Route>
          {/* <Route path="/teacher/add">
            <AddTeacher />
          </Route>
          <Route path="/teacher/list">
            <ViewTeacher />
          </Route>
          <Route path="/teacher/update/:id">
            <UpdateTeacher />
          </Route>
          <Route path="/teacher/delete/:id">
            <DeleteTeacher />
          </Route> */}
          <Route path="/teacher/add" component={AddTeacher} />
          <Route path="/teacher/list" component={ViewTeacher} />
          <Route path="/teacher/update/:id" component={UpdateTeacher} />
          <Route path="/teacher/delete/:id" component={DeleteTeacher} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
