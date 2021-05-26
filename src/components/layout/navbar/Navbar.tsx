import styled from 'styled-components';

const Nav = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
height:63px;
border:1px solid black;
`;
const Navbar = () => {
    return (
        <Nav>
            <div>first group</div>
            <div>second group</div>
        </Nav>
    )
}

export default Navbar
