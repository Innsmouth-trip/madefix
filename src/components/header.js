import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import BgVent from "./assets/BgVent.svg";
import Vent from "./assets/vent.svg";
import './assets/header.css';
import Menu from "./navmenu"

const Logo = styled.div`
display: flex;
position: relative;
`
const HeaderLink = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding:0px;
& div {
  font-size: 20px;
}

@media (max-width: 425px) {
align-items: center;
}

`

const Sitename = styled.div`

 .sitename_link:hover{
   color: #4585ef;
   transition: .3s ease-out;
 }
`

const DeskNav = styled.div`
display: flex;
justify-content: space-between;
a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: white;
margin: 20px 10px 20px 0px;
padding: 0.25em 1em;
cursor: pointer;
transition: .3s ease-out;
}

a:hover {
  color: #4585ef;
}

@media (max-width: 768px) {
 display: none;
}

`

const LogoWrap = styled.div`
display: flex;
justify-content: center;
    align-items: center;
`

const TelMail = styled.div`
padding-right: 13px;
  a {
color: white;
-webkit-text-decoration: none;
text-decoration: none;
transition: .3s ease-out;
  }
  a:hover{
    color: #4585ef;
  }
  a.tel:before {
    content: "✆";
    padding-right: 5px;
  }
  a.mail:before {
    content: "✉";
    padding-right: 5px;
  }
  .tel {
        margin-right: 20px;
  }
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
    }
  @media (max-width: 768px) {
   display: none;
  }
`

const HeaderWrap = styled.div`
 width: 100%;
 display: flex !important;
 justify-content: center;
 z-index: 20;
 position: fixed;
 background: #20242A;
     top: 0;

`


const Header = ({ siteTitle }) => (
 <>
 <HeaderWrap>
    <header className="header">
      <LogoWrap>
          <Logo>
              <BgVent id="BgVent" />
              <Vent  id="vent"/>
          </Logo>
          <HeaderLink>
                    <Sitename>
                      <Link className="sitename_link" to="/">
                        {siteTitle}
                      </Link>
                    </Sitename>
                      <div className="sitename_text"> Ремонт, сборка и апгрейд ПК </div>
           </HeaderLink>
         </LogoWrap>
           <DeskNav>
                 <Link to="#service">УСЛУГИ</Link>

                 <Link to="#about">КОНТАКТЫ</Link>

                 <Link to="/blog">БЛОГ</Link>
           </DeskNav>
           <TelMail>
            <a className="tel" href="tel:+79620115163">+79620115163</a>
            <a className="mail" href="mailto:ultra.sokol@yandex.ru">ultra.sokol@yandex.ru</a>
           </TelMail>
           <Menu />
     </header>
   </HeaderWrap>
  </>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
