import { useState , useEffect } from 'react';
import Header from './component/header';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';

function App() {
const [gallery , setGallery] = useState([]);
const [search , setSearch] = useState("");
const [choose , setChoose] = useState({});
const [showModal , setShowModal] = useState(false);

// useEffect(()=>{
// fetch("https://api.unsplash.com/photos?page=1&client_id=cvnmgIEBAxDsIfJ29zQYFtkyRJaOnn3-IoYXgxxhYN8&per_page=40")
// .then((res)=>res.json())
// .then((res)=>{setGallery(res);
//   console.log(res)
// })

// }, [])

const searchPhotos = async () => {
  if (search) {
    try {
      const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=cvnmgIEBAxDsIfJ29zQYFtkyRJaOnn3-IoYXgxxhYN8&per_page=40`);
      const data = await res.json();

      if (data.results) {
        setGallery(data.results); // Assuming data.results is an array of images
        console.log(data.results);
      } else {
        console.log("No results found.");
        setGallery([]); // Clear the gallery if no results
      }
    } catch (error) {
      console.log("Error fetching search results:", error);
    }
  }
};

async function recievingData(page=1){
  const fetching = await fetch(`https://api.unsplash.com/photos?page=${page}&client_id=cvnmgIEBAxDsIfJ29zQYFtkyRJaOnn3-IoYXgxxhYN8&per_page=40`)
  const convert = await fetching.json()
  setGallery((prev)=>[...prev , ...convert])
}

useEffect(
()=>{
 const looping = async ()=>{
    for(let a = 1 ; a <= 3 ; a++){
      await recievingData(a)
    }
 }
 looping()
},[]
)

function handleScroll(){
const scrollable = document.documentElement.scrollHeight-window.innerHeight;
const scrollingOnY = scrollY;
// console.log(scrollingOnY)
console.log(scrollable)

}

useEffect(
  ()=>{
    document.addEventListener("scroll" , handleScroll);
  } , []
)
  
  return (
    <Box className="mx-auto px-5 mt-1">
      <Header />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TextField
          sx={{
            mt: 3,
            width : "90%"
          }}
          value = {search}
          onChange={(e)=>setSearch(e.target.value)}
          id="outlined-basic"
          label="Search Images"
          variant="outlined"
        />
        <Button
          onClick={()=>searchPhotos()}
          variant="outlined"
          sx={{
            height: 53,
            mt: 3,
          }}
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
      <Masonry sx={{mt:5}}>
        {
          gallery.map((obj)=>(
            <img onClick={()=>{setChoose(obj)
                              setShowModal(true)
            }} key={obj.id} src={obj.urls.regular}/>
          ))
          
        }
      </Masonry>

      <Modal
      sx={{display : "flex", justifyContent :"center", alignItems : "center"}}
            open={showModal}
            onClose={()=>setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              {
                choose && choose.urls? (
                  <img style={{maxWidth : 500 , maxHeight : 400}} src={choose?.urls.regular}/>
                ) : null
              }
                
            </Box>
        </Modal>










    </Box>
  );
}

export default App;
