import React from "react";
import { Link } from "react-router-dom";
import { Applist, AppListItem, TitleAppList, Item } from "./NavigationStyles";
interface AppListProps {}

export const AppList: React.FC<AppListProps> = () => {
  return (
    <Applist>
      <AppListItem>
        <TitleAppList>
          <Link to="/">Home</Link>
        </TitleAppList>
        <Item>Sales</Item>
        <Item>Analytics</Item>
      </AppListItem>
      <AppListItem>
        <TitleAppList>
          <Link to="/menu">Menu</Link>
        </TitleAppList>
        <Item>Users</Item>
        <Item>Products</Item>
        <Item>Transactions</Item>
        <Item>Reports</Item>
      </AppListItem>
      <AppListItem>
        <TitleAppList>Notifications</TitleAppList>
        <Item>Mail</Item>
        <Item>Feedbacks</Item>
        <Item>Message</Item>
      </AppListItem>
      <AppListItem>
        <TitleAppList>Staff</TitleAppList>
        <Item>Employees</Item>
      </AppListItem>
    </Applist>
  );
};
