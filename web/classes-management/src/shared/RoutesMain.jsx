import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";
//import DashboardPage from "../features/dashboard/DashboardPage";
//import _class from "../features/classMain/class";
import LoginPage from "../features/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import ClassN from "../features/classMain/Class";
import TeacherMain from "../features/teachers/TeacherMain";
import AppMainBar from "../shared/components/app-main-bar/AppMainBar";
const RoutesMain = () => {
  const classes = useStyles();
  const checkSessionExists = () => {
    //add logic to check the session. adding false for now
    return false;
  };
  return (
    <div style={{ display: "flex" }}>
      <AppMainBar />
      <div className={`${classes.main} `}>
        <Routes>
          <Route
            path=""
            element={
              checkSessionExists() ? (
                <Navigate to={"classes"} replace />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="classes"
            element={
              <PrivateRoute>
                <ClassN />
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
        </Routes>
      </div>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  main: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#f5f5f5",
    paddingTop: 64,
  },
}));
export default RoutesMain;
