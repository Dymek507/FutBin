import { styled } from "@mui/material";
import { Select } from "@mui/material";


export const CustomSelect = styled(Select)(({ theme }) => ({
  width: '20vw',
  maxWidth: '200px',
  height: '3rem',
  color: theme.palette.primary.contrastText,
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.contrastText
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.contrastText
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.contrastText
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.contrastText
    }
  }
}));