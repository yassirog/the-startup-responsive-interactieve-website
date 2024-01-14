const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 15);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    let currentIndex = 0;
  
    function showNextBox() {
      // Verberg alle divs
      boxes.forEach(box => box.classList.remove('active'));
  
      // Toon de volgende div
      boxes[currentIndex].classList.add('active');
      currentIndex++;
  
      // Als het laatste div is bereikt, reset de index naar 0
      if (currentIndex === boxes.length) {
        currentIndex = 0;
      }
  
      // Roep de functie opnieuw aan na 2 seconden
      setTimeout(showNextBox, 2000); // Pas de tijd (in milliseconden) tussen divs aan indien nodig
    }
  
    // Initiële oproep om de autoplay te starten
    showNextBox();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const nightImage = document.getElementById('night');
    const body = document.getElementsByName('body');
    var col = document.getElementById("tekst");


    nightImage.addEventListener('click', function() {
    console.log('Image clicked!');

    
      // Check the current src attribute to determine which image is displayed
    if (nightImage.src.includes('dark.png')) {
        console.log('Switching to the second image');
        document.body.style.backgroundColor = "#202020";


        // Change the image to the second one
        nightImage.src = 'assets/light.png';
    } else if (nightImage.src.includes('light.png')){
        console.log('Switching back to the first image');
        document.body.style.backgroundColor = "#FFFFFF";

        // Change the image back to the first one
        nightImage.src = 'assets/dark.png';
    }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nightImage = document.getElementById('night');
    const colorChangeElements = document.querySelectorAll('.color-change');
    const logoImage = document.getElementById('logo');
  
    nightImage.addEventListener('click', function() {
      // Toggle between white and original color for elements with class="color-change"
      colorChangeElements.forEach(element => {
        if (element.style.color === 'white') {
          element.style.color = ''; // Reset to original color (remove inline style)
        } else {
          element.style.color = 'white'; // Change to white
        }
      });
  
      // Toggle between the two logo images
      if (logoImage.src.endsWith('uncinc-logo-RGB-white.svg')) {
        logoImage.src = 'assets/uncinc-logo-RGB-black.svg';
      } else {
        logoImage.src = 'assets/uncinc-logo-RGB-white.svg';
      }
    });
  });
  
  


