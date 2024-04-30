import { Box, Container, Grid, styled } from "@mui/material";
import MultiBarChart from "../Charts/MultiBarChart";
import Paper from "@mui/material/Paper";
import DataDifference from "../DataDifference/DataDifference";
import Card from "../Card/BasicCard";
import BasicCard from "../Card/BasicCard";
import InfoCard from "../Card/InfoCard";
import Map from "../Map/Map";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Dashboard() {
  return (
    <Container maxWidth="">
      <h1>Dashboard</h1>
      <Grid container spacing={4}>
        <Grid item  sx={{ minWidth:'34rem',width:'36%', border: "none", boxShadow: "none" }}>
          <Item sx={{ boxShadow: "none", borderRadius: "15px" }}>
            <DataDifference />
          </Item>
          <Item
            sx={{ boxShadow: "none", marginTop: "30px", borderRadius: "15px" }}
          >
            <MultiBarChart />
          </Item>
        </Grid>
        <Grid item  sx={{minWidth:'34rem',width:'36%'}}>
          <Item
            sx={{
              padding: "0",
              backgroundColor: "transparent",
              boxShadow: "none",
              display: "grid",
              gridTemplateColumns: "auto auto",
              justifyContent: "space-between",
              gridRowGap: "10px",
            }}
          >
            <BasicCard name={"ABC"} value={5} />
            <BasicCard name={"ABC"} value={560} />
            <BasicCard name={"ABC"} value={125} />
            <BasicCard name={"ABC"} value={300} />
          </Item>
          <Item sx={{alignSelf:'flex-end', maxWidth:'30rem', height: "58%", boxShadow: "none", borderRadius: "15px" }}>
            <Map />
          </Item>
        </Grid>
        <Grid item sx={{width:'20%'}}>
          <Item
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "15px",
            }}
          >
            <InfoCard name={"XXX"} value={780} />
            <InfoCard name={"ABC"} value={1050} />
            <InfoCard name={"SSSS"} value={125} />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Dashboard;
