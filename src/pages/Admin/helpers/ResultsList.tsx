import React, { useState } from 'react'
import Result from './Result'
import { Button } from '@mui/material'
import AddResultModal from './AddResultModal/AddResultModal'
import { useAppSelector } from '../../../store/app/hooks'

const Results = () => {
  const [showModal, setShowModal] = useState(false)
  const results = useAppSelector(state => state.admin.results)

  return (
    <div className='mt-8'>
      <AddResultModal open={showModal} onClose={() => setShowModal(false)} />
      <div className="flex justify-center items-center h-[10%] gap-4 my-4">
        <Button variant="contained" color='secondary' size="large" onClick={() => setShowModal(true)}>
          Add Result
        </Button>
      </div>
      <div className='flex flex-col items-center gap-3 mt-2 '>
        {results?.map((result, index) => <Result key={index} resultData={result} />)}
      </div >
    </div>
  )
}

export default Results