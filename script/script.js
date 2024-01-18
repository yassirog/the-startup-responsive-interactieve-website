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

// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll('.box');
//     let currentIndex = 0;
  
//     function showNextBox() {
   
//       boxes.forEach(box => box.classList.remove('active'));
  
     
//       boxes[currentIndex].classList.add('active');
//       currentIndex++;
  
   
//       if (currentIndex === boxes.length) {
//         currentIndex = 0;
//       }
  
    
//       setTimeout(showNextBox, 2000);
//     }

//     showNextBox();
//   });

  document.addEventListener("DOMContentLoaded", function() {
    const nightImage = document.getElementById('night');
    const body = document.getElementsByName('body');
    var col = document.getElementById("tekst");


    nightImage.addEventListener('click', function() {
    console.log('Image clicked!');

    // Checkt welke foto aanstaat en doet ook gelijk dan de kleur veranderen van achtergrond
    if (nightImage.src.includes('dark.png')) {
        console.log('Switching to the second image');
        document.body.style.backgroundColor = "#202020";


        // Verandert naar een nieuwe foto
        nightImage.src = 'assets/light.png';

        // Als de nieuwe foto aanstaat en de code weer wordt uitgevoerd zal de oude foto gekozen worden
    } else if (nightImage.src.includes('light.png')){
        console.log('Switching back to the first image');
        document.body.style.backgroundColor = "#FFFFFF";

        // Oude foto word gekozen
        nightImage.src = 'assets/dark.png';
    }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nightImage = document.getElementById('night');
    const colorChangeElements = document.querySelectorAll('.color-change');
    const logoImage = document.getElementById('logo');
  
    nightImage.addEventListener('click', function() {
 
      // Bij alle elementen met de class "color-change" wordt er geswitched tussen " " en "wit" als kleur.
      colorChangeElements.forEach(element => {
        if (element.style.color === 'white') {
          element.style.color = '';
        } else {
          element.style.color = 'white';
        }
      });
  
      // Tussen de 2 unc inc logo's switchen
      if (logoImage.src.endsWith('uncinc-logo-RGB-white.svg')) {
        logoImage.src = 'assets/uncinc-logo-RGB-black.svg';
      } else {
        logoImage.src = 'assets/uncinc-logo-RGB-white.svg';
      }
    });
  });
  
  


