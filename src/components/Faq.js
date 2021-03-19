import React from "react"
import styled from "styled-components"
import {useState} from 'react';


const Container = styled.div`
 display: flex !important;
 flex-direction: column;
 margin-top: 80px;
  margin-bottom: 80px;
 font-family: 'PT Sans', sans-serif;
max-width: 1366px;
 @media (max-width: 768px) {
   padding-left: 10px;
   padding-right: 10px;
 }
`

const Text = styled.div`
padding-left:10px;
padding-right:10px;
text-align: center;
padding-bottom: 40px;
`

const H2 = styled.h2`
    font-size: 30px;
    position: relative;
    display: inline-flex;
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
    }
`

const Question = styled.div`
font-size: 20px;
font-weight: bold;
position: relative;
background: white;
color: black;
padding:10px;
font-family: 'PT Sans', sans-serif;
display: flex;
justify-content: space-between;
  cursor: pointer;
  border-left: 2px solid #4585ef;

`

const Answer = styled.div`
font-size: 16px;
padding:10px;
font-weight: 300;
margin-bottom: 10px;
font-style: italic;
font-family: 'PT Sans', sans-serif;
`

const FaqWrap = styled.div`
box-shadow: 0px 4px 17px -5px rgba(0,0,0,0.37);
background: white;
max-width: 1024px;
margin-bottom: 5px;
`



function Quest(props) {
 const [open, setOpen]  = useState(false);
  return (
<FaqWrap>
    <Question onClick={() => setOpen(!open)}>{props.qus}</Question>
       {open && <Answer>Ответ: {props.ans}</Answer>}
</FaqWrap>
  );
}


const answer_1 = {
    qus: '«Компьютер всегда работал нормально, но в последнее время "тормозит", в чем может быть причина?»',
    ans: 'Об этом, опять-таки, расскажет диагностика. Из возможных причин: ПО установленное из ненадежного источника, запыление и соответствующий перегрев железа, переизбыток кэшей и прочего "мусора" в системных папках, постепенный выход из строя жесткого диска и т.д.',
}

const answer_2 = {
    qus: '«Скажите, какие виды работ по обслуживанию компьютеров Вы осуществляете?»',
    ans: 'Я выполняют полный спектр работ по ремонту, сборке, настройке компьютеров и установке ПО.',
}

const answer_3 = {
    qus: '«Выезжаете ли вы на дом?»',
    ans: 'Выезжаю, но тут нужно смотреть на тип работы. Если систему переустановить или тот же пароль сбросить, то приеду и сделаю. Но если у вас железо не работает, будет лучше, если вы привезете ко мне. Тогда это не превратится в вечную беготню за инструментом и проверочными платами. Но даже частенько и в этом случае я сам выезжаю на дом. Так что да.',
}

const answer_4 = {
    qus: '«У меня пропало изображение на компьютере, что делать?»',
    ans: 'Для начала стоит проверить все подключения, если имеется видеокарта, проверьте, чтобы монитор был подключен к ней, а не к материнской плате. Если все подключено и изображения нет, обращайтесь ко мне, я уже выясню, ведь причина может быть совсем в неожиданном месте - оперативной памяти, например.',
}

const answer_5 = {
    qus: '«Мама посидела за компьютером и случайно установила пароль, сам пароль она не знает, вы можете его снять?»',
    ans: 'Могу, в том случае, если не привязано к учетной записи @outlook (windows 10), в противном случае, придется восстанавливать доступ к учетной записи вам своими силами. А от обычной учетки windows поменяю вам пароль за 500р. ',
}

const answer_6 = {
    qus: '«Сколько у вас стоит почистить пк и переустановить windows?»',
    ans: 'Переустановка по стандарту 1000руб. Очистка пк тоже 1000руб, в нее входит, полная очистка от пыли всех комплектующих, то есть процессор, видеокарта, бп и тд, а также, замена термоинтерфейсов (термопаста). Если переустановка системы и очистка делается единовременно (то есть одной работой), тогда беру 1500 руб.',
}

const answer_7 = {
    qus: '«Я купил новую видеокарту, но она не работает. В чем может быть причина?»',
    ans: 'Не спешите бежать возвращать ее. Возможно проблема не в ней а в версии прошивки вашего BIOS на материнской плате.',
}


const Faq = () => (
  <Container>
 <Text>
  <H2>Ваши вопросы</H2>
 </Text>
    <Quest qus={answer_1.qus} ans={answer_1.ans} />
    <Quest qus={answer_2.qus} ans={answer_2.ans} />
    <Quest qus={answer_3.qus} ans={answer_3.ans} />
    <Quest qus={answer_4.qus} ans={answer_4.ans} />
    <Quest qus={answer_5.qus} ans={answer_5.ans} />
    <Quest qus={answer_6.qus} ans={answer_6.ans} />
    <Quest qus={answer_7.qus} ans={answer_7.ans} />
    </ Container>
)


export default Faq
