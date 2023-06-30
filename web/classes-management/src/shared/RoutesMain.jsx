import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import ClassMain from "../features/classes/ClassMain";
import TeacherMain from "../features/teachers/TeacherMain";
import App404Page from "./components/app-404-page/App404Page";
import DefineSchedule from "../features/schedule/ScheduleMain";
import CreateClass from "../features/createclass/CreateClass";
import CreateTeachersMain from "../features/createteachers/CreateTeachersMain";
import ClassesSummary from "../features/classessummary/ClassesSummary";
import NewPage from "../features/newpage/NewPage";


const RoutesMain = () => {
  const classes = useStyles();
  const checkSessionExists = () => {
    //add logic to check the session. adding false for now
    return false;
  };

  return (
    <div className={`${classes.main} `}>
      <Routes>
        <Route
          path="/"
          element={
            checkSessionExists() ? (
              <Navigate to={"classessummary"} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="createteachers"
          element={
            <PrivateRoute>
              <CreateTeachersMain />
            </PrivateRoute>
          }
        />

        <Route
          path="classessummary"
          element={
            <PrivateRoute>
              <ClassesSummary />
            </PrivateRoute>
          }
        />
        <Route
          path="classes"
          element={
            <PrivateRoute>
              <ClassMain />
            </PrivateRoute>
          }
        />
        <Route
          path="teachers"
          element={
            <PrivateRoute>
              <TeacherMain />
            </PrivateRoute>
          }
        />
        <Route
          path="schedule"
          element={
            <PrivateRoute>
              <DefineSchedule />
            </PrivateRoute>
          }
        />
        <Route
          path="createclass"
          element={
            <PrivateRoute>
              <CreateClass />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="newpage"
          element={
            <PrivateRoute>
              <NewPage />
            </PrivateRoute>
          }
        /> */}

        <Route path="*" element={<App404Page />} />
      </Routes>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  main: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "background.default",
    paddingTop: 64,
  },
}));
export default RoutesMain;
