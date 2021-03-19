import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import AvitoLogo from "./assets/avito.svg"
import Vklogo from "./assets/vklogo.svg"
import YandexUslugi from "./assets/yandex_usl.svg"
import Yla from "./assets/ula.svg"
import Face from "./face"


  const Ebalo = styled.div`
  cursor: pointer;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0px 0px 0px;
  position: relative;
  transform: scale(0.9);
  p {
    margin-top: 5px;
  }
  & img {
   border-radius: 666%;
   pointer-events: none;
  }

  `

 const Nav = styled.nav`
 position: absolute;
 top: 0px;
 font-family: 'PT Sans', sans-serif;
 flex:2;
 & ul {
   outline:none;
    display: flex !important;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 0;
    padding-left: 0;
   & li {
     font-size: 30px;
     margin-bottom: 10px;
     z-index: 0;
    &:before {
       content: "";
    }
   }
 }
 & a {
  text-decoration: none;
   color: white;
   &:active {
     color: #4585ef;
   }
 }
 `

const FaVk = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
  background: #404454;
  width: 200px;
    transition: all 1s ease;
  &:hover {
    background: #4585ef;
  }

`

const FaYandex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
  background: #404454;
  width: 200px;
  transition: all 1s ease;
  &:hover {
    background: #4585ef;
  }

`

const FaYla = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
margin-bottom: 10px;
background: #404454;
width: 200px;
transition: all 1s ease;
&:hover {
  background: #4585ef;
}
`

const FaAvito = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
margin-bottom: 10px;
background: #404454;
width: 200px;
transition: all 1s ease;
&:hover {
  background: #4585ef;
}
`

const Social = styled.div`
    margin-top: 50px;
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    outline:none;
`

const SocialText = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
  align-self: center;
  color: white;
  cursor:default;
`

const Burger = () => (
  <Nav>
<Menu right>
<ul>
  <li>
    <Link to="/blog">Блог</Link>
  </li>
  <li>
    <Link to="#service">Услуги</Link>
  </li>
  <li>
    <Link to="#about">Контакты</Link>
  </li>
</ul>
<Social>
  <SocialText>Площадки:</SocialText>
  <a href="https://vk.com/id266305844" target="_blank" rel="noopener noreferrer"><FaVk><Vklogo /> Я Вконтакте</FaVk></a>
  <a href="https://vk.com/madefix" target="_blank" rel="noopener noreferrer"><FaVk><Vklogo /> Группа ВК</FaVk></a>
  <a href="https://yandex.ru/uslugi/profile/AleksandrSokolenko-295555" target="_blank" rel="noopener noreferrer"><FaYandex><YandexUslugi /></FaYandex></a>
  <a href="https://youla.ru/user/5aa5113ade8854ba24795de2" target="_blank" rel="noopener noreferrer"><FaYla><Yla /></FaYla></a>
  <a href="https://www.avito.ru/user/e0085342417bd5ba0dfe97fa98ae1607/profile?id=1184667416" target="_blank" rel="noopener noreferrer"><FaAvito><AvitoLogo /></FaAvito></a>
</Social>
<Ebalo>
  <a href="https://vk.com/invisiblesleeper" target="_blank" rel="noopener noreferrer">
    <Face />
    <p>© Innsmouth-trip</p>
  </a>
</ Ebalo>
 </Menu>

  </Nav>
)






export default Burger
