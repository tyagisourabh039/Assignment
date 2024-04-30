import { LockOutlined } from "@mui/icons-material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Avatar, Box, Typography, styled } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PushPinIcon from "@mui/icons-material/PushPin";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AssignmentIcon from "@mui/icons-material/Assignment";
export const FlexBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 10px",
  height: "70px",
  alignItems: "center",
  // backgroundColor: 'transparent'
}));
const FacebookCircularProgress = ({ size, value, AvatarIcon }) => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: `${size}px`,
          width: `${size}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AvatarIcon
          sx={{
            scale: "0.9",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            color: "white",
            background: "#1976d2",
          }}
        ></AvatarIcon>

        <CircularProgress
          variant="determinate"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          }}
          size={size}
          thickness={2}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            color: (theme) =>
              theme.palette.grey[
                theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
              ],
          }}
          size={size}
          thickness={2}
          value={value}
        />
      </Box>
    </Box>
  );
};
function DataDifference() {
  return (
    <Box sx={{ minWidth:'30rem',paddingLeft: "20px", paddingRight: "20px" }}>
      <FlexBox>
        <Typography
          variant="h2"
          sx={{ color: "black", fontWeight: "300", fontSize: "25px" }}
        >
          24 hr data difference
        </Typography>
        <ArrowForwardIosOutlinedIcon
          fontSize="medium"
          sx={{ color: "black", fontSize: "15px", fontWeight: "bolder" }}
        />
      </FlexBox>
      <FlexBox>
        <FlexBox sx={{ justifyContent: "flex-start" }}>
          <FacebookCircularProgress
            size={50}
            value={40}
            AvatarIcon={({ sx }) => <PushPinIcon sx={sx}></PushPinIcon>}
          />
          <FlexBox
            sx={{
              padding: "0 0",
              flexDirection: "column",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "700",
                fontSize: "26px",
                marginLeft: "15px",
              }}
            >
              Changes in EC2
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "100",
                fontSize: "16px",
                marginLeft: "15px",
                color: "rgb(56, 182, 255);",
              }}
            >
              1 month ago, 1 Region, 1 Company
            </Typography>
          </FlexBox>
        </FlexBox>
        <FlexBox
          sx={{
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "700", fontSize: "26px" }}
          >
            <TrendingDownIcon></TrendingDownIcon>
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "100", fontSize: "16px" }}
          >
            40%
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox>
        <FlexBox sx={{ justifyContent: "flex-start" }}>
          <FacebookCircularProgress
            size={50}
            value={70}
            AvatarIcon={({ sx }) => <HeadphonesIcon sx={sx}></HeadphonesIcon>}
          />
          <FlexBox
            sx={{
              padding: "0 0",
              flexDirection: "column",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "700",
                fontSize: "26px",
                marginLeft: "15px",
              }}
            >
              Changes in EBS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "100",
                fontSize: "16px",
                marginLeft: "15px",
                color: "rgb(56, 182, 255);",
              }}
            >
              1 month ago, 1 Region, 1 Company
            </Typography>
          </FlexBox>
        </FlexBox>
        <FlexBox
          sx={{
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "700", fontSize: "26px" }}
          >
            <TrendingUpIcon></TrendingUpIcon>
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "100", fontSize: "16px" }}
          >
            70%
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox>
        <FlexBox sx={{ justifyContent: "flex-start" }}>
          <FacebookCircularProgress
            size={50}
            value={90}
            AvatarIcon={({ sx }) => <AssignmentIcon sx={sx}></AssignmentIcon>}
          />
          <FlexBox
            sx={{
              padding: "0 0",
              flexDirection: "column",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "700",
                fontSize: "26px",
                marginLeft: "15px",
              }}
            >
              Changes in EIP
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "100",
                fontSize: "16px",
                marginLeft: "15px",
                color: "rgb(56, 182, 255);",
              }}
            >
              1 month ago, 1 Region, 1 Company
            </Typography>
          </FlexBox>
        </FlexBox>
        <FlexBox
          sx={{
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "700", fontSize: "26px" }}
          >
            <TrendingUpIcon></TrendingUpIcon>
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "black", fontWeight: "100", fontSize: "16px" }}
          >
            90%
          </Typography>
        </FlexBox>
      </FlexBox>
    </Box>
  );
}
export default DataDifference;
