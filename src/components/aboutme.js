import React from "react"
import styled from "styled-components"
import Slick from "../components/slick"
import AvitoLogo from "./assets/avito.svg"
import Vklogo from "./assets/vklogo.svg"
import YandexUslugi from "./assets/yandex_usl.svg"
import Yla from "./assets/ula.svg"


const FaVk = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #404454;
  width: 200px;
  padding: 20px;
  margin: 10px;
  height: 80px;
  font-size: 20px;
    font-weight: bold;
    transition: all 1s ease;
  &:hover {
    background: #4585ef;
  }
  svg {
    margin: 5px;
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
  padding: 20px;
  margin: 10px;
  height: 80px;
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
padding: 20px;
margin: 10px;
height: 80px;
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
padding: 20px;
margin: 10px;
height: 80px;
transition: all 1s ease;
&:hover {
  background: #4585ef;
}
`


const Container = styled.div`
 display: flex !important;
 flex-direction: column;
     align-items: center;
 background: #4585ef14;
 color: white !important:
 padding-top: 20px;
 margin-top: 70px;
 @media (max-width: 1024px) {
 }
 @media (max-width: 768px) {
   flex-direction: column;
   height: auto;
 }
`



const SlickWrap = styled.div`
width: 100%;
@media (max-width: 768px) {
  width: 100%;
`


const Text = styled.div`
padding-top: 80px;
    max-width: 1095px;
padding-bottom: 30px;
padding-left:10px;
padding-right:10px;
display flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
 &p {
   font-size: 20px;
 }
`

const Name = styled.h1`
  margin-bottom: 40px;
`


const Button = styled.button`
  color: white;
  width: 200px;
  font-size: 25px;
  margin: 20px 0px 20px 0px;
  padding: 0.25em 1em;
  border: 2px solid #4585ef;
  border-radius: 3px;
  background: #4585ef;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;

  &:active {
     border-style: outset;
      background: #404754;
  }
  @media (max-width: 768px) {
   align-self: center;
  }
`

const Social = styled.div`
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    outline:none;
    padding-bottom: 80px;
`

const SocialText = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
  align-self: center;
  cursor:default;

  @media (max-width: 768px) {
   display: none;
  }

`

const ImgWrap = styled.div`
    display: flex !important;
    flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    outline:none;
    a {
      color: white;
      text-decoration: none;
    }

    @media (max-width: 768px) {
     display: none !important;
    }
`


const AboutMe = () => (

  <Container>
    <SlickWrap>
          <Slick />
    </SlickWrap>
    <Text id="about">
      <Name>Частный компьютерный мастер</Name>
      <p className="indexP">Всем привет, меня зовут Александр Соколенко. Я - частный компьютерный мастер. Имею большой опыт решения проблем с компьютером. Занимаюсь компьютерной помощью более 10 лет. Я оказываю услуги населению за цену, <br /> которая соответствует реальной стоимости объема оказанных услуг!</p>
      </Text>
      <Social>
        <SocialText>Как можно связаться:</SocialText>
        <ImgWrap>
          <a href="https://vk.com/id266305844" target="_blank" rel="noopener noreferrer"><FaVk><Vklogo /> Я в ВК</FaVk></a>
          <a href="https://vk.com/madefix" target="_blank" rel="noopener noreferrer"><FaVk><Vklogo /> Группа ВК</FaVk></a>
          <a href="https://yandex.ru/uslugi/profile/AleksandrSokolenko-295555" target="_blank" rel="noopener noreferrer"><FaYandex><YandexUslugi /></FaYandex></a>
          <a href="https://youla.ru/user/5aa5113ade8854ba24795de2" target="_blank" rel="noopener noreferrer"><FaYla><Yla /></FaYla></a>
          <a href="https://www.avito.ru/user/e0085342417bd5ba0dfe97fa98ae1607/profile?id=1184667416" target="_blank" rel="noopener noreferrer"><FaAvito><AvitoLogo /></FaAvito></a>
        </ImgWrap>
              <Button as="a" href="tel:+79620115163">Позвонить</Button>
      </Social>
  </Container>
)






export default AboutMe
