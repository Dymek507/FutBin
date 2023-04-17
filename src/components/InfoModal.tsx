import React from 'react'

import { Modal, Box, Select } from '@mui/material'
import { styled } from '@mui/material/styles';


type InfoModalProps = {
  children?: React.ReactNode
  open: boolean;
  onClose: () => void
}
const InfoModal = ({ children, open,
  onClose }: InfoModalProps) => {


  const CustomSelect = styled(Select)(({ theme }) => ({
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



  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: '3rem',
      }}
    >
      <Box className='w-full h-full bg-main sm:max-w-[800px]'>
        {children}
      </Box >
    </Modal >
  );
}

export default InfoModal
