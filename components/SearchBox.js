import React from 'react'
import Link from 'next/link'
import { useState } from "react";
import Button from '@mui/material/Button';

const style = {
  searchinput: 'h-[2.6rem] border-0 bg-[#ffffff] outline-0 borderRadius-5',
  inputclass: 'h-[2.6rem] border-0 bg-[#ffffff] outline-0 borderRadius-5',
}
let textInput = React.createRef();
export const SearchBox = () => {
  const [data, setData] = useState({ ens: "" });

  return (
    <div>
      <div className='contendDiv'>
        <input type="text"
          placeholder="Enter a ENS here"
          value={data.ens}
          onChange={(event) =>
            setData({
              ens: event.target.value,
            })
          }
          className="inputclass" />
        <Link href={data.ens}>
          <Button className='buttons'>FETCH DATA</Button>
        </Link>


      </div>
      <style jsx>{`
        .inputclass {
            width:60%;
            border-radius:5px;
            height:2.6rem;
        }
        .contendDiv{
            text-align:center;
            justify-content:center;
            padding-top:100px;
            display:flex;
            flex-direction:row;
        }
        .buttons{
            background-color:#fff;
            color:#000;
            text-align:center;s
        }

        `}</style>
    </div>
  )
}



