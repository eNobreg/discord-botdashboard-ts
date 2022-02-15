import { GuildMenuStyle } from "../styles";

type Props = {
  guild: {
    id: string;
    name: string;
    icon: string;
  };
};
export const GuildMenuItem = ({ guild }: Props) => (
  <GuildMenuStyle>
    <img
      src={guild.icon}
      alt={guild.name}
      width={50}
      style={{ borderRadius: "%" }}
    />
    <p>{guild.name}</p>
  </GuildMenuStyle>
);
