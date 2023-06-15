import { Grid } from '@mui/material'
import { Span, Text } from '../styled'

const PersonalInfo = () => {
  return (
    <Grid container spacing={2}>
            {/* NOMBRE */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Nombre:</b></Span>
                <Text>Lorainne</Text>
            </Grid>

            {/* Apellidos */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Apellidos:</b></Span>
                <Text>Navarro Carrillo</Text>
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
            {/* Tipo de sangre */}
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Tipo de sangre:</b></Span>
                <Text>O+</Text>
            </Grid><Grid item xs={4} style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
                <Span><b>Alergias:</b></Span>
                <Text>no</Text>
            </Grid>
        </Grid>
  )
}
export default PersonalInfo