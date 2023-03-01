import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../features/dashboard/DashboardPage";
import LoginPage from "../features/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
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
      </Routes>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
  },
}));
export default RoutesMain;
