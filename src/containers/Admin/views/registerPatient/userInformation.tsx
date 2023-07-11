import { Grid,Typography } from '@mui/material';
import { CssTextField } from '../../../../styled';
import { BoxText, Container,styles} from '../styled';

export const UserInformation = () => {
return (
    <Container>
    <BoxText>
    <Typography style={{marginLeft: '20px'}}>Informacion personal</Typography>
    </BoxText>
    <Grid container spacing={2} columns={12} style={{padding: '20px'}}>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Nombre"
                name="name"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Apellidos"
                name="lastName"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Edad"
                name="age"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Sexo"
                name="sexo"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Fecha de nacimiento"
                name="dateOfBirth"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Lugar de nacimiento"
                name="placeOfBirth"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Correo electronico"
                name="email"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid><Grid item xs={3} style={styles}>
    <CssTextField
                label="Celular"
                name="mobileNumber"
                id="outlined-basic"
                size="small"
                colors="black"
                bordercolors="gray"
    />
    </Grid>
    <Grid item xs={3} style={styles}>
    <CssTextField
                label="Celular para emergencia"
                name="mobileEmergency"
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
