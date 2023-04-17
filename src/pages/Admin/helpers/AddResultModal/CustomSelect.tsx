import { styled } from '@mui/material/styles';
import { Select } from '@mui/material'
const CustomSelect = styled(Select)(({ theme }) => ({
  maxWidth: '200px',
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.contrastText
  },
  color: "white",
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    color: "white",
    borderColor: 'white',
  },
}));

export default CustomSelect;