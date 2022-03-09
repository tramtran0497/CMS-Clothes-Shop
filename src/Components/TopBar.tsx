import React, { useState } from 'react';
import styled from "styled-components";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import {color} from "../Styles/colors"
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Badge from '@material-ui/core/Badge';

interface TopBarProps{

}

export const Container = styled.div`
    &::before{
        width: 100vw;
        height: 55px;
        content: "";
        background-color: ${color.primary};
        z-index: -1;
        opacity: 0.75;
        position: absolute;
    }
    width: 100vw;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${color.lightTheme};
    position: fixed;
    z-index: 2;
    top: 0px;

`
export const Logo = styled.h1`
    width: 15%;
    font-size: 30px;
    text-align: center;
    cursor: pointer;
`
export const List = styled.ul`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    position: relative;
`
export const ListItem = styled.li`
    width: 28px;
    .topBarIcon{
        font-size: 33px;
        cursor: pointer;

    }
    
`
export const Image = styled.img`
    object-fit: cover;
    width: 35px;
    height: 35px;
    border-radius: 50%;
`
export const SupportList = styled.div`
    padding: 10px;
    width: 280px;
    position: absolute;
    top: 37px;
    right: 35px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    background-color: ${color.lightTheme_darker};
    border-radius: 10px;
`
export const SupportListItem = styled.li`
    width: 90%;
    border-bottom: 1px solid ${color.darkTheme_lightest};
    color: ${color.darkTheme_lightest};
    font-size: 18px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .supportListIcon{
        font-size: 25px;
        color: ${color.darkTheme_lightest};
    }
    
`
export const SupportListItemLeft = styled.div`
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    span{
        margin-left: 10px;
    }
`
export const AppList = styled.div`
    width: 350px;
    height: fit-content;
    background-color: ${color.lightTheme_darker};
    border-radius: 10px;
    position: absolute;
    top: 47px;
    right: 0px;
    padding: 20px;
   
`
export const AppListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;
    border-bottom: 1px solid ${color.primary_lightest};

`
export const Title = styled.h3`
    font-size: 25px;
    color: ${color.primary_lighter};
    font-weight: 500;
    
`
export const Item = styled.p`
    width: 100%;
    font-size: 22px;
    color: ${color.primary_darkest};
    margin: 5px;
    padding: 8px 10px;
    cursor: pointer;
    transition: all 0.25s ease-in;

    &:hover, &:focus{
        background-color: ${color.primary_lightest};
        border-radius: 10px;
    }
`

export const TopBar: React.FC<TopBarProps> = () => {
    const [isShowApp, setIsShowApp] = useState<boolean>(false);
    const [isShowSupport, setIsShowSupport] = useState<boolean>(false);

    const handleShow = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        console.log(event.currentTarget.classList[2]);
        if(event.currentTarget.classList[2] === "support"){
            setIsShowSupport(!isShowSupport);
            setIsShowApp(false);
        }
        if(event.currentTarget.classList[2] === "app"){
            setIsShowApp(!isShowApp);
            setIsShowSupport(false);
        }
    }
  return (
    <Container>
        <Logo>Tram.Admin</Logo>
        <List>
            <ListItem><AppsIcon className='topBarIcon app' onClick={(event) => handleShow(event)}/></ListItem>
            {isShowApp ? (
                <AppList>
                    <AppListItem>
                        <Title>Home</Title>
                        <Item>Sales</Item>
                        <Item>Analytics</Item>
                    </AppListItem>
                    <AppListItem>
                        <Title>Menu</Title>
                        <Item>Users</Item>
                        <Item>Products</Item>
                        <Item>Transactions</Item>
                        <Item>Reports</Item>
                    </AppListItem>
                    <AppListItem>
                        <Title>Notifications</Title>
                        <Item>Mail</Item>
                        <Item>Feedbacks</Item>
                        <Item>Message</Item>
                    </AppListItem>
                    <AppListItem>
                        <Title>Staff</Title>
                        <Item>Employees</Item>
                    </AppListItem>
                </AppList>
            ) : ""}
           
            <Badge badgeContent={4} color="primary">
                <ListItem><NotificationsIcon className='topBarIcon'/></ListItem>
            </Badge>
            <Badge badgeContent={4} color="primary">
                <ListItem><ChatIcon className='topBarIcon'/></ListItem>
            </Badge>
            <ListItem><Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="Admin Avata"/></ListItem>
            <ListItem><ArrowDropDownCircleIcon className='topBarIcon support' onClick={(event) => handleShow(event)}/></ListItem>
            {isShowSupport ? (
                <SupportList>
                    <SupportListItem>
                        <SupportListItemLeft>
                            <SettingsIcon className='supportListIcon'/><span>Settings & Supports</span>
                        </SupportListItemLeft>
                        <ArrowForwardIosIcon className='supportListIcon'/>
                    </SupportListItem>
                    <SupportListItem>
                        <SupportListItemLeft>
                            <NightsStayIcon className='supportListIcon'/>
                            <span>Theme</span>
                        </SupportListItemLeft>
                        <ArrowForwardIosIcon className='supportListIcon'/>
                    </SupportListItem>
                    <SupportListItem>
                        <SupportListItemLeft>
                            <ExitToAppIcon className='supportListIcon'/>
                            <span>Log out</span>
                        </SupportListItemLeft>  
                        <ArrowForwardIosIcon className='supportListIcon'/>
                    </SupportListItem>
                </SupportList>
            ): ""}
        </List>
    </Container>
  )
}

