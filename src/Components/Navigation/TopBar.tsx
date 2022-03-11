import React, { useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import AppsIcon from "@material-ui/icons/Apps";
import Badge from "@material-ui/core/Badge";
import { TopBarContainer, Logo, List, ListItem, Image } from "./NavigationStyles";
import { SupportList } from "./SupportList";
import { AppList } from "./AppList";

interface TopBarProps {}

export const TopBar: React.FC<TopBarProps> = () => {
  const [isShowApp, setIsShowApp] = useState<boolean>(false);
  const [isShowSupport, setIsShowSupport] = useState<boolean>(false);

  const handleShow = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    console.log(event.currentTarget.classList[2]);
    if (event.currentTarget.classList[2] === "support") {
      setIsShowSupport(!isShowSupport);
      setIsShowApp(false);
    }
    if (event.currentTarget.classList[2] === "app") {
      setIsShowApp(!isShowApp);
      setIsShowSupport(false);
    }
  };
  return (
    <TopBarContainer>
      <Logo>Tram.Admin</Logo>
      <List direction="row" jtf="space-around" ali="center">
        <ListItem>
          <AppsIcon
            className="topBarIcon app"
            onClick={(event) => handleShow(event)}
          />
        </ListItem>
        {isShowApp ? <AppList /> : ""}
        <Badge badgeContent={4} color="primary">
          <ListItem>
            <NotificationsIcon className="topBarIcon" />
          </ListItem>
        </Badge>
        <Badge badgeContent={4} color="primary">
          <ListItem>
            <ChatIcon className="topBarIcon" />
          </ListItem>
        </Badge>
        <ListItem>
          <Image
            wth="40px"
            hgt="40px"
            objf="cover"
            bordius={50}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="Admin Avata"
          />
        </ListItem>
        <ListItem>
          <ArrowDropDownCircleIcon
            className="topBarIcon support"
            onClick={(event) => handleShow(event)}
          />
        </ListItem>
        {isShowSupport ? <SupportList /> : ""}
      </List>
    </TopBarContainer>
  );
};
