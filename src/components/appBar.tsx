import { AppBarStyle } from "../styles";
import laptopLogo from "../assets/typescript.png";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { Navigate } from "react-router";
import { getIconURL } from '../utils/helpers';

export const AppBar = () => {

    const { guild } = useContext(GuildContext);

  return guild ? (
    <AppBarStyle>
      <h1 style={{ fontWeight: "normal", fontSize: "20px" }}>Configuring -- {guild.name}</h1>
      <img
        src={getIconURL(guild)}
        height={45}
        width={45}
        style={{ borderRadius: "50%" }}
        alt="logo"
      />
    </AppBarStyle>
  ): (
    <Navigate replace to="/menu" />
  );
};
