import { Box } from '@mui/material';
import { UserInfo } from './dataModal/contentModal/userInfo';
import { MedicalInformation } from './dataModal/contentModal/medicalInformation';

const InfoUser = () => {
    return (
        <Box style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column'}}>
    <UserInfo/>
    <MedicalInformation/>
    </Box>
    )
}

export default InfoUser
