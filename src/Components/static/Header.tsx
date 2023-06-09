import React from 'react'
import styled from 'styled-components'
import pics from "../../assets/logo11.png"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Container>
          <Main>
            <Logo src={pics}/>
            <Nav>
              <NavLinked to="/">
                Auth
              </NavLinked>
              <NavLinked to="/auth">
                Todo
              </NavLinked>
            </Nav>
          </Main>
        </Container>
      
    </div>
  )
}

export default Header

const NavLinked = styled(NavLink)`
text-transform: uppercase;
font-weight: 700;
margin: 0 10px;
padding: 10px 25px;
border-radius: 3px;
transition: all 350ms;
text-decoration: none;
color: white;
:hover{
  cursor: pointer;
  background-color: purple;
  transform: translate(0, 5px);
}
&.active{
  background-color: #aa5eaa;
}

`
const Nav = styled.div`
display: flex;

`
const Logo = styled.img`
height: 80px;
margin-right: 50px;

`
const Main = styled.div`
 width: 90%;
 height: 100%;
 background-color: black;
 color: white;
 display: flex;
 align-items: center;
 /* justify-content: center; */
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: black;
`
