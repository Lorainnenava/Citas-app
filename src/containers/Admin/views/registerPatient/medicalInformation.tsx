import { BoxText, Container,  styles } from '../styled'
import { Grid, Typography } from '@mui/material'
import { CssTextField } from '../../../../styled'

export const MedicalInformation = () => {
  return (
    <Container>
    <BoxText>
    <Typography style={{marginLeft: '20px'}}>Informacion medica</Typography>
    </BoxText>
    <Grid container spacing={2} columns={12} style={{padding: '20px'}}>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Tipo de sangre"
                name="typeBlood"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Alergias"
                name="alergics"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Enfermedades"
                name="ilenesess"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Cirugias"
                name="surgeries"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    </Grid>
    </Container>
)
}
