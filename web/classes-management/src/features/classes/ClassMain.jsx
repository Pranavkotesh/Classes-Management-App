import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import AppButton from "../../shared/components/app-button/AppButton";
import AppTable from "../../shared/components/app-table-component/AppTableComponent";
import { classAbout } from "../../shared/components/app-headings/AppHeadings";
import { NameChanger } from "../../App";
import Box from "@mui/material/Box";
import ManageClasses from "./ManageClasses";
import CustomDrawerComponent from "../../shared/components/customDrawer/CustomDrawer";
import AddIcon from "@mui/icons-material/Add";

const ClassMain = () => {
  // const { name, changeName } = React.useContext(NameChanger);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [classesList, setCLassesList] = useState([]);
  const [manageClasses, setManageClasses] = useState({
    isOpen: false,
    index: -1,
    data: {},
  });
  const handleAdd = () => {
    setManageClasses({ isOpen: true, index: -1, data: undefined });
  };
  return (
    <AppLayout
      title="Classes"
      selectedSchool={selectedSchool}
      selectedYear={selectedYear}
      onSchoolChange={(event) => setSelectedSchool(event.target.value)}
      onYearChange={(event) => setSelectedYear(event.target.value)}
    >
      <main>
        <Grid container spacing={1} marginBottom='3%'>
         
        <Grid item xs={12} sm={12} >
        <AppCard>
                <Box textAlign="center">
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Create a new Class
                  </Typography>

                  <Box textAlign="center">
                    <IconButton onClick={()=>handleAdd()}>
                      <AddIcon
                        sx={{
                          backgroundColor: "background.button",
                          fontSize: 15,
                          borderRadius: 6,
                          color: "primary.add",
                          width: 50,
                          height: 50,
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                </AppCard>
              </Grid>
          {/* <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Box sx={{ marginTop: 2 }}>
              <AppButton
                btnText="Add a Class"
                onClick={() => {
                  handleAdd();
                }}
              />
            </Box>
          </Grid> */}
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <BoxElement elementOne="Management" elementTwo="classes" />
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <AppCard title="CLASS LIST" minHeight={120} />
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <AppCard title="ABOUT" minHeight={170}>
                      <Grid container spacing={0}>
                        <AppTable
                          titles={classAbout}
                          minHeight="10vh"
                          color="#bfbfbf"
                          borderBody="2px solid rgba(217,217,217)"
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <AppButton btnText="Edit" onClick={()=>handleAdd()} />
                      </Grid>
                    </AppCard>
                  </Grid>
                  <Grid item xs={12}>
                    <AppCard title="CLASS INFO" minHeight={120}></AppCard>
                  </Grid>
                  <Grid item xs={12}>
                    <AppCard title="CLASS TEACHERS" minHeight={100}></AppCard>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
      {manageClasses.isOpen && (
        <CustomDrawerComponent
          title={manageClasses.index !== -1 ? "Edit Class" : "Add CLass"}
          isOpen={true}
          onClose={() => {
            setManageClasses({ index: -1, isOpen: false });
          }}
        >
          <ManageClasses
            data={manageClasses.data}
            onClose={(data) => {
              if (data) {
                if (manageClasses.index === -1) {
                  setCLassesList([{ ...data }, ...classesList]);
                } else {
                  const temp = [...classesList];
                  temp[manageClasses.index] = data;
                  setCLassesList(temp);
                }
              }
              setManageClasses({ index: -1, isOpen: false, data: {} });
            }}
          />
        </CustomDrawerComponent>
      )}
    </AppLayout>
  );
};
export default ClassMain;
