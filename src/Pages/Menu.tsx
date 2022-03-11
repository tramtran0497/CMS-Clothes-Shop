import React from "react";
import { Users } from "../Components/Users/Users";
import {MenuContainer} from "./MenuStyles"

interface MenuProps{

}

export const Menu:React.FC<MenuProps> = () => {
    return(
        <MenuContainer>
            <Users/>
        </MenuContainer>
    )
}