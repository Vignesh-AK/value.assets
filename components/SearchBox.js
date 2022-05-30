import React from 'react'
import Link from 'next/link'

const style= {searchinput: 'h-[2.6rem] border-0 bg-[#ffffff] outline-0 borderRadius-5',
            inputclass: 'h-[2.6rem] border-0 bg-[#ffffff] outline-0 borderRadius-5',
            buttonClass: 'h-[2.6rem] border-0 bg-[#f5f5f5] outline-0 borderRadius-5'}

let textInput = React.createRef();
export const SearchBox = () => {


    const text_val = textInput.value
    const fetchData = async (request) => {
        
        const req = await fetch("http://api.weatherstack.com/current?access_key=" + text_val + "&query=New York");
        const data = await req.json()
        console.log(data)
    
      };
    
      // e4b263f433e9268c8a8fd37844bcb684
    
    
      const handleClick = (event) => {
        event.preventDefault();
        fetchData();
      };
  return (
      <div>
        <div className='contendDiv'>
        <input ref={textInput} className="inputclass" />
        <Link href={{
              pathname: '/[slug]',
              query: { slug: text_val },
            }}>
        <div className={style.buttonClass}>FETCH DATA</div>
        </Link>
        

        </div>
        <style jsx>{`
        .inputclass {
        width:60%;
        height:2.6rem;
        }
        .contendDiv{
            text-align:center;
            justify-content:center;
            padding-top:50px;
        }


        `}</style>
    </div>
  )
}



