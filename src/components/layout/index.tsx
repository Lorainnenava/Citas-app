import React, { FC } from 'react'
import { Box } from './styled'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { GridExpandMoreIcon } from '@mui/x-data-grid'

const Layout: FC = () => {
  return (
    <Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>USUARIO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            RPERFIL
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CITAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SOLICITAR
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
export default Layout