import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #0a779e;
height: 95px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
Third Nav 
justify-content: flex-start; */
@media only screen and (max-width: 600px){
	font-size:16px;
}
`;

export const NavLink = styled(Link)`
color: #7fb8cb;
font-size: 35px;
font-family: fantasy;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
@media only screen and (max-width:600px)

}
`;



export const NavMenu = styled.div`
display: flex;

margin-right: -20px;
 
 
@media screen and (max-width: 768px) {
	display:flex;
	font-size: 10px;
	
	
	
	
}
`;

