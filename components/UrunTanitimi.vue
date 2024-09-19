<template>

<div class="section-urun-tanitimi">

<div class="text-contanier">
        <h2>Ürünlerinizin değerini koruyan</h2>
        <h2 id="h2-dark">sürdürülebilir çözümler</h2>
        <p>Zengin ürün çeşitliliğimiz ile farklı sektöre sürdürülebilir, <br> dayanıklı, işlevsel çözümler sunuyoruz.</p>
    </div>

   
    <div class="image-section">
  <div class="ellipse-img">
    <img src="../assets/img/Ellipse42.png" alt="Ellipse">
  </div>
  <div class="rectangle-img">
    <img src="../assets/img/image26.png" alt="Rectangle">
  </div>
  <div class="info-box1">
    <div class="icon-container">
      <span class="icon">
        <img src="../assets/img/Union18.svg" alt="Icon">
      </span>
    </div>
    <div class="text">Büyük Hacimliler</div>
  </div>
  <div class="info-box2">
    <div class="icon-container2">
      <span class="icon">
        <img src="../assets/img/Union19.svg" alt="Icon">
      </span>
    </div>
    <div class="text">Paletler</div>
  </div>
  <div class="info-box3">
    <div class="icon-container2">
      <span class="icon">
        <img src="../assets/img/Path24541.svg" alt="Icon">
      </span>
    </div>
    <div class="text">Kasalar</div>
  </div>
</div>



<div class="image-text2">
    <p>1968 yılından bugüne kadar süregelen müşteri odaklı hizmet <br> anlayışımız, ihtiyaca uygun en işlevsel ürünü geliştirme felsefemiz  ve sürdürülebilir mükemmel paydaş olma önceliğimiz tüm iş ortaklarımızla uzun ömürlü iş ilişkileri geliştirmemizin altında yatan en temel nedendir.</p>
    <a href="#">Detaylara Git <img src="../assets/img/Iconly-Light-Outline-Arrow-Right.svg"></a>
</div>

</div>

</template>


<style>

.section-urun-tanitimi {
    width: 1920;
    height: 1100px;
}

  .text-contanier {
    position: relative;
    top:235px;
    margin-bottom:55px;
    left: 285px;
    width: 518px;

  }
  
  .text-contanier h2 {
    font-weight: 300;
  }
  .text-contanier p {
    font-weight: 300;
  }
  #h2-dark {
    margin-top:-12px;
    font-weight: 700;
  }

  
  .image-section {
    position: relative;
    width: 1100px; /* Ensure units are included */
    height: 803px; /* Ensure units are included */
    display: flex;
    align-items: center;
    top:250px;
    margin: 0 auto;
   
  }
  
  .ellipse-img {
    position: absolute;  
    top: 0;  
    left: 0;  
    width: 100%;  
    height: 100%;  
    z-index: 1;  
  }
  
  .ellipse-img img {
    width: 100%;  
    height: 100%;  
    object-fit: cover; 
  }
  
  .rectangle-img {
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100%;
    z-index: 2; 
  }
  
  .rectangle-img img {
    width: 100%; /* Make sure the image covers the container */
    height: 100%; /* Make sure the image covers the container */
 
  }
  
  .info-box1, .info-box2, .info-box3 {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 46px;
    justify-content: center;
  
  }
  
  .info-box1 {
    top: -356px;
    left: 752px;
    width: 354px;
    height: 95px;
  }

  .info-box2 {
    top:-290px;
    right:90px;
  width: 221px; 
  height: 80px;
  }
  .info-box3 {
    top:235px;
    width: 210px;
    height: 76px;
    right:105px;
  }

 .text{
    top: 1355px;
left: 1276px;
width: 180px;
height: 28px;
/* UI Properties */
text-align: center;
font-family: "Ubuntu", sans-serif;
font-size: 23px;
letter-spacing: -0.63px;
color: #444444;
opacity: 1;
margin-left:45px;
 } 

.info-box {
    position: absolute;
    width: 190px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    background: rgb(255, 255, 255);
    border-radius: 46px;
    text-align: right;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.0823529412);
    align-items: center;

    
    box-shadow: 0px 3px 20px #00000015;/* Hafif gölge efekti */
}



.icon-container {
    background-color: #23BA86;
    width: 75px;
    height: 76px;
    border-radius: 50%;
    color: white;
    left: 5px;
    top: 9px;
    bottom: 5px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
}



.icon-container2 {
    background-color: #23BA86;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    color: white;
    left: 5px;
    top: 9px;
    bottom: 5px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
}

.info-box .text {
    color: black; /* Yazı rengi */
    font-size: 14px; /* Yazı boyutu */
    position: absolute;
    right:0;
    margin-right: 25px;
    
}
.icon img {
    width: 47px;
    height: 38px;
    display: flex;
    
   
    
}
.image-text2 {
    width: 517px;
    height: 120px;
    margin:0 auto; /* Margin ayarı */
    top:214px;
    left: 365px;
    color:#818181;
    font-weight: 300;
    position: relative;
}
.image-text2 a {
    color: #212121;
    text-decoration: none;
   
}
.image-text2 a img {
 
    margin-left:3px;
   
}

</style>