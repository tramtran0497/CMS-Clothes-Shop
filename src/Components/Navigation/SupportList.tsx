import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  Supportlist,
  SupportListItemLeft,
  SupportListItem,
} from "./NavigationStyles";

interface SupportListProps {}

export const SupportList: React.FC<SupportListProps> = () => {
  return (
    <Supportlist>
      <SupportListItem>
        <SupportListItemLeft>
          <SettingsIcon className="supportListIcon" />
          <span>Settings & Supports</span>
        </SupportListItemLeft>
        <ArrowForwardIosIcon className="supportListIcon" />
      </SupportListItem>
      <SupportListItem>
        <SupportListItemLeft>
          <NightsStayIcon className="supportListIcon" />
          <span>Theme</span>
        </SupportListItemLeft>
        <ArrowForwardIosIcon className="supportListIcon" />
      </SupportListItem>
      <SupportListItem>
        <SupportListItemLeft>
          <ExitToAppIcon className="supportListIcon" />
          <span>Log out</span>
        </SupportListItemLeft>
        <ArrowForwardIosIcon className="supportListIcon" />
      </SupportListItem>
    </Supportlist>
  );
};
