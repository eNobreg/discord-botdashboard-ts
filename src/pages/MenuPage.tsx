import { Navigate, useNavigate } from 'react-router';
import { mockGuilds } from '../___placeholders___/guillds';
import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
import { GuildMenuItem } from '../components/GuildMenuItem';
import { Container } from '../styles';



export const MenuPage = () => {
const navigate = useNavigate();
const { updateGuildId } = useContext(GuildContext);


const handleClick = (guildId: string) => {
	updateGuildId(guildId);
	navigate('/dashboard/categories');
}

return (
<div style={{ padding: '50px' }}>
{/* 	<ul>
		{mockGuilds.map((guild) => (
		<li onClick={() => {
			updateGuildId(guild.id);
			navigate('/categories');
		}}>{guild.name}</li>
		))}
	</ul> */}
	<Container>
		<h2 style={{ fontWeight: 300 }}>Select a Server</h2>
		<div>
			{mockGuilds.map((guild) => (
				<div onClick={() => handleClick(guild.id)} >
					<GuildMenuItem guild={guild} />
				</div>
			))}
		</div>
	</Container>
</div>
);
};