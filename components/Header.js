import React from 'react'
import Link from 'next/link'
import { NextResponse, NextRequest } from 'next/server'
import { Avatar } from '@mui/material';



const style = {
  wrapper: 'bg-[#04111d] w-screen p-[1.2rem] py-[1.0rem]',
  logoText: 'ml-[0.8rem] p-[0.8rem] text-white font-semibold text-2xl',
 
}

export const Header = () => {
  
  return (
    <div className={style.wrapper}>
      <div className='inline'>
      <Link href='/'>
        <div className={style.logoText}>
          value.app
        </div>
       
      </Link>

      <div className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        </div>
      <style global jsx>{`
        body {
          background: #04111d;
        }
        .inline{
          display:flex;
          flex-direction:row;
        }
        .avatar{
          float:right;
          align-items:flex-end;
          position:absolute;
          right:10px;
          padding-top:10px;
          padding-right:30px;
        }

      `}</style>

    </div>


  )
}
