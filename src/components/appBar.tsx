import { AppBarStyle } from "../styles";
import laptopLogo from "../assets/typescript.png";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";

export const AppBar = () => {
  return (
    <AppBarStyle>
      <h1 style={{ fontWeight: "normal", fontSize: "20px" }}>Configuring</h1>
      <img
        src={laptopLogo}
        height={45}
        width={45}
        style={{ borderRadius: "50%" }}
        alt="logo"
      />
    </AppBarStyle>
  );
};
