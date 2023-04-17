import React from 'react'

import { useNavigate } from 'react-router-dom'
import { getAuth, signInAnonymously } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

import { db } from '../../firebaseConfig';
import { useAppDispatch, useAppSelector } from '../../store/app/hooks';
import { uiActions } from '../../store/ui-slice';
import { openingMockups, packsMockups, playersMockups } from '../../assets/landing_page/mockups';
import HOME_DATA from './helpers/home-data';
import GridElement from './helpers/GridElement';

const Home = () => {
  const isLogged = useAppSelector((state) => state.ui.logged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        //Make document for new user
        const newUser = doc(db, `users/${userCredential.user.uid}`);
        const newUserData = {
          login: "Guest-" + userCredential.user.uid.slice(0, 4),
          money: 10000,
          result: { wins: 0, draws: 0, loses: 0 },
          goals: { goalsFor: 0, goalsAgainst: 0 },
          packs: [],
        }
        setDoc(newUser, {
          email: userCredential.user.email,
          playersData: [],
          currentPackPlayers: [],
          ...newUserData
        });
        dispatch(
          uiActions.login({
            logged: true,
            userData: {
              uId: userCredential.user.uid,
              ...newUserData
            },
          })
        );
        navigate("/home");
      })
      .catch((error) => {
        throw new Error(error)
      }
      );
  }

  return (

    <div className='flex-col w-full p-4 text-white flex-center'>
      {!isLogged ?
        <div className='flex-col gap-4 px-8 text-2xl leading-tight flex-center h-1/3 bg-primary-main'>
          <h1 className='text-[2em] mb-4'>Fut Draft version for recruiters.</h1>
          <p className='text-[1.3em]'>Validation during registration is disabled.</p>
          <p className='text-[1.3em]'>Login as a guest enabled.</p>
          <Button onClick={handleLogin} variant='contained' size='large' color='secondary' className='w-fit' >Login as Guest</Button>
        </div>
        :
        <Grid container className='justify-center w-full gap-6 p-6'>
          {HOME_DATA.map(({ src, title, link }) => <GridElement key={title} src={src} title={title} link={link} />)}
        </Grid>
      }
    </div >

  )
}

export default Home