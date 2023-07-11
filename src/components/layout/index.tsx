import React, { FC } from 'react'
import { Box } from './styled'
import { Accordion, AccordionDetails, AccordionSummary, Link, Typography } from '@mui/material'
import { GridExpandMoreIcon } from '@mui/x-data-grid'
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Layout: FC = () => {
  return (
    <Box>
      <Accordion sx={{backgroundColor: "#b2d9f7"}}>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#80b3ff" }}
        >
          <Diversity1Icon sx={{marginRight:'5px'}}/>
          <Typography>PACIENTES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href="/registrarUsuario" sx={{textDecoration:'none', color: 'black'}}>
            REGISTRAR PACIENTE
            </Link>
          </Typography>
        </AccordionDetails><AccordionDetails>
          <Typography>
            <Link href="/listaUsuarios" sx={{textDecoration:'none', color: 'black'}}>
            LISTA DE PACIENTE
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "#b2d9f7"}}>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#80b3ff" }}
        >
          <EditCalendarIcon sx={{marginRight:'5px'}}/>
          <Typography>CITAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href="/ListaCitas" sx={{textDecoration:'none', color: 'black'}}>
            CITAS PENDIENTES
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
export default Layout