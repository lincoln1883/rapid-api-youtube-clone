import React from 'react'
import {ChannelCard,VideoCard} from './main';
import { Box,Stack } from '@mui/material';
import Loader from './Loader';

const Videos = ({ videos ,direction}) => {
if(!videos?.length) return <Loader />

  return (
    <Stack direction={direction||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, id) => (
        <Box key={id}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos