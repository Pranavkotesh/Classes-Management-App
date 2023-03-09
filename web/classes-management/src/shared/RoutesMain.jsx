import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";
//import DashboardPage from "../features/dashboard/DashboardPage";
//import _class from "../features/classMain/class";
import LoginPage from "../features/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import ClassN from "../features/classMain/Class";
import TeacherMain from "../features/teachers/TeacherMain";
import MiniDrawer from "./components/app-drawer-component/AppDrawerComponent";
const RoutesMain = () => {
  const classes = useStyles();
  const checkSessionExists = () => {
    //add logic to check the session. adding false for now
    return false;
  };
  return (
    <div className={classes.main}>
      <MiniDrawer />
      <Routes>
        <Route
          path=""
          element={
            checkSessionExists() ? (
              <Navigate to={"classMain"} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="classMain"
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
  );
};
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    marginTop: 2,
  },
}));
export default RoutesMain;
