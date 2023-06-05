import React, { FC, useState } from "react";
import { Header, HeaderImagen, Image, TituloHeader } from "./styled";
import { useNavigate } from "react-router";
import { TNavBar } from "./types";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Button,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthStore } from "../../apiZustand";
import ModalComponent from "../../components/modal";
import { CloseSession } from "./ContentModal/closeSession";
const Nav: FC<TNavBar> = ({ profileAuth }) => {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const setLogOut = useAuthStore((state: any) => state.logOut);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  /**
   * Función para cerrar session
   */
  const logout = () => {
    setLogOut("", null);
    setOpenModal(false);
    navigation("/");
  };
  const styles = {
    box: {
      padding: "10px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  return (
    <>
      {profileAuth === null ? (
        <Header>
          <HeaderImagen>
            <Image
              onClick={() => {
                navigation("/");
              }}
            />
          </HeaderImagen>
          <TituloHeader>Oficina Virtual</TituloHeader>
        </Header>
      ) : (
        <Header>
          <HeaderImagen>
            <Image
              onClick={() => {
                navigation("/");
              }}
            />
          </HeaderImagen>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={2}
              width={"98%"}
              justifyContent={"end"}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
              >
                <Box sx={styles.box}>{profileAuth?.user?.name}</Box>
                <Box sx={styles.box}>{profileAuth?.user?.mobileNumber}</Box>
                <Box sx={styles.box}>{profileAuth?.user?.email}</Box>
                <Box sx={styles.box}>
                  <Button onClick={handleOpen}>
                    <LogoutIcon />
                  </Button>
                </Box>
              </Menu>
            </Stack>
          </Box>
          <ModalComponent
            open={openModal}
            onClose={handleCloseModal}
            width="400px"
            tittle="Confirme sesión"
          >
            <CloseSession onClose={handleCloseModal} logout={logout} />
          </ModalComponent>
        </Header>
      )}
    </>
  );
};

export default Nav;
