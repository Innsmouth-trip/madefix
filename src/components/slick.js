import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderone from "../images/slider1.jpg"
import slidertwo from "../images/slider2.jpeg"
import sliderthree from "../images/slider3.jpg"
import sliderfour from "../images/slider4.jpg"
import styled from "styled-components"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 666,
      autoplaySpeed: 10000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    const Div = styled.div`
    position: relative;
     width: 100%;
     height: 400px;
     margin: 0;
      img {
 width: 100%;
 height: 100%;
 object-fit: cover;
      }
      li:before {
        content: '';
      }
      @media (max-width: 425px) {
      img {
        filter: blur(3px);
      }
      }
    `

    const SliderText = styled.div`
    position: absolute;
    z-index: 999;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    height: 400px;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background:#08162b9e;
    .div_hone {
          font-size: 40px;
          line-height: 40px;
    }
    .div_htwo {
        font-size: 25px;
    }
    `

    return (
      <Div>
          <Slider {...settings}>
          <Div>
                    <SliderText>
                    <div className="div_hone">РЕМОНТ КОМПЬЮТЕРОВ И НОУТБУКОВ</div>
                    <div className="div_htwo">Диагностика, определение и устранение неисправностей</div>
                    <div className="div_htwo">Замена и установка комплектующих</div>
                    </SliderText>
          <img src={sliderone} alt="sliderone" />
          </Div>
          <Div>
            <SliderText>
            <div className="div_hone">РЕМОНТ КОМПЬЮТЕРОВ И НОУТБУКОВ</div>
            <div className="div_htwo">Диагностика, определение и устранение неисправностей</div>
            <div className="div_htwo">Замена и установка комплектующих</div>
            </SliderText>
            <img src={slidertwo} alt="sliderone" />
          </Div>
          <Div>
            <SliderText>
            <div className="div_hone">РЕМОНТ КОМПЬЮТЕРОВ И НОУТБУКОВ</div>
            <div className="div_htwo">Диагностика, определение и устранение неисправностей</div>
            <div className="div_htwo">Замена и установка комплектующих</div>
            </SliderText>
              <img src={sliderthree} alt="sliderone" />
          </Div>
          <Div>
            <SliderText>
            <div className="div_hone">РЕМОНТ КОМПЬЮТЕРОВ И НОУТБУКОВ</div>
            <div className="div_htwo">Диагностика, определение и устранение неисправностей</div>
            <div className="div_htwo">Замена и установка комплектующих</div>
            </SliderText>
            <img src={sliderfour} alt="sliderone" />
          </Div>
        </Slider>
      </Div>
    );
  }
}
