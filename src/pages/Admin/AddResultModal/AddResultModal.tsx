import { Button, ButtonGroup, MenuItem, Modal, Box, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch } from '../../../store/app/hooks';
import { v4 as uuidv4 } from 'uuid';
import { ResultT } from '../../../types/modelTypes';
import { addResultAction } from '../../../store/admin-actions';
import { USERS_UID } from '../data/users_uid';
import CustomSelect from './CustomSelect';
import { GOAL_BUTTONS } from '../data/goal_buttons';

type AddResultModalProps = {
  open: boolean;
  onClose: () => void
}

const AddResultModal = ({ open,
  onClose }: AddResultModalProps) => {
  const [userOneUid, setUserOneUid] = useState<string>('')
  const [userTwoUid, setUserTwoUid] = useState<string>('')
  const [userOneGoals, setUserOneGoals] = useState<number>(0)
  const [userTwoGoals, setUserTwoGoals] = useState<number>(0)
  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userOneUid && userTwoUid) {
      const id = uuidv4().split('-')[0];
      const date = new Date().toLocaleString()

      const result: ResultT = {
        resultId: id,
        date,
        userOneUid,
        userTwoUid,
        userOneGoals,
        userTwoGoals,
      };
      dispatch(addResultAction(result));
      onClose()
    }
  };
  const handleChangeOne = (event: SelectChangeEvent<unknown>) => {
    setUserOneUid(event.target.value as string);
  };
  const handleChangeTwo = (event: SelectChangeEvent<unknown>) => {
    setUserTwoUid(event.target.value as string);
  };

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
      <Box component="form"
        onSubmit={handleSubmit} noValidate
        autoComplete="off" className='w-full h-full bg-main sm:max-w-[800px]'>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, color: 'white' },
          }}
          className='mt-8'
        >
          <div className='flex justify-around gap-10 px-10 mb-10'>
            <CustomSelect
              fullWidth
              id="UserOne"
              name="UserOne"
              value={userOneUid}
              onChange={handleChangeOne}
            >
              {USERS_UID.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
            <CustomSelect
              fullWidth
              id="UserTwo"
              name="UserTwo"
              value={userTwoUid}
              onChange={handleChangeTwo}
            >
              {USERS_UID.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
          </div>
          <div className='flex text-[1.2em] xs:text-[1.5em] sm:text-[2em]'>
            <div className='flex flex-col items-center w-24 gap-2 grow'>
              {GOAL_BUTTONS.map(({ id }) => <div key={id} onClick={() => setUserOneGoals(id)} className='flex-center text-[1em] text-white w-[2em] h-[2em] border-2 border-white rounded-md' style={{ backgroundColor: `${id === userOneGoals ? 'white' : 'transparent'}`, color: `${id === userOneGoals ? 'black' : 'white'}` }}>{id}</div>)
              }
            </div>
            <div className='flex flex-col items-center w-24 gap-2 grow'>
              {GOAL_BUTTONS.map(({ id }) => <div key={id} onClick={() => setUserTwoGoals(id)} className='flex-center text-[1em] text-white w-[2em] h-[2em]  border-2 border-white rounded-md' style={{ backgroundColor: `${id === userTwoGoals ? 'white' : 'transparent'}`, color: `${id === userTwoGoals ? 'black' : 'white'}` }}>{id}</div>)
              }
            </div>
          </div>
        </Box>
        <ButtonGroup className='w-full gap-2 mt-10 flex-center'>
          <Button variant="contained" size='large' color='secondary' type="submit">Confirm</Button>
        </ButtonGroup>
      </Box >

    </Modal >
  );
}

export default AddResultModal
