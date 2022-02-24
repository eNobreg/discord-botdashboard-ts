import { GuildMenuStyle } from "../styles";
import { PartialGuild } from '../utils/types';
import { getIconURL } from '../utils/helpers';

type Props = {
  guild: PartialGuild;
};
export const GuildMenuItem = ({ guild }: Props) => (
  <GuildMenuStyle>
    <img
      src={getIconURL(guild)}
      alt={guild.name}
      width={50}
      style={{ borderRadius: "50%" }}
    />
    <p>{guild.name}</p>
  </GuildMenuStyle>
);
