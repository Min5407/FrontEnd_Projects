document.addEventListener("DOMContentLoaded", function(){
   let backgroundImgs = ["../image/background1.jpg","../image/background2.jpg","../image/background3.jpg"]
   let photographers = ["Photo By: &nbsp; Simon Migaj from Pexels","Photo by: &nbsp Fancycrave.com from Pexels","Photo by: &nbsp Pixabay from Pexels"]
   let index=0;
   autoSlide();
   function autoSlide(){
      

      if (index >= backgroundImgs.length){
         index = 0;
      }
      
      let header = document.querySelector("header");
      let autor = document.querySelector("#photographer")
    
      backImage = backgroundImgs[index];
      photographer = photographers[index];
      console.log(backImage)
      console.log(photographer)
      header.style.backgroundImage = `url(${backImage})`;
      autor.innerHTML = photographer;
      
      
      index++;
      setTimeout(autoSlide,6000);
   }
 });