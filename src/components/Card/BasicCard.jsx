import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Stack, styled } from "@mui/system";
import { Typography } from "@mui/material";
import { FlexBox } from "../DataDifference/DataDifference";
const BlueDot = styled("div")(() => ({
  width: "30px",
  height: "30px",
  borderRadius: "12px",
  backgroundColor: "rgb(10 129 198)",
}));
export default function BasicCard({ name, value }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        boxShadow: "none",
        width: "220px",
        height: "120px",
        marginBottom: "20px",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <FlexBox sx={{ justifyContent: "flex-start", padding: "0 0" }}>
          <BlueDot />
          <Stack sx={{ marginLeft: "10px" }}>
            <Typography variant="h5">{name}</Typography>
            <Typography
              variant="h5"
              sx={{ color: "black", fontWeight: "700", fontSize: "46px" }}
            >
              {value}
            </Typography>
          </Stack>
        </FlexBox>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
