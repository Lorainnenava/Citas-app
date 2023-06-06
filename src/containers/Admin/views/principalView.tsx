import { Box } from '@mui/material'
import React, { FC } from 'react'
import { TAdmin } from './types'
import { useGetDatingQuery } from '../../../pages/redux/Queries/resApi';

const PrincipalView: FC<TAdmin> = ({ profileAuth }) => {
    const { data } = useGetDatingQuery(profileAuth?.token);
  return (
    <Box sx={{width:"100%", height:"100%", margin:"0px"}}>
        <img src='https://emerging-europe.com/wp-content/uploads/2018/01/bigstock-Male-Doctor-In-The-Hospital-190586731.jpg' style={{width:"100%" , height:"861.2px", margin:"0px"}}></img>
    </Box>
  )
}

export default PrincipalView