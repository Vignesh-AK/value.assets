import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { SearchBox } from '../components/SearchBox'



export default function Example() {
  
  return (
    <div>
    <Header/>
    <SearchBox/>
    </div>
  )
  }