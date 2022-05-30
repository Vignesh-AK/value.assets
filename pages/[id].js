import React from 'react'
import { Header } from '../components/Header'
import AlignItemsList from '../components/AlignItemsList'
import Box from '@mui/material/Box';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>


const style = {
  wrapper: 'bg-[#04111d] w-screen p-[1.2rem] py-[1.0rem]',
 
}

export async function getStaticProps({params}){
  const id = params.id
  console.log("hey",id)
  return { props: { id } }
}
export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export default function DetialPage() {
  return (
    <div>
      <Header/>
      <div>
      <Box component="span" sx={{ p: 2 }}>
      <div className='counts'><span className='textcounts'>MIN VALUE</span><h1>{19262.2}</h1></div>
    </Box>
      </div>
      <div className={style.wrapper}>
      <AlignItemsList/>
      </div>
      <style jsx global>{`
        
        .counts {
          color: #ffffff !important;
          font-size:50px;
          font-weight:bold;
          text-align:center;
        }
        .textcounts{
          color: #ffffff !important;
          font-size:10px;
          font-weight:bold;
          font-spacing:2px;
          text-align:center;
        }
      `}</style>
    </div>
    
  )
  }