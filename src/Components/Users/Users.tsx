import React from "react";
import { UserContainer } from "./UsersStyles";
interface UsersProps{

}

export const Users:React.FC<UsersProps> = () => {
    return(
        <UserContainer>
            New Users
        </UserContainer>
    )
}