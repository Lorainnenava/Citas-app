import React from "react";
import { Modal, Typography, Box } from "@mui/material";
import { ModalProps } from "./types";
import { CloseButton, styles } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
const ModalComponent: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  width,
  tittle,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          margin: "auto",
          marginTop: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: width,
          background: "white",
          padding: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid",
          }}
        >
          <Typography style={styles.title}>{tittle}</Typography>
          <CloseButton>
            <CloseIcon onClick={onClose} />
          </CloseButton>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
