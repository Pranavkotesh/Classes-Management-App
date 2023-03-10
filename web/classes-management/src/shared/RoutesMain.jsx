import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import ClassMain from "../features/classes/ClassMain";
import TeacherMain from "../features/teachers/TeacherMain";
import DashboardPage from "../features/dashboard/DashboardPage";
import App404Page from "./components/app-404-page/App404Page";

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
              <Navigate to={"dashboard"} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
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
    backgroundColor: "#f5f5f5",
    paddingTop: 64,
  },
}));
export default RoutesMain;
