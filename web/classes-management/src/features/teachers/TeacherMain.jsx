import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AppTextInput from "../../shared/components/app-text-input/AppTextInput";
import AppCard from "../../shared/components/app-card/AppCard";
import AppLayout from "../../shared/components/app-layout/AppLayout";
import AppButton from "../../shared/components/app-button/AppButton";
import BoxElement from "../../shared/components/app-box-component/AppBoxComponent";
import BasicSelect from "../../shared/components/app-select-box/AppSelectInput";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AppTable from "../../shared/components/app-table-component/AppTableComponent";
import { teacherArr } from "../../shared/components/app-constants/DataConstant";
import { teachersAbout, teachersAssigned } from "../../shared/components/app-headings/AppHeadings";
import Box from "@mui/material/Box";
import ManageTeachers from "./ManageTeachers";
import CustomDrawerComponent from "../../shared/components/customDrawer/CustomDrawer";
import AddIcon from "@mui/icons-material/Add";
const TeacherMain = () => {
 
  const [searchObj, setSearchObj] = useState({
    class: "",
    search: "",
  });
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [manageTeachers, setManageTeachers] = useState({
    isOpen: false,
    index: -1,
    data: {},
  });
  const[teachersList,setTeachersList]=useState([]);

  const handleSearchObjChange = (event) => {
    const { name, value } = event.target;
    setSearchObj({
      ...searchObj,
      [name]: value,
    });
  };
  const handleAdd = () => {
    setManageTeachers({ isOpen: true, index: -1, data: undefined });
  };

  return (
    <AppLayout
      title="Teachers"
      
      selectedSchool={selectedSchool}
      selectedYear={selectedYear}
      onSchoolChange={(event) => setSelectedSchool(event.target.value)}
      onYearChange={(event) => setSelectedYear(event.target.value)}
    >
      
      <main>
      <Grid container spacing={2}>
        <BoxElement elementOne="Management" elementTwo="Teachers" />
        <Grid item xs={12}>
          <AppCard padding="0 32px 16px 32px">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={5} md={5} lg={5} sx={{ marginTop: 3 }}>
                <BasicSelect
                  name="class"
                  label="Get Teachers by Class"
                  onChange={handleSearchObjChange}
                  value={searchObj.class}
                  menuItems={teacherArr}
                  icon={<LocalLibraryIcon />}
                  color="#bfbfbf"
                />
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography>OR</Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={5} md={5} lg={5} >
             
                <Box textAlign="center" marginTop='2%'>
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Create a new Teacher
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
                
                {/* <AppTextInput
                  name="search"
                  label="Search a Teacher"
                  placeholder="e.g. First Name / Last Name"
                  onChange={handleSearchObjChange}
                  value={searchObj.search}
                /> */}
              </Grid>
            </Grid>
          </AppCard>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <AppCard title="Teachers List" minHeight={130} />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <AppCard title="About">
                    <Grid container spacing={1} style={{ paddingTop: 16 }}>
                      <AppTable
                        titles={teachersAbout}
                        minHeight="10vh"
                        color="#bfbfbf"
                        borderBody="2px solid rgba(217,217,217)"
                      />
                      <Grid item xs={1}>
                        <AppButton btnText="Edit"  onClick={()=>handleAdd()}/>
                      </Grid>
                    </Grid>
                  </AppCard>
                </Grid>
                <Grid item xs={12}>
                  <AppCard title="Classes Assigned">
                    <Grid container spacing={1} style={{ paddingTop: 16 }}>
                      <AppTable
                        titles={teachersAssigned}
                        minHeight="0vh"
                        color="#bfbfbf"
                        borderBody="white"
                      />
                    </Grid>
                  </AppCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </main>
      {manageTeachers.isOpen && (
        <CustomDrawerComponent
          title={manageTeachers.index !== -1 ? "Edit Teacher" : "Add Teacher"}
          isOpen={true}
          onClose={() => {
            setManageTeachers({ index: -1, isOpen: false });
          }}
        >
          <ManageTeachers
            data={manageTeachers.data}
            onClose={(data) => {
              if (data) {
                if (manageTeachers.index === -1) {
                  setTeachersList([{ ...data }, ...teachersList]);
                } else {
                  const temp = [...teachersList];
                  temp[manageTeachers.index] = data;
                  setTeachersList(temp);
                }
              }
              setManageTeachers({ index: -1, isOpen: false, data: {} });
            }}
          />
        </CustomDrawerComponent>
      )}
      <Box sx={{marginTop:2}}>
        <AppButton btnText="Add Teacher" onClick={()=>handleAdd()}/>
        </Box>

        
    </AppLayout>

    
  );
};

export default TeacherMain;
