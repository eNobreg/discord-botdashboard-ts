import { Button, Container, Flex, InputField, Page, Title } from "../styles";

export const GuildPrefixPage = () => (

<Page>
	<Container style={{width: '800px'}}>
		<Title>Update Command Prefix</Title>
		<form>
			<div>
				<label htmlFor="prefix">Current Prefix</label>
			</div>
			<InputField id="prefix" style={{ margin: '10px 0px' }} />
			<Flex justfiyContent="flex-end">
				<Button variant="secondary" type='button' style={{marginRight: '10px'}}>Reset</Button>
				<Button variant="primary" type='submit'>Save</Button>
			</Flex >
		</form>
	</Container>
</Page>

);