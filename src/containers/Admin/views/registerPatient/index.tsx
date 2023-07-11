import { FC } from "react"
import { TAdmin } from "../types"
import { usePostUserCreatedMutation } from "../../../../pages/redux/Queries/resApi"
import { UserInformation } from "./userInformation"
import { MedicalInformation } from "./medicalInformation"
import { Box, Button, Typography } from "@mui/material"
import { BoxButton, BoxRegister, Form } from "../styled"
import { text } from "../../../../styled"

export const RegisterPatient:FC<TAdmin> = ({profileAuth}) => {
    const[create,{data, isError, error, isSuccess}]= usePostUserCreatedMutation(profileAuth?.token)
    if(isError) console.log(error)
    if(isSuccess) console.log(data)
    console.log(data)

return (
    <BoxRegister>
        <Box style={{width: "100%", height: "auto", display:"flex", justifyContent:"flex-start"}}>
        <Typography style={text}>REGISTRAR USUARIO</Typography>
        </Box>
        <Form>
        <UserInformation/>
        <MedicalInformation/>
        </Form>
        <BoxButton>
            <Button type="submit" style={{width:"150px", backgroundColor:"#6f95ff", color: "white", boxShadow:'0px 0px 10px 0px gray'}}>Guardar</Button>
        </BoxButton>
    </BoxRegister>
)
}
