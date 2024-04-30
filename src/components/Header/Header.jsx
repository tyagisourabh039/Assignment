import { Avatar, Box, styled } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
export const FlexBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 10px",
  height: "100px",
  alignItems: "center",
  backgroundColor: "transparent",
}));

const CompanyBrand = styled("div")(() => ({
  color: "rgb(56, 182, 255)",
  fontSize: "2rem",
  fontWeight: "bolder",
}));
const Profile = styled("div")(() => ({}));

function Header() {
  return (
    <>
      <FlexBox>
        <CompanyBrand>Sourabh</CompanyBrand>
        <FlexBox sx={{ minWidth: "40vw", gap:2 }}>
          <SearchBar />
          <CommentIcon sx={{ scale: "1.5" }}></CommentIcon>
          <NotificationsIcon sx={{ scale: "1.5" }}></NotificationsIcon>
          <FlexBox>
            <FlexBox
              sx={{
                flexDirection: "column",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems:'flex-end'
              }}
            >
              <Profile sx={{fontWeight:'600', fontSize:'20px',alignSelf:'flex-end'}}>Claudia Alves</Profile>
              <Profile>Administrator</Profile>
            </FlexBox>
            <Avatar />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}
export default Header;
