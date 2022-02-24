import { useNavigate } from "react-router";
import { mockGuilds } from "../___placeholders___/guillds";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { Container, Page } from "../styles";
import { useFetchGuids } from "../utils/hooks/useFetchGuilds";
import { MoonLoader } from "react-spinners";
import { Flex } from "../styles/index";
import { PartialGuild } from "../utils/types";

export const MenuPage = () => {
  const navigate = useNavigate();
  const { updateGuild } = useContext(GuildContext);
  const { guilds, loading, error } = useFetchGuids();

  const handleClick = (guild: PartialGuild) => {
    updateGuild(guild);
    navigate("/dashboard/categories");
  };

  return (
    <Page>
      {loading ? (
        <Container>
          <div>
            <Flex justfiyContent="center">
              <MoonLoader size={40} color="white" />
            </Flex>
          </div>
        </Container>
      ) : (
        <Container>
          <h2 style={{ fontWeight: 300 }}>Select a Server</h2>
          <div>
            <div>
              {guilds &&
                guilds.map((guild) => (
                  <div key={guild.id} onClick={() => handleClick(guild)}>
                    <GuildMenuItem guild={guild} />
                  </div>
                ))}
            </div>
          </div>
        </Container>
      )}
    </Page>
  );
};
