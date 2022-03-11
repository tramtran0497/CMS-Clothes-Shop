import React from "react";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import { color } from "../../Styles/colors";

interface AddBtnProps{

}

export const AddWrap = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${color.primary_lightest};
    color: ${color.lightTheme};
`
export const AddBtn:React.FC<AddBtnProps> = () => {
    return(
        <AddWrap>
            <AddIcon/>
        </AddWrap>
    )
}