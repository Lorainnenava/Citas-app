import { Box } from '@mui/material'
import { FC } from 'react'
import {  useGetUsersQuery } from '../../../pages/redux/Queries/resApi'
import { TAdmin } from './types'
import { DataGrid, GridColDef, esES } from '@mui/x-data-grid'
import { ToolbarList } from '../DatingList/TableGrid'
import { Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import InfoUser from './infoUser';
import ModalComponent from '../../../components/modal'

const Usuario: FC<TAdmin> = ({profileAuth}) => {
  const [rows, setRows] = useState();
  const [openModal, setOpenModal] = useState(false);
  const{data, error, isError}= useGetUsersQuery(profileAuth?.token)
  if(isError) console.log(error)

const handleOpen = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

// CONTENIDO DE LA TABLA
const columns: GridColDef[]=[{
  field: "name",
  renderHeader: () => <b>NOMBRE</b>,
  flex: 0.1,
},{
  field: "_idtypeOfDocument.typeOfDocument",
  renderHeader: () => <b>TIPO IDENTIFICACION</b>,
  flex: 0.1,
  valueGetter:(params)=> params.row._idtypeOfDocument.typeOfDocument
},{
  field: "identification",
  renderHeader: () => <b>IDENTIFICACION</b>,
  flex: 0.1,
},{
  field: "email",
  renderHeader: () => <b>CORREO</b>,
  flex: 0.1,
},{
  field: "mobileNumber",
  renderHeader: () => <b>NUMERO DE TELEFONO</b>,
  flex: 0.1,
},{
  field: "ACCIONES",
  renderHeader: () => <b>ACCIONES</b>,
  flex: 0.1,
  renderCell: ({ row }) => (
        <>
          <Button
            onClick={() => {
              handleOpen();
              setRows(row);
            }}
          >
            <RemoveRedEyeIcon style={{color: "gray"}}/>
          </Button>
        </>
  )
}]


  return (
    <Box sx={{width: '100%', height: '100%', display:"flex", alignItems: 'center', justifyContent: 'center'}}>
        <Box
        sx={{
          width: "80%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      >
        <DataGrid
          columns={columns || []}
          rows={data || []}
          getRowId={(row) => row._id}
          density="compact"
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          components={{
            Toolbar: ToolbarList,
          }}
        />
      </Box>
      <ModalComponent
        open={openModal}
        onClose={handleCloseModal}
        width="50%"
        tittle="Informacion del Usuario"
      >
        <InfoUser/>
      </ModalComponent>
    </Box>
  )
}

export default Usuario