import styled, { css } from 'styled-components';

export const MainButton = styled.div`
      display: flex;
	align-items: center;
      width: 400px;
      background-color: #2121218d;
	padding: 10px 25px;
	box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #5858586a;
	margin: 12px 0;
	box-shadow: 0px 1px 3px 0px #08080853;
`;

export const TextButton = styled(MainButton)`
	padding: 18px 28px;
	width: 100%;
	background-color: #272727;
`;

export const HomePageStyling = styled.div`
      height: 100%;
      padding: 100px 0;
      box-Sizing: border-box;
      display: flex;
      flex-Direction: column;
      justify-Content: space-between;
      align-Items: center;
`;


export const GuildMenuStyle = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 20px;
      background-color: #252525;
      border-radius: 5px;
      border: 1px solid #ffffff18;
      margin: 8px 0;
`;

export const Container = styled.div`
      max-width: 1200px;
      margin: 0 auto;
`;

export const GuildIcon = styled.img`
      border-radius: 50%;
`;

export const AppBarStyle = styled.header`
      display: flex;
      align-items: center;
      padding: 15px 35px;
      box-sizing: border-box;
      border-bottom: 1px solid #ffffff22;
      justify-content: space-between;
`;

export const Title = styled.p`
      font-size: 22px;
`;

type FlexProps = Partial <{
      alignItems: string;
      justfiyContent: string;
      flexDirection: string;
}>
export const Flex = styled.div<FlexProps>`
      display: flex;
      align-items: ${({ alignItems }) => alignItems};
      justify-content: ${({ justfiyContent }) => justfiyContent};
      flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 10px;
`;

export const InputField = styled.input`
	padding: 14px 16px;
	font-size: 16px;
	box-sizing: border-box;
	color: #fff;
	font-family: 'DM Sans';
	background-color: #202020;
	border-radius: 5px;
	border: 1px solid #4e4e4e;
	outline: none;
	width: 100%;
	:focus {
		outline: 1px solid #ffffff37;
	}
`;

export const TextArea = styled.textarea`
	padding: 14px 16px;
	font-size: 16px;
	box-sizing: border-box;
	color: #fff;
	font-family: 'DM Sans';
	background-color: #202020;
	border-radius: 5px;
	border: 1px solid #4e4e4e;
	outline: none;
	width: 100%;
	resize: none;
	:focus {
		outline: 1px solid #ffffff37;
	}
`;

type ButtonProps = {
	variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`

	min-width: 100px;
	padding: 10px 20px;
	outline: none;
	border:none;
	border-radius: 5px;
	font-size: 14px;
	color: #fff;
	font-family: 'Dm Sans';
	cursor: pointer;


	${({ variant }) => variant === 'primary' && css`
		background-color: #006ed3;
	`}

	${({ variant }) => variant === 'secondary' && css`
		background-color: #3d3d3d;
	`}
`;

export const Page = styled.div`
	padding: 50px;
`;

export const Select = styled.select`
	width: 100%;
	padding: 12px 16px;
	font-family: 'Dm Sans';
	font-size: 18px;
	background-color: inherit;
	color: #fff;
	border-radius: 5px;
	border: 1px solid #393939;
	& > option {
		background-color: #292929;
	}
`; 

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;