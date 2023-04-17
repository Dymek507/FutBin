import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  const [errorMessage, setErrorMessage] = React.useState("An error occurred")
  console.log(errorMessage)

  let status = "404"
  let title = "Error"

  const getErrorData = async (error: Response) => {
    const data = await error.json()
    console.log(data)
    return data
  }

  // useEffect(() => {
  //   async () => {
  //     if (error instanceof Response) {
  //       return await getErrorData(error)
  //     }
  //   }
  // }, [error])


  // error
  //   console.log("error instanceof Response")
  //   console.log(error)
  //   const response = await error.json()
  //   // error.json().then((data) => {
  //   //   console.log(data.message)
  //   //   setErrorMessage(data.message)
  //   // })
  //   // message = error

  //   if (error.status === 401) {
  //     console.log(error)
  //     status = error.status.toString()
  //     title = error.statusText
  //     // message = JSON.parse(error.data).message
  //   }
  //   else if (error.status === 404) {
  //     // ...
  //   }
  //   else if (error.status === 405) {
  //     // ...
  //   }
  //   else if (error.status === 500) {
  //     console.log(error)
  //     status = error.status.toString()
  //     title = error.statusText
  //   }
  // }


  return (
    <div className='flex-col h-screen gap-5 bg-zinc-500 flex-center'>
      <h1 className='text-[6rem] text-white'>{status}</h1>
      <h2 className='text-4xl text-white'>{title}</h2>
      <h3 className='text-2xl text-white'>{errorMessage}</h3>
    </div>
  )
}

export default ErrorPage