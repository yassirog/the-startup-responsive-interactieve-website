const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          // Kijk eens naar requestAnimationFrame
          setTimeout(animate, 15);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


  const nightImage = document.getElementById('night');
  const body = document.getElementsByName('body');

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

document.addEventListener("DOMContentLoaded", function() {
    const nightImage = document.getElementById('night');
    const colorChangeElements = document.querySelectorAll('.color-change');
    const logoImage = document.getElementById('logo');
    const purposeDriven = document.getElementById('purpose-driven');
    const revenueDonated = document.getElementById('revenue-donated');
    const customerSurveys = document.getElementById('customer-surveys');
    const qualityGuaranteed = document.getElementById('quality-guaranteed');
    const secureInformation = document.getElementById('secure-information');
    const humanCentered = document.getElementById('human-centered');
    const education = document.getElementById('education');
    const happinessSurvey = document.getElementById('happiness-survey');
    const salarySystem = document.getElementById('salary-system');
    const buddySystem = document.getElementById('buddy-system');
    const volunteerWork = document.getElementById('volunteer-work');
    const transparency = document.getElementById('transparency');
    const organisationTeam = document.getElementById('organisation-team');
    const impactGuild = document.getElementById('impact-guild');
    const bcorpAssessment = document.getElementById('bcorp-assessment');
    const statusesUpdated = document.getElementById('statuses-updated');
    const co2Footprint = document.getElementById('co2-footprint');
    const localSuppliers = document.getElementById('local-suppliers');
    const sustainableTravel = document.getElementById('sustainable-travel');
    const eWaste = document.getElementById('e-waste');
    const ems = document.getElementById('ems');



  
    nightImage.addEventListener('click', function() {
 
      // Bij alle elementen met de class "color-change" wordt er geswitched tussen " " en "wit" als kleur.
      colorChangeElements.forEach(element => {
        if (element.style.color === 'white') {
          element.style.color = '';
        } else {
          element.style.color = 'white';
        }
      });

      let scrollables = document.getElementById("scrollable");
      if (scrollables.classList.contains('light')) {
        scrollables.classList.remove("light");
        scrollables.classList.add("dark");
      } else {
        scrollables.classList.remove("dark");
        scrollables.classList.add("light");
      }

      let scrollables2 = document.getElementById("scrollable2");
      if (scrollables2.classList.contains('light')) {
        scrollables2.classList.remove("light");
        scrollables2.classList.add("dark");
      } else {
        scrollables2.classList.remove("dark");
        scrollables2.classList.add("light");
      }

      let scrollables3 = document.getElementById("scrollable3");
      if (scrollables3.classList.contains('light')) {
        scrollables3.classList.remove("light");
        scrollables3.classList.add("dark");
      } else {
        scrollables3.classList.remove("dark");
        scrollables3.classList.add("light");
      }

      let scrollables4 = document.getElementById("scrollable4");
      if (scrollables4.classList.contains('light')) {
        scrollables4.classList.remove("light");
        scrollables4.classList.add("dark");
      } else {
        scrollables4.classList.remove("dark");
        scrollables4.classList.add("light");
      }
          
      // Tussen de 2 unc inc logo's switchen
      if (logoImage.src.endsWith('uncinc-logo-RGB-white.svg')) {
        logoImage.src = 'assets/uncinc-logo-RGB-black.svg';
      } else {
        logoImage.src = 'assets/uncinc-logo-RGB-white.svg';
      }

      if (purposeDriven.src.endsWith('purpose-driven-clients.svg')) {
        purposeDriven.src = 'assets/purpose-driven-light.svg';
      } else {
        purposeDriven.src = 'assets/purpose-driven-clients.svg';
      }

      if (revenueDonated.src.endsWith('revenue-donated.svg')) {
        revenueDonated.src = 'assets/revenue-donated-light.svg';
      } else {
        revenueDonated.src = 'assets/revenue-donated.svg';
      }

      if (customerSurveys.src.endsWith('customer-surveys.svg')) {
        customerSurveys.src = 'assets/customer-surveys-light.svg';
      } else {
        customerSurveys.src = 'assets/customer-surveys.svg';
      }

      if (qualityGuaranteed.src.endsWith('quality-guaranteed.svg')) {
        qualityGuaranteed.src = 'assets/quality-guaranteed-light.svg';
      } else {
        qualityGuaranteed.src = 'assets/quality-guaranteed.svg';
      }

      if (secureInformation.src.endsWith('secure-information.svg')) {
        secureInformation.src = 'assets/secure-information-light.svg'; 
      } else {
        secureInformation.src = 'assets/secure-information.svg';
      }

      if (humanCentered.src.endsWith('human-centered.svg')) {
        humanCentered.src = 'assets/human-centered-light.svg';
      } else {
        humanCentered.src = 'assets/human-centered.svg';
      }

      if (education.src.endsWith('education.svg')) {
        education.src = 'assets/education-light.svg'; 
      } else {
        education.src = 'assets/education.svg';
      }
      
      if (happinessSurvey.src.endsWith('happiness-survey.svg')) {
        happinessSurvey.src = 'assets/happiness-survey-light.svg'; 
      } else {
        happinessSurvey.src = 'assets/happiness-survey.svg';
      }

      if (salarySystem.src.endsWith('salary-system.svg')) {
        salarySystem.src = 'assets/salary-system-light.svg';
      } else {
        salarySystem.src = 'assets/salary-system.svg';
      }

      if (buddySystem.src.endsWith('buddy-system.svg')) {
        buddySystem.src = 'assets/buddy-system-light.svg';
      } else {
        buddySystem.src = 'assets/buddy-system.svg';
      }

      if (volunteerWork.src.endsWith('volunteer-work.svg')) {
        volunteerWork.src = 'assets/volunteer-work-light.svg';
      } else {
        volunteerWork.src = 'assets/volunteer-work.svg';
      }

      if (transparency.src.endsWith('transparency.svg')) {
        transparency.src = 'assets/transparency-light.svg';
      } else {
        transparency.src = 'assets/transparency.svg';
      }

      if (organisationTeam.src.endsWith('organisation-team.svg')) {
        organisationTeam.src = 'assets/organisation-team-light.svg';
      } else {
        organisationTeam.src = 'assets/organisation-team.svg';
      }

      if (impactGuild.src.endsWith('impact-guild.svg')) {
        impactGuild.src = 'assets/impact-guild-light.svg';
      } else {
        impactGuild.src = 'assets/impact-guild.svg';
      }

      if (bcorpAssessment.src.endsWith('bcorp-assessment.svg')) {
        bcorpAssessment.src = 'assets/bcorp-assessment-light.svg';
      } else {
        bcorpAssessment.src = 'assets/bcorp-assessment.svg';
      }

      if (statusesUpdated.src.endsWith('statuses-updated.svg')) {
        statusesUpdated.src = 'assets/statuses-updated-light.svg';
      } else {
        statusesUpdated.src = 'assets/statuses-updated.svg';
      }

      if (co2Footprint.src.endsWith('co2-footprint.svg')) {
        co2Footprint.src = 'assets/co2-footprint-light.svg';
      } else {
        co2Footprint.src = 'assets/co2-footprint.svg';
      }

      if (localSuppliers.src.endsWith('local-suppliers.svg')) {
        localSuppliers.src = 'assets/local-suppliers-light.svg';
      } else {
        localSuppliers.src = 'assets/local-suppliers.svg';
      }

      if (sustainableTravel.src.endsWith('sustainable-travel.svg')) {
        sustainableTravel.src = 'assets/sustainable-travel-light.svg';
      } else {
        sustainableTravel.src = 'assets/sustainable-travel.svg';
      }

      if (eWaste.src.endsWith('e-waste.svg')) {
        eWaste.src = 'assets/e-waste-light.svg';
      } else {
        eWaste.src = 'assets/e-waste.svg';
      }

      if (ems.src.endsWith('purpose-driven-clients.svg')) {
        ems.src = 'assets/purpose-driven-light.svg';
      } else {
        ems.src = 'assets/purpose-driven-clients.svg';
      }
  
    });
  });
  
  


