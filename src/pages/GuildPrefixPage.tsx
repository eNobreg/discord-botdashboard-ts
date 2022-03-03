import { Button, Container, Flex, InputField, Page, Title } from "../styles";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { useGuildConfig } from "../utils/hooks/useFetchGuildConfig";
import { MoonLoader } from "react-spinners";

export const GuildPrefixPage = () => {
  const { guild } = useContext(GuildContext);

  const { config, loading, error } = useGuildConfig(
    (guild && guild.id) || ''
  );

  return (
    <Page>
      <Container style={{ width: "800px" }}>
        {!loading && config ? (
          <>
            <Title>Update Command Prefix</Title>
            <form>
              <div>
                <label htmlFor="prefix">Current Prefix</label>
              </div>
              <InputField
                id="prefix"
                style={{ margin: "10px 0px" }}
                value={config.prefix}
              />
              <Flex justfiyContent="flex-end">
                <Button
                  variant="secondary"
                  type="button"
                  style={{ marginRight: "10px" }}
                >
                  Reset
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Flex>
            </form>
          </>
        ) : (
          <Flex>
              <MoonLoader size={30} color="white" />
          </Flex>
        )}
      </Container>
    </Page>
  );
};
