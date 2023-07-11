import { Grid } from '@mui/material'
import { Span, Text } from '../../styled'

export const UserInfo = () => {
return (
    <Grid container spacing={2} style={{marginBottom: '10px', paddingBottom: '10px'}}>
            {/* Nombre */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Nombre:</b></Span>
                <Text>Lorainne</Text>
            </Grid>
            {/* Apellidos */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Apellidos:</b></Span>
                <Text>Navarro Carrillo</Text>
            </Grid>
            {/* Edad */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Edad:</b></Span>
                <Text>18</Text>
            </Grid>
            {/* Sexo */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Sexo:</b></Span>
                <Text>18</Text>
            </Grid>
            {/* Fecha de Nacimiento */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Fecha de Nacimiento:</b></Span>
                <Text>23/07/2004</Text>
            </Grid>
            {/* Lugar de nacimiento */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Lugar de nacimiento:</b></Span>
                <Text>Barranquilla</Text>
            </Grid>
            {/* Correo electronico */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Correo electronico:</b></Span>
                <Text>lorainne@gmail.com</Text>
            </Grid>
            {/* Celular */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Celular:</b></Span>
                <Text>3008589626</Text>
            </Grid>
            {/* Celular para emergencias */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Celular para emergencias:</b></Span>
                <Text>3045861298</Text>
            </Grid>
        </Grid>
)
}
