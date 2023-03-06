import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";
//import DashboardPage from "../features/dashboard/DashboardPage";
//import _class from "../features/classMain/class";
import LoginPage from "../features/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import ClassN from "../features/classMain/Class";
const RoutesMain = () => {
  const classes = useStyles();
  const checkSessionExists = () => {
    //add logic to check the session. adding false for now
    return false;
  };
  return (
    <div className={classes.main}>
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
              <ClassN/>
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
    marginTop:2
  },
}));
export default RoutesMain;
