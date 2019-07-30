import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #393D48;
    div{
        color:#D4D7DD ;
        span {
            color:#D4D7DD;
            text-decoration: none; 
            margin: 10px;
        }
    }
`;

const Link = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
`;

const NavBar = (props)=>{
    return (
        <Nav>
            <div>
               <Link to="/"><span>
                    User App
                    </span>
                    </Link> 
               <Link to={props.url}>
                   <span>
                     {props.children}
                   </span>
                   </Link>
            </div>
        </Nav>
    )
}

export default NavBar;
