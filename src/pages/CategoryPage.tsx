import { useContext } from "react"
import { Container, Page, TextButton, Title } from "../styles";
import { GuildContext } from '../utils/contexts/GuildContext';
import { IoSettingsOutline, IoNewspaper } from 'react-icons/io5'
import { Flex } from "../styles"
import { Grid } from '../styles/index';
import { useNavigate } from 'react-router';

export const CategoryPage = () => {

	const { guildId } = useContext(GuildContext)
	const navigate = useNavigate();


	return (
	<Page>
		<Container>
			<div>
				<Flex alignItems="center" justfiyContent="space-between">
					<Title>Basic Configurations</Title>
					<IoSettingsOutline size={35} />
				</Flex>
				<Grid>
					<TextButton onClick={() => navigate('/dashboard/prefix')}>Command Prefix</TextButton>
					<TextButton onClick={() => navigate('/dashboard/message')}>Welcome Channel</TextButton>
				</Grid>
			</div>

			<div style={{borderBottom: '1px solid #ffffff2b', marginTop: '10px'}}></div>

			<div>
				<Flex alignItems="center" justfiyContent="space-between">
					<Title>Guild Logging</Title>
					<IoNewspaper size={35} />
				</Flex>
				<Grid>
					<TextButton>Moderation Logs</TextButton>
					<TextButton>General Logs</TextButton>
				</Grid>
			</div>
		</Container>
	</Page>
	)
}