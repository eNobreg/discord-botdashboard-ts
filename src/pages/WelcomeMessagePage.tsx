import { Title, Container, Page, Select, TextArea, Flex, Button } from "../styles";

export const WelcomeMessagePage = () => (
	<Page>
		<Container>
			<Title>Update Welcome Channel</Title>
			<form>
				<div>
					<label>Current Channel</label>
				</div>
				<section style={{margin: '10px 0px'}}>
					<Select >
						<option selected disabled>Please select an Option</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Select>
				</section>

				<div style={{margin: '60px'}}></div>

				<section style={{marginTop: '10px'}}>
					<div>
						<label htmlFor="message">Current Welcome Message</label>
					</div>
					<TextArea id="message" style={{margin: '10px 0px'}} />
				</section>
				<Flex justfiyContent="flex-end" >
					<Button variant="secondary" type='button' style={{marginRight: '10px'}}>Reset</Button>
					<Button variant="primary" type='submit'>Save</Button>
				</Flex>
			</form>
		</Container>
	</Page>
)