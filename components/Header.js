import React from 'react'
import Link from 'next/link'

let textInput = React.createRef();


const style={
    wrapper:'bg-[#04111d] w-screen p-[1.2rem] py-[5.8rem]',
    logoText: 'ml-[0.8rem] text-white font-semibold text-2xl',
    wrapper2:'bg-[#04111s] p-[1.2rem] py-[10.8rem]',
    searchinput: 'h-[2.6rem] w-full border-0 bg-[#ffffff] outline-0 borderRadius-5',
    buttonClass : 'h-[2.6rem] border-0 bg-[#ffffff] outline-0 borderRadius-5'
}

export const Header = () => {
    const fetchData = async () => {
        console.log(textInput.current.value)
        // const req = await fetch('https://randomuser.me/api/?gender=male&results=100');
    };

    const handleClick = (event) => {
        event.preventDefault();
        fetchData();
    };
  return (
    <div className={style.wrapper}>
        <Link href='/'>
        <div className={style.logoText}>
            value.app
        </div>
  
        </Link>

        <div className={style.wrapper2}>
        <input ref={textInput} className={style.searchinput}/>
        <button className={style.buttonClass} onClick={handleClick}>FETCH DATA</button>

</div>

    </div>
   
  )
}
