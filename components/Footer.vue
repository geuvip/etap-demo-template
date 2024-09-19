<template>
<section class="four-column-section">
  <div class="containerse">
    <div class="columnse">
        <div class="columnse-icerik">

       
      <img src="../assets/img/Group5571.png">   
      <p>ETAP ENJEKSİYON PLASTİK SAN. TİC. A.Ş.</p>    
      <h2 class="columnse-title">Bizimle iletişime geçin</h2>
      </div>
    </div>
    <div class="columnse">
  <div class="columnse-menu">
    <ul>
      <li><a href="#">Kurumsal</a></li>
      <li><a href="#">Ürünler</a></li>
      <li><a href="#">Sürdürebilirlik</a></li>
      <li><a href="#">Kariyer</a></li>
      <li><a href="#">Medya</a></li>
      <li><a href="#">İletişim</a></li>
    </ul>
  </div>
</div>
<div class="columnse">
  <div class="boxe">
  <div class="img-back">
    <img src="../assets/img/telephone.png" alt="Telephone Icon">
  </div>
  <div class="text-contente">
    <h2>İletişim</h2>
    <p><b>+90 232 479 1066 / 232 479 0504</b></p>
  </div>
</div>
<div class="boxe">
  <div class="img-back">
    <img src="../assets/img/telephone.png" alt="Telephone Icon">
  </div>
  <div class="text-contente">
    <h2>İletişim</h2>
    <p><b>satisplastik@etapplastik.com</b></p>
  </div>
</div>
</div>
    <div class="columnse2">
      
      <div class="gradient-container">
  <div class="gradient-box gradient-1"></div>
  <div class="gradient-box gradient-2"></div>
  <div class="gradient-box gradient-3">
    <img src="../assets/img/button-right.svg">
  </div>
</div>
    </div>


     <!-- Yeni eklenen linkler kısmı -->
     <div class="links-section">
      <a href="#" class="link-item">Çerez Politikası</a>
      <a href="#" class="link-item">KVKK Aydınlatma Metni</a>
      <a href="#" class="link-item">Haberler</a>
      <div class="link-social-media">
      <a href="#" class="link-items"><img src="../assets/img/instagram-gray.svg"></a>
      <a href="#" class="link-items"><img src="../assets/img/youtube-gray.svg"></a>
      <a href="#" class="link-items"><img src="../assets/img/linkedin-gray.svg"></a>
    </div>
    <a href="#" class="link-item"><img src="../assets/img/svgg.svg"></a>
    </div>

  </div>

  

</section>


</template>

<style>
.four-column-section {
  padding: 50px;
  height: 550px;
  background-color: #EBECED;
}

.containerse {
    width:1580px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
 
}

.columnse {
    flex: 1;
    min-width: calc(25% - 20px);
   
    padding: 20px;
    border-radius: 8px;
 
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

}

.columnse2 {
    flex: 1;
    padding: 20px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left:-15px;
    
}
.columnse-icerik {
    display: flex;
    flex-direction: column;
    
}
.columnse-icerik  p {
  color:#989898;
  margin-top: 15px;
}
.columnse-icerik img {
    width: 185px;
height: 67px;
}

.columnse-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 350px;
  margin-top:25px;
  color:#00AC69;
}


.columnse-menu ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}

.columnse-menu li {
  flex: 0 0 50%; /* Her bir li elemanı genişliği %50 olacak */
  box-sizing: border-box; /* Padding ve border'ı genişliğe dahil eder */
  padding: 10px; /* Opsiyonel: İçerik için padding */
}

.columnse-menu a {
  text-decoration: none;
  color: #333; /* Link rengi, opsiyonel */
  display: block; /* Link'in tamamını kapsar */
  padding: 10px; /* Link için padding */
  border-radius: 4px; /* Opsiyonel: Köşeleri yuvarlat */
  text-align: left; /* Yazıyı sola hizala */
}





.boxe {
  display: flex;
  align-items: center; /* İçeriği dikeyde ortalar */
  width: 520px; /* Genişlik */
  height: 150px; /* Yükseklik */
  background-color: #ffffff;
  border-radius: 30px;
  
  padding: 20px;

  margin-top: 10px;
}

.img-back {
  width: 71px;
  height: 71px;
  background-color: rgba(70, 189, 155, 0.2); /* Şeffaf yeşil arka plan */
  display: flex;
  align-items: center; /* Resmi ortalar */
  justify-content: center; /* Resmi ortalar */
  border-radius: 8px; /* Köşeleri yuvarlatır */
  margin-right: 20px; /* img-back ile text-content arasında boşluk */
  position: relative;
  left:15px;
}

.img-back img {
    width: 52px;
    height: 38px;
  object-fit: contain; /* Resmi kutunun içine sığacak şekilde ayarlar */
}

.text-contente {
  display: flex;
  flex-direction: column;
  justify-content: center; /* İçeriği dikeyde ortalar */
  position: relative;
  top:8px;
  left:15px;
}
.text-contente h2 {
     font-size: 20px;
     font-weight: 300;
}
.gradient-container {
  display: flex;
  position: relative;
}

.gradient-box {
  border-radius: 50px; /* Köşeleri yuvarlatır */
  position: relative; /* Konumlandırmayı yapabilmek için */
  margin-right: -250px; /* Birbirinin içine geçme miktarını artırır */
}

.gradient-1 {
    width: 317px;
height: 399px;

/* UI Properties */
background-color: #FFFFFF;
background: transparent url('../assets/img/Rectangle3044.svg') 0% 0% no-repeat ;
}

.gradient-2 {
    width: 339px;
height: 446px;

/* UI Properties */
background: transparent url('../assets/img/Rectangle3047.svg') 0% 0% no-repeat;
box-shadow: 0px 10px 99px #00000029;
background-color: #FFFFFF;
}

.gradient-3 {
    width: 323px;
    height: 494px;
    display: flex;
    box-shadow:-5px 0px 15px #00000029;
    background: rgb(255,255,255);
    background: linear-gradient(115deg, rgba(255,255,255,1) 0%, rgba(233,234,235,1) 100%);
    align-items: center;
    justify-content: flex-start;

}
.gradient-3 img {
    margin-left:55px;
}
/* Yeni eklenen linkler kısmı */
.links-section {
  display: flex;
  justify-content: center; /* Linkleri yatayda ortalar */
  margin-top: 20px;
  margin: 0 auto;
}
.link-social-media {
    display: flex;
  justify-content: center; /* Linkleri yatayda ortalar */
  margin-top: 20px;
  margin: 0 auto;
  
}

.link-item {

  color: #6C6C6C; /* Link rengi */
  font-size: 16px;
  padding: 10px;
  margin: 0 10px; /* Linkler arasına boşluk bırakır */
}
.link-items {
    text-decoration: none;
  color: #6C6C6C; /* Link rengi */
  font-size: 16px;
  padding: 10px;
}

.link-item:hover {
  text-decoration: underline; /* Üzerine gelindiğinde altı çizili */
}

</style>