import { Navigate, useNavigate } from 'react-router';
import { mockGuilds } from '../___placeholders___/guillds';
import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
export const MenuPage = () => {
const navigate = useNavigate();
const { updateGuildId } = useContext(GuildContext);

return (
<div>
{/* 	<ul>
		{mockGuilds.map((guild) => (
		<li onClick={() => {
			updateGuildId(guild.id);
			navigate('/categories');
		}}>{guild.name}</li>
		))}
	</ul> */}

	<h2>Select a Server</h2>

	

</div>
);
};