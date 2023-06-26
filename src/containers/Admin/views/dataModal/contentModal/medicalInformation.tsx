import { Box, Grid } from '@mui/material'
import { Span, Text } from '../../styled'
import { Typography } from '@mui/material';

export const MedicalInformation = () => {
  return (
    <>
    <Box style={{width: '100%', height: 'auto', borderBottom: '1px solid black', paddingBottom:"10px"}}>
    <Typography style={{fontSize:"24px", fontFamily:"Roboto"}}>Informacion medica</Typography>
    </Box>
    <Grid container spacing={2}  style={{marginBottom: '10px', paddingBottom: '10px'}}>
        {/* Tipo de sangre */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Tipo de sangre:</b></Span>
                <Text>O+</Text>
            </Grid>
            {/* Alergias */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Alergias:</b></Span>
                <Text>no</Text>
            </Grid>
            {/* Enfermedades */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Enfermedades:</b></Span>
                <Text>no</Text>
            </Grid>
            {/* Cirugias */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Cirugias:</b></Span>
                <Text>si</Text>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
        {/* Observaciones */}
            <Grid item xs={12}>
                <Span><b>Observaciones</b></Span>
                <Text>Escribir alguna observacion del paciente</Text>
            </Grid>
            </Grid>
            </>
  )
}
