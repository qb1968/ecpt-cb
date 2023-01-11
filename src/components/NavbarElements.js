import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
margin-top:2rem;
background: #0a779e;
height: 95px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
Third Nav 
justify-content: flex-start; */

}
`;

export const NavLink = styled(Link)`
color: ;
background-color: #0a779e;
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
border:black;
background-color: #0a779e;
 
 

`;

