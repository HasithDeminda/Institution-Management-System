//Student Management

import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyNotes from "./pages/MyNotes/MyNotes";
import CreateNote from "./pages/MyNotes/CreateNote";
import SingleNote from "./pages/MyNotes/SingleNote";
import { useState } from "react";
import UserProfile from "./pages/UserProfile/UserProfile";

//import Header from '../src/components/Headers/TeacherHeader/tHeader'
// import SHeader from '../src/components/Headers/StudentHeader/sHeader'
import Res from "../src/pages/ResultsList-Teacher/resultList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ClassAdd from '../src/pages/AddClass/ClassAdd'
// import RejectClass from '../src/pages/RejectClass/RejectClass'

import Answers from "./pages/answerList-Teacher/answers";
import ExamList from "./pages/examList-teacher/examList";
import OnGoingExam from "./pages/onGoing Exam/onGoingExam";
import MyResults from "./pages/myResults/myResults";
import ExamPortal from "./pages/ExamPortal/examportal";

//Sam check Css
// import Request from "../src/pages/request/delatils";

//Devmi check Css
// import AddPayment from "./pages/StudentPayment/AddPayment";
import UpdateExam from "../src/pages/examList-teacher/updateBtn";
import UpdateResults from "../src/pages/ResultsList-Teacher/updateBtn";

//teacher management

import TeacherProfile from "./pages/techerProfile/profile";

//Janani check Css
// import AddAttendance from "./pages/AddAttendance/AddAttendance";
import SubmitAnswer from "./pages/Exam submission/submitAnswer";
import ExamReport from "./pages/Report-exam/examReport";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Router>
        <Switch>
          {/* Student management */}
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/createnote" component={CreateNote} />
          <Route path="/note/:id" component={SingleNote} />
          <Route
            path="/mynotes"
            component={() => <MyNotes setSearch={setSearch} search={search} />}
          />

          {/* Exam function routes */}
          <Route path="/teacher/exam" exact component={ExamList} />
          <Route path="/teacher/res" exact component={Res} />
          <Route path="/teacher/ans" exact component={Answers} />
          {/* <Route path="/teacher/addClass" exact component={ClassAdd} />
          <Route path="/teacher/rejectClass" exact component={RejectClass} /> */}
          <Route path="/student/" exact component={ExamPortal} />
          <Route path="/student/goexam" exact component={OnGoingExam} />
          <Route path="/student/exams" exact component={OnGoingExam} />
          <Route path="/student/goresult" exact component={MyResults} />
          <Route path="/student/results" exact component={MyResults} />
          <Route path="/goexam" component={ExamPortal} />
          <Route path="/student/attempt/:_id" component={SubmitAnswer} />
          <Route path="/teacher/report" component={ExamReport} />
          <Route path="/exam/edit/:_id" component={UpdateExam} />
          <Route path="/teacher/res/edit/:_id" component={UpdateResults} />

          {/* Student request routes */}
          {/* <Route path="/student/request" component={Request} /> */}

          {/* Teacher manage routes */}
          <Route path="/profile" component={TeacherProfile} />

          {/* Attendance Management Routes */}
          {/* <Route
            path="/teacher/addAttendence"
            exact
            component={AddAttendance}/> */}

          {/* Payment function route */}
          {/* <Route path="/student/uploadSlip" component={AddPayment} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
