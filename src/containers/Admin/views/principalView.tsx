import { Box } from '@mui/material'
import React, { FC } from 'react'
import { TAdmin } from './types'
import { useGetDatingQuery } from '../../../pages/redux/Queries/resApi';

const PrincipalView: FC<TAdmin> = ({ profileAuth }) => {
    const { data } = useGetDatingQuery(profileAuth?.token);
  return (
    <Box sx={{width:"100%", height:"100%"}}>
        <img src='https://img.freepik.com/foto-gratis/joven-medico-guapo-tunica-medica-estetoscopio_1303-17818.jpg?w=1380&t=st=1686001820~exp=1686002420~hmac=df8551b4346794d794cbb23b9d432f62b4c86670da1f48a5fad29f18a5374812' style={{width:"100%" , height:"99.5%"}}></img>
    </Box>
  )
}

export default PrincipalView