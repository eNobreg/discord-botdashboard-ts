import { useContext } from "react"
import { Container, Title } from "../styles";
import { GuildContext } from '../utils/contexts/GuildContext';
import { IoSettingsOutline } from 'react-icons/io5'
import { Flex } from "../styles"

export const CategoryPage = () => {

	const { guildId } = useContext(GuildContext)
	return (
	<div style={{padding: '50px 0'}}>
		<Container>
			<div>
				<Flex alignItems="center">
					<Title>Basic Configurations</Title>
					<IoSettingsOutline size={40} />
				</Flex>
			</div>
		</Container>
	</div>
	)
}