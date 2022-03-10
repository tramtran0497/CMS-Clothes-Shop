import styled from "styled-components";
import { color } from "../../Styles/colors";

export const Container = styled.div`
  &::before {
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
`;
export const Logo = styled.h1`
  width: 15%;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
`;
interface ListProps {
  direction: string;
  jtf: string;
  ali: string;
}
export const List = styled.ul<ListProps>`
  width: 25%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.jtf};
  align-items: ${(props) => props.ali};
  list-style: none;
  position: relative;
`;
export const ListItem = styled.li`
  width: 28px;
  .topBarIcon {
    font-size: 33px;
    cursor: pointer;
  }
`;
interface ImgProps {
  wth: string;
  hgt: string;
  objf: string;
  bordius: number;
}
export const Image = styled.img<ImgProps>`
  object-fit: ${(props) => props.objf};
  width: ${(props) => props.wth};
  height: ${(props) => props.hgt};
  border-radius: ${(props) => props.bordius}%;
`;
export const Supportlist = styled.div`
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
`;
export const SupportListItem = styled.li`
  width: 90%;
  border-bottom: 1px solid ${color.darkTheme_lightest};
  color: ${color.darkTheme_lightest};
  font-size: 18px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .supportListIcon {
    font-size: 25px;
    color: ${color.darkTheme_lightest};
  }
`;
export const SupportListItemLeft = styled.div`
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    margin-left: 10px;
  }
`;
export const Applist = styled.div`
  width: 350px;
  height: fit-content;
  background-color: ${color.lightTheme_darker};
  border-radius: 10px;
  position: absolute;
  top: 49px;
  right: 0px;
  padding: 20px;
`;
export const AppListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  border-bottom: 1px solid ${color.primary_lightest};
`;
export const Title = styled.h3`
  font-size: 25px;
  color: ${color.primary_lighter};
  font-weight: 500;
`;
export const Item = styled.p`
  width: 100%;
  font-size: 22px;
  color: ${color.primary_darkest};
  margin: 5px;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    background-color: ${color.primary_lightest};
    border-radius: 10px;
  }
`;
