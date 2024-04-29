import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function InfoCard({ name, value }) {
  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "none",
        width: "300px",
        height: "170px",
        marginBottom: "40px",
        borderRadius: "15px",
      }}
    >
      <CardContent
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "10px" }}
      >
        <Typography sx={{ fontSize: "20px" }}>Total {name}</Typography>
        <Typography sx={{ marginTop: "10px", fontSize: "40px" }}>
          {value}
        </Typography>
        <Typography sx={{ marginTop: "10px", marginLeft: "10px" }}>
          upto 5% from last week
        </Typography>
      </CardContent>
    </Card>
  );
}
