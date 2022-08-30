
import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/FetchFromAPI';
import { Videos, ChannelCard} from'./main'
import { Box } from '@mui/material';


const ChannelDetail = () => {
  const [videos, setVideos] = useState([]);
  const [channelDetail,setChannelDetail] = useState(null);

  const { id } = useParams()
  

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
    
  const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
  setVideos(videoData?.items);
    }
    fetchResults()
  },[id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
          <div style={{
        background: 'linear-gradient(313deg, rgba(131,58,180,1) 0%, rgba(37,253,29,0.864516129032258) 50%, rgba(255,205,136,1) 100%)',
        zIndex: 10,
        height: '300px'
      }}/>

        <ChannelCard channelDetail={channelDetail} marginTop='-110px'  />
      </Box>

      <Box display='flex' p='2'>
          <Box sx={{ mr:{ sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
