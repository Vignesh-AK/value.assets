import React from 'react'
import { Header } from '../components/Header'
import AlignItemsList from '../components/AlignItemsList'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import AssetsList from '../components/AssetsList';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

// const Web3Api = useMoralisWeb3Api();
// const fetchNativeBalance = async () => {
//   // get mainnet native balance for the current user
//   const balance = await Web3Api.account.getNativeBalance();
//   console.log(balance);
//   // get BSC native balance for a given address
//   const options = {
//     chain: "bsc",
//     address: "0x3d6c0e79a1239df0039ec16Cc80f7A343b6C530e",
//     to_block: "1234",
//   };
//   const bscBalance = await Web3Api.account.getNativeBalance(options);
//   console.log(bscBalance);
// };

// const [data, setData] = React.useState([])

const style = {
  wrapper: 'bg-[#04111d]',
  position: 'absolute',
  top: '50%',
  left: '50%',
  color:"#f5f5f5",
  transform: 'translate(-50%, 0%)',
  height:"50%",
  width: "80%",
  bgcolor: '#000',
  boxShadow: 24,
  p: 4,
}


// fetch the data from moralis api
export async function getStaticProps({ params }) {
  const id = params.id
  const res = await fetch("https://deep-index.moralis.io/api/v2/"+ id +"/nft?chain=mainnet&format=decimal", {
    method: 'get',
    headers: new Headers({
      'accept': 'application/json',
      'X-API-Key': "8mVo9wR59C83luXuP39W3sxPh0Sl4pKofkz6nwacMlOGQEQvNzFpvg5p2OV0mI0E"
    })
  })
  const posts = await res.json()
  // setData(posts)
  // {posts.result.map((post) => (
  // console.log(post)
  // ))}
  const hey = JSON.stringify(posts)
  const value = JSON.parse(hey)
  console.log(value)
  return {
    props: {
      value
    },
  }
}

// console.log({props})
export const getStaticPaths = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}
export default function DetialPage({ value }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <div>
        <Box component="span" sx={{ p: 2 }}>
          <div className='counts'><span className='textcounts'>MIN VALUE</span><h1>{19262.2}</h1></div>
</Box>
      </div>
      <div className={style.wrapper}>
        <center>
      <List sx={{ width: '80%', bgcolor: '#323949', color: "#fff", borderRadius:"5px", }}>
      {value.result.map((post) => (
       <div>
      <ListItem onClick={handleOpen} alignItems="flex-start">
        <ListItemAvatar>
         <Avatar alt="Remy Sharp" src={post.metadata!=null ? JSON.parse(post.metadata).image : "./static/images/download.jpg"}/> 
        </ListItemAvatar>
        <ListItemText
          primary={post.metadata!=null ? JSON.parse(post.metadata).name : post.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#fff"
              >
                {post.metadata!=null ? JSON.parse(post.metadata).description : "Nothing"}
              </Typography>
             
            </React.Fragment>
          }
        />
             
      </ListItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="ModalClass"
      >
        <Box sx={style} className="ModalBox">
        <IconButton
          style={{ position: "absolute", top: "0", right: "0", color:"#ffffff" }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Avatar alt="Remy Sharp" src={post.metadata!=null ? JSON.parse(post.metadata).image : "./static/images/download.jpg"}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {post.metadata!=null ? JSON.parse(post.metadata).name : post.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {post.metadata!=null ? JSON.parse(post.metadata).description : "Nothing"}          </Typography>
        </Box>
      </Modal>
      </div>
      ))}

    </List>
    </center>
        {/* <div>
          {posts.result.map((post) => (
            <li>{post.token_address}</li>
          ))}
        </div> */}

      </div>
      <style jsx>{`
        .ModalClass {
            width:60%;
            bottom:5px;
            background:#000;
        }
        .ModalBox{
          background:#000;
          color:#fff;
        }
       
        `}</style>
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