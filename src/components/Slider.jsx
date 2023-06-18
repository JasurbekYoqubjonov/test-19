import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" ,color:"white"}}
        onClick={onClick}
      />
    );
  }
  
const Sliders = () => {
        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 3,
          initialSlide: 0,
          nextArrow: <Arrow />,
          prevArrow: <Arrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
          ]
        };
        const movies=[
          {url:"https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg", name:"O'rgimchak odam",date:"2023",quality:"FHD",id:1},
          {url:"https://img.freekino.net/poster/thumb/kung-fu-tulpor_1686037926.jpg", name:"Kung-Fu tulpor",date:"2023",quality:"FHD",id:2},
          {url:"https://img.freekino.net/poster/thumb/bori-odam_1685782468.jpg", name:"Bo'ri odam",date:"2023",quality:"FHD",id:3},
          {url:"https://img.freekino.net/poster/thumb/qotil-izidan-mizantrop_1685782183.jpg", name:"Qotil izidan",date:"2023",quality:"FHD",id:4},
          {url:"https://img.freekino.net/poster/thumb/nafas-olma-muqaddima_1685781907.jpg", name:"Nafas olma",date:"2023",quality:"FHD",id:5},
          {url:"https://img.freekino.net/poster/thumb/vikram-vedha_1685050782.jpg", name:"Vikram Vedha",date:"2023",quality:"FHD",id:6},
          {url:"https://img.freekino.net/poster/thumb/olmas_1684802578.jpg", name:"O'lmas",date:"2023",quality:"FHD",id:7},
          {url:"https://img.freekino.net/poster/thumb/bholaa_1684802390.jpg", name:"Bholaa",date:"2023",quality:"FHD",id:8},
          {url:"https://img.freekino.net/poster/thumb/killer-ayol-ona_1684453055.jpg", name:"Killer ayol",date:"2023",quality:"FHD",id:9},
          {url:"https://img.freekino.net/poster/thumb/ilayning-kitobi-eliyning-kitobi-uzbek-tilida-ozbekcha-2009-tarjima-kino-full-hd-skachat_1684452860.jpg", name:"Ilayning kitobi",date:"2023",quality:"FHD",id:10},
          {url:"https://img.freekino.net/poster/thumb/qutqaruvchi-aka-fransiya-filmi-uzbek-tilida-ozbekcha-2023-tarjima-kino-full-hd-skachat_1684452682.jpg", name:"Qutqaruvchi aka",date:"2023",quality:"FHD",id:11},
          {url:"https://img.freekino.net/poster/thumb/ahdga-sadoqat-afgonistondagi-jang_1684452488.jpg", name:"Ahdga sadoqat",date:"2023",quality:"FHD",id:12},
          {url:"https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg", name:"Avatar 2",date:"2023",quality:"FHD",id:13},
          {url:"https://daxshat.net/uploads/posts/2023-05/1684841804_07s0a78s8q.jpg", name:"Forsaj 10",date:"2023",quality:"FHD",id:14},
        ]
  return (
    <div className="container">
        <a href="#">
            <div className="title-container">
                <h2 className="title">Yangi Kinolar </h2><span className="icon">
                <i class="fa-solid fa-chevron-right"></i></span> 
            </div>
        </a>
        <Slider {...settings}>
          {movies.map(item=>(
            <>
            <a href="#" key={item.id}>
            <div className="card">
              <div className="scale">
              <img src={item.url} alt="" />
              <div className="card-info">
                  <h3 className="name">{item.name}</h3>
                  <div className="row">
                      <span className="date">{item.date}</span>
                      <span className="quality">{item.quality}</span>
                  </div>
              </div>
              </div>
            </div>
            </a>
            </>
          ))}
        </Slider>
    </div>
  );
};

export default Sliders