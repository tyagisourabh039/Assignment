import {
  MapsComponent,
  Inject,
  LayersDirective,
  LayerDirective,
  Bubble,
  BubblesDirective,
  BubbleDirective,
  MapsTooltip,
  Zoom,
} from "@syncfusion/ej2-react-maps";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import * as worldMap from "./map-data/world-map.json";
import { FlexBox } from "../DataDifference/DataDifference";
import { Typography, styled, Box } from "@mui/material";

const Map = () => {
  const SmallBubble = styled("div")(() => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  }));
  return (
    <Box style={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
          marginTop: "1rem",
        }}
      >
        <Typography
          sx={{
            display: "block",
            color: "black",
            fontWeight: "300",
            fontSize: "25px",
            marginLeft: "1rem",
          }}
        >
          Presence
        </Typography>
        <ArrowForwardIosOutlinedIcon
          fontSize="medium"
          sx={{ color: "black", fontSize: "15px", fontWeight: "900" }}
        />
      </Box>

      <MapsComponent>
        <Inject services={[Bubble, MapsTooltip]} />
        <LayersDirective>
          <LayerDirective
            shapeData={worldMap}
            shapeDataPath="name"
            shapePropertyPath="name"
          >
            <BubblesDirective>
              <BubbleDirective
                visible={true}
                valuePath="population"
                dataSource={[
                  {
                    color: "rgb(56, 182, 255)",
                    name: "Japan",
                    population: "19651127",
                    value: "Fauget",
                  },
                  {
                    color: "rgb(68, 72, 154)",
                    name: "Mexico",
                    population: "19651127",
                    value: "Borcelle",
                  },
                ]}
                minRadius={5}
                maxRadius={80}
                colorValuePath="color"
                tooltipSettings={{
                  visible: true,
                  valuePath: "value",
                }}
              />
            </BubblesDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>

      <FlexBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          zIndex: 1,
          marginTop: "-90px",
          width: "90%",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontWeight: "200",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <SmallBubble
            sx={{ backgroundColor: "rgb(68, 72, 154)" }}
          ></SmallBubble>
          50% in Borcelle
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: "200",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <SmallBubble
            sx={{ backgroundColor: "rgb(56, 182, 255)" }}
          ></SmallBubble>
          50% in Fauget
        </Typography>
      </FlexBox>
    </Box>
  );
};
export default Map;
