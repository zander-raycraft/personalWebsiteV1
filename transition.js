//Making pre-loader
window.onload = function() {
  var loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
}

//Smooth Scrolling for the hobbies id
document.addEventListener('DOMContentLoaded', function() {
    const hobbiesLink = document.querySelector('#index-hobbies');
  
    hobbiesLink.addEventListener('click', () => {
      const hobbiesSection = document.querySelector('#hobbiesLocation');
      const container = document.querySelector('.container');
  
      container.scrollTo({
        top: hobbiesSection.offsetTop - container.offsetTop,
        behavior: 'smooth'
      });
    });
});
//Smooth scrolling for the about me id
document.addEventListener('DOMContentLoaded', function() {
    const hobbiesLink = document.querySelector('#index-about');
  
    hobbiesLink.addEventListener('click', () => {
      const hobbiesSection = document.querySelector('#aboutLocation');
      const container = document.querySelector('.container');
  
      container.scrollTo({
        top: hobbiesSection.offsetTop - container.offsetTop,
        behavior: 'smooth'
      });
    });
});
//Smooth scrolling for the projects id
document.addEventListener('DOMContentLoaded', function() {
    const hobbiesLink = document.querySelector('index-projects');
  
    hobbiesLink.addEventListener('click', () => {
      const hobbiesSection = document.querySelector('#projectLocation');
      const container = document.querySelector('.container');
  
      container.scrollTo({
        top: hobbiesSection.offsetTop - container.offsetTop,
        behavior: 'smooth'
      });
    });
});
//smooth scrolling for the contact id
document.addEventListener('DOMContentLoaded', function() {
    const hobbiesLink = document.querySelector('index-contact');
  
    hobbiesLink.addEventListener('click', () => {
      const hobbiesSection = document.querySelector('#contactLocation');
      const container = document.querySelector('.container');
  
      container.scrollTo({
        top: hobbiesSection.offsetTop - container.offsetTop,
        behavior: 'smooth'
      });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const typewriter = document.querySelector(".student-text");
    const textToAnimate = typewriter.textContent;
    const delay = 400;
  
    let animate = true;
    animateText();
  
    function animateText() {
      if (!animate) {
        return;
      }
  
      typewriter.textContent = "";
      animateCharacter(0, true);
    }
  
    function animateCharacter(index, isTyping) {
      if (!animate) {
        return;
      }
  
      if (isTyping) {
        typewriter.textContent += textToAnimate.charAt(index);
        index++;
  
        if (index < textToAnimate.length) {
          setTimeout(() => {
            animateCharacter(index, true);
          }, delay);
        } else {
          setTimeout(() => {
            animateCharacter(index - 1, false);
          }, delay * 3);
        }
      } else {
        typewriter.textContent = typewriter.textContent.slice(0, -1);
  
        if (typewriter.textContent === "") {
          setTimeout(() => {
            animateCharacter(0, true);
          }, delay);
        } else {
          setTimeout(() => {
            animateCharacter(index, false);
          }, delay / 2);
        }
      }
    }
  });