import { FC } from "react";
import { TAlert } from "./types";
import { AlertContent, AlertMessage, Container, TypeMessage } from "./styled";
import { Alert, Box } from "@mui/material";
import { Snackbar } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
/**
 * Alert
 */
export const AlertGeneral: FC<TAlert> = ({ showAlert, setShowAlert }) => {
  /**
   * Destructuring de showAlert
   */
  const {
    active,
    type,
    message,
    time = 3000,
    width = "auto",
    height = "5vh",
  } = showAlert;

  /**
   * Color de background del alert
   */
  let bgColor;
  if (type === "success") {
    bgColor = "#10B759";
  } else if (type === "danger") {
    bgColor = "#DC3545";
  }

  return (
    <>
      {active === true && (
        <Container>
          <Snackbar
            open={active === true}
            autoHideDuration={time}
            onClose={() =>
              setShowAlert({
                message: "",
                type: "success",
                active: false,
              })
            }
            ContentProps={{ style: { padding: "0px" } }}
          >
            <AlertContent width={width} height={height} display="flex">
              <Alert
                onClose={() =>
                  setShowAlert({
                    message: "",
                    type: "success",
                    active: false,
                  })
                }
                style={{
                  background: bgColor,
                  color: "white",
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  display: "flex",
                  padding: "0px 15px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {type === "success" && (
                    <CheckCircleOutlineIcon sx={{ fontSize: "24" }} />
                  )}
                  {type === "danger" && (
                    <ErrorOutlineIcon sx={{ fontSize: "24" }} />
                  )}
                  <TypeMessage>
                    {type === "success" ? "Éxito" : "Advertencia"}
                  </TypeMessage>
                  <AlertMessage>{message}</AlertMessage>
                </Box>
              </Alert>
            </AlertContent>
          </Snackbar>
        </Container>
      )}
    </>
  );
};
