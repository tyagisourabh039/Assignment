import SearchIcon from "@mui/icons-material/Search";
import { Box, styled } from "@mui/material";
import { useRef } from "react";
const Input = styled("input")(() => ({
  width: "200px",
  height: "40px",
  marginRight: "20px",
  border: "none",
  "&:focus-within": {
    outline: "none",
  },
}));
function SearchBar() {
  const ref = useRef();
  return (
    <Box
      sx={{
        alignItems: "center",
        background: "white",
        borderRadius: "30px",
        minWidth: "20rem",
        maxWidth: "20rem",
        border: "2px solid transparent",
        "&:focus-within": {
          border: "2px solid #1976d2",
        },
      }}
    >
      <SearchIcon
        onClick={() => {
          ref.current.focus();
        }}
        sx={{ transform: "translateY(10px)", scale: "1", padding: "2px 10px" }}
      ></SearchIcon>
      <Input ref={ref} placeholder="Search Here"></Input>
    </Box>
  );
}
export default SearchBar;
