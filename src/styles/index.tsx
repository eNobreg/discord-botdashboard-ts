import styled from 'styled-components';

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
      width: 1200px;
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