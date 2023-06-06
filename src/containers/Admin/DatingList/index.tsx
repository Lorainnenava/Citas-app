import React, { useState } from "react";
import {
  useGetDatingQuery,
  useUpdateStateDatingMutation,
} from "../../../pages/redux/Queries/resApi";
import { DataGrid, GridColDef, esES } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { TDataUser } from "./types";
import { ToolbarList } from "./TableGrid";
import ModalComponent from "../../../components/modal";
import { EditStateDating } from "../ContentModal/EditStateDating";
export const DatingList: React.FC<TDataUser> = ({ profileAuth }) => {
  const [openModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState();
  const { data } = useGetDatingQuery(profileAuth?.token);
  const [UpdateState, { data: dateState }] =
    useUpdateStateDatingMutation();
  const updateEstado = (_id: string, state: boolean) => {
    const dataState = { state };
    const token = profileAuth?.token;
    UpdateState({ _id, dataState, token });
  };

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const columns: GridColDef[] = [
    {
      field: "_idUser.name",
      headerName: "Nombre",
      flex: 0.1,
      valueGetter: (params) => params.row._idUser.name,
    },
    {
      field: "typeDocument",
      headerName: "Tipo de Identificación",
      flex: 0.1,
      valueGetter: (params) =>
        params.row._idUser._idtypeOfDocument.typeOfDocument,
    },
    {
      field: "NumDocument",
      headerName: "Numero de documento",
      flex: 0.1,
      valueGetter: (params) => params.row._idUser.identification,
    },
    {
      field: "doctor",
      headerName: "Doctor",
      flex: 0.1,
      valueGetter: (params) => params.row.doctor.name,
    },
    {
      field: "specialty",
      headerName: "specialty",
      flex: 0.1,
      valueGetter: (params) => params.row.specialty.specialty,
    },
    {
      field: "state",
      headerName: "state",
      flex: 0.1,
      renderCell: (params) => {
        const { state } = params.row;
        if (state) {
          return <Typography sx={{ color: "green" }}>ACTIVO</Typography>;
        } else {
          return <Typography sx={{ color: "red" }}>INACTIVO</Typography>;
        }
      },
    },
    {
      field: "acción",
      headerName: "ACCIÓN",
      flex: 0.1,
      headerAlign: "center",
      align: "center",
      filterable: false,
      renderCell: ({ row }) => (
        <>
          <Button
            onClick={() => {
              handleOpen();
              setRows(row);
            }}
          >
            yes
          </Button>
        </>
      ),
    },
  ];
  return (
    <Box
      sx={{
        width: "85%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
        width="400px"
        tittle="Confirmar Editar Estado"
      >
        <EditStateDating
          updateEstado={updateEstado}
          rows={rows}
          handleCloseModal={handleCloseModal}
        />
      </ModalComponent>
    </Box>
  );
};
