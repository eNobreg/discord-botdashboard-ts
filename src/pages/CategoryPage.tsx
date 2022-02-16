import { useContext } from "react"
import { Container, Title } from "../styles";
import { GuildContext } from '../utils/contexts/GuildContext';
import { IoSettingsOutline } from 'react-icons/io5'

export const CategoryPage = () => {

	const { guildId } = useContext(GuildContext)
	return (
	<div style={{padding: '50px 0'}}>
		<Container>
			<div>
				<div>
					<Title>Basic Configurations</Title>
					<IoSettingsOutline size={40} />
				</div>
			</div>
		</Container>
	</div>
	)
}