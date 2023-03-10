import { IconButton } from "@mui/material";
import {
  Grid,
  Typography,
} from "@mui/material";
import AppCard from "../../shared/components/app-card/AppCard";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

const ClassN = () => {
  return (
    <main style={{ padding: 16, backgroundColor: "#e6e6e6" }}>

      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#e6e6e6",
          marginBottom: { xs: 0, sm: 0, md: "10vh", lg: "10vh", xl: "12%"},
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e6e6e6",
            marginLeft: 5,
          }}
        >
          <IconButton>
            <HomeIcon
              sx={{
                backgroundColor: "#a6a6a6",
                borderRadius: "50%",
                padding: "1px",
                color: "white",
                fontSize: 18,
              }}
            />
          </IconButton>
          <Typography
            display="inline"
            sx={{
              fontSize: 33,
              marginLeft: 0,
              marginRight: 1,
              color: "#a6a6a6",
            }}
          >
            .
          </Typography>
          <Typography display="inline" sx={{ fontSize: 12, color: "#a6a6a6" }}>
            Management
          </Typography>
          <Typography
            display="inline"
            sx={{
              fontSize: 33,
              marginLeft: 1,
              marginRight: 1,
              color: "#a6a6a6",
            }}
          >
            .
          </Typography>
          <Typography display="inline" sx={{ fontSize: 12, color: "#a6a6a6" }}>
            Classes
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <AppCard title="CLASS LIST" minHeight={120} />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <AppCard title="ABOUT" minHeight={170}>
                    <Grid
                      container
                      spacing={5}
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      <Grid item xs={2}>
                        <Typography
                          sx={{
                            fontSize: 10,
                            paddingLeft: 5,
                            fontWeight: "bold",
                            color: "#bfbfbf",
                          }}
                        >
                          NAME
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography
                          sx={{
                            fontSize: 10,
                            paddingLeft: 5,
                            fontWeight: "bold",
                            color: "#bfbfbf",
                          }}
                        >
                          SCHEDULE
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography
                          sx={{
                            fontSize: 10,
                            paddingLeft: 5,
                            fontWeight: "bold",
                            color: "#bfbfbf",
                          }}
                        >
                          CAPACITY
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography
                          sx={{
                            fontSize: 10,
                            paddingLeft: 5,
                            fontWeight: "bold",
                            color: "#bfbfbf",
                          }}
                        >
                          REGISTERED/(PAID)
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography
                          sx={{
                            fontSize: 10,
                            paddingLeft: 5,
                            fontWeight: "bold",
                            color: "#bfbfbf",
                          }}
                        >
                          STATUS
                        </Typography>
                      </Grid>
                    </Grid>

                    <OutlinedInput
                      sx={{
                        width: "100%",

                        height: { xs: "13vh", sm: "11vh" },
                        marginTop: 1,
                        marginLeft: 0,
                        borderRadius: 2,
                      }}
                    />
                    <Button
                      variant="oulined"
                      sx={{
                        backgroundColor: "#1aa3ff",
                        marginLeft: 1,
                        marginTop: 2,
                        minWidth: 45,
                        color: "white",
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        textAlign: "center",
                        fontSize: 8,
                        ":hover": { bgcolor: "black", color: "white" },
                      }}
                    >
                      Notes :
                    </Button>
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
  );
};
export default ClassN;
