import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const Container = styled.div`
 display: flex !important;
 flex-direction: row;
 flex-wrap: wrap;
 max-width: 1366px;
 justify-content: center;
 align-items: center;
 padding-bottom: 80px;
 @media (max-width: 425px) {
   flex-direction: column;
 }
`


const Text = styled.div`
padding-top: 80px;
padding-left:10px;
padding-bottom: 40px;
padding-right:10px;
text-align: center;
`

const H2 = styled.h2`
  margin-bottom: 5px;
  font-size: 30px;
  position: relative;
  &:after {
    content: "";
    border-bottom: 3px solid #4585ef;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: -10px;
    font-size: 40px;
}
`
const Usluga = styled.div`
  display: flex;
  transition: .4s ease-in-out;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 240px;
  height: auto;
  margin: 20px;
padding: 0px 0px 13px 0px;
  color: black;
  background: #FFFFFF;
  cursor: pointer;
 &:hover {
  img { filter: none;}
  box-shadow: 0px 4px 17px -5px rgba(0,0,0,0.37);
 }

 .bloglink {
       text-decoration: none;
       color: #20242a;
       padding-left: 0px;
       &:active {
        color: #20242a !important;
       }
 }


`

const UslugaImg = styled.img`
 width: 100%;
 transition: .4s ease-in-out;
 margin-bottom: 0rem;

`

const UslugaInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid #4585ef;


`

const UslugaName = styled.h3`
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    margin-bottom: 10px;
`

const Price = styled.div`
font-size: 16px;
font-weight: bold;
`




function Service(props) {
  return (
    <Usluga>
      <Link className="bloglink" to={props.usluga.pageUrl}>
      <UslugaImg src={props.usluga.imageUrl} alt={props.usluga.name}  />
      <UslugaInfo>
        <UslugaName>{props.usluga.name}</UslugaName>
          <Price>от {props.price} ₽</Price>
      </UslugaInfo>
    </Link>
    </Usluga>
  );
}


const repair_pk = {
  price: '1 000',
  usluga: {
    name: 'Ремонт ПК и ноутбуков',
    imageUrl: require('../images/uslugi/remontpc.jpeg'),
    pageUrl: 'remont-pc-i-noutbukov'
  },
}

const assembly = {
  price: '2 000',
  usluga: {
    name: 'Сборка компьютеров',
    imageUrl: require('../images/uslugi/sborkapc.png'),
    pageUrl: 'sborka-computerov'
  },
}

const instal_os = {
  price: '1 000',
  usluga: {
    name: 'Установка ОС',
    imageUrl: require('../images/uslugi/installos.jpg'),
    pageUrl: 'ustanova-operacionnoy-sistemy'
  },
}


const instal_pr = {
  price: '100',
  usluga: {
    name: 'Установка программ',
    imageUrl: require('../images/uslugi/ustanokaprogramm.jpg'),
    pageUrl: 'ustanovka-programm'
  },
}

const mother_rep = {
  price: '1 000',
  usluga: {
    name: 'Замена материнской платы',
    imageUrl: require('../images/uslugi/matplata.jpg'),
    pageUrl: 'zamena-materinskoj-platy'
  },
}

const diagnostics = {
  price: '300',
  usluga: {
    name: 'Диагностика',
    imageUrl: require('../images/uslugi/diagnostika.jpg'),
    pageUrl: 'diagnostika'
  },
}

const repair_components = {
  price: '1 000',
  usluga: {
    name: 'Ремонт и замена комплектующих',
    imageUrl:require('../images/uslugi/komplect.jpg'),
    pageUrl: 'remont-i-zamena-komplektuyushchih'
  },
}

const consult = {
  price: '500',
  usluga: {
    name: 'Консультация и обучение',
    imageUrl: require('../images/uslugi/consult.jpg'),
    pageUrl: 'konsultaciya-i-obuchenie'
  },
}

const hd_repl = {
  price: '500',
  usluga: {
    name: 'Замена жесткого диска',
    imageUrl: require('../images/uslugi/hdd.jpg'),
    pageUrl: 'zamena-zhestkogo-diska'
  },
}

const power_repl = {
  price: '1 000',
  usluga: {
    name: 'Замена блока питания',
    imageUrl: require('../images/uslugi/powblock.jpg'),
    pageUrl: 'zamena-bloka-pitaniya'
  },
}



const MainServices = () => (
<>
 <Text id="service">
 <H2>Услуги</H2>
 </Text>
  <Container>
    <Service price={repair_pk.price} usluga={repair_pk.usluga} />
    <Service price={assembly.price} usluga={assembly.usluga} />
    <Service price={instal_os.price} usluga={instal_os.usluga} />
    <Service price={instal_pr.price} usluga={instal_pr.usluga} />
    <Service price={mother_rep.price} usluga={mother_rep.usluga} />
    <Service price={diagnostics.price} usluga={diagnostics.usluga} />
    <Service price={repair_components.price} usluga={repair_components.usluga} />
    <Service price={consult.price} usluga={consult.usluga} />
    <Service price={hd_repl.price} usluga={hd_repl.usluga} />
    <Service price={power_repl.price} usluga={power_repl.usluga} />
  </Container>
</>
)






export default MainServices
