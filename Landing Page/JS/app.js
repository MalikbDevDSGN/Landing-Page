let sections = document.getElementsByClassName("sections");
let navigation = document.getElementById("navigation");
let navBar = document.getElementById("navigationTabs");
let sticky = navBar.offsetTop;



// This function dynamically creates the Navigation
  function createNav(){
        for(let i = 1; i <= sections.length; i++){
            let navigationLinks = document.createElement("li");
            let navLink = document.createElement("a");
            navLink.textContent = "Section " + [i];
            navigationLinks.appendChild(navLink);
            navigation.appendChild(navigationLinks);
// Scroll into view section
        navLink.addEventListener("click", (event) => {
         const section = document.querySelector(`[data-section = "${i}"]`);
         section.scrollIntoView({behavior:"smooth"});

         
        });
        
    }
    
}

//Scroll to section 
function makeActive() {
  window.addEventListener("scroll", () =>{
      for (const section of sections) {
      const box = section.getBoundingClientRect();
      const navLi = document.querySelector("li");
      const naviListItem = document.querySelectorAll('#navigation li');
      
      const isInViewport = box.top >= 250 && box.top < window.innerHeight;
    
      // console.log(sections[0].getBoundingClientRect(),isInViewport,"I am section 1");
      console.log("navLi outside of if", navLi);
      if (isInViewport) {
        // Apply active state on the current section and the corresponding Nav link.
        section.classList.add("active");
        
        
        
        naviListItem.forEach(function(navLi)
        {
          navLi.classList.add("bg-red");
          console.log(navLi);
          
        });
      } else {
        // Remove active state from other section and corresponding Nav link.
        section.classList.remove("active");
        navLi.classList.remove("bg-red");
      }
    }
    
  });
}

createNav();
makeActive();


// Sticky Nav

window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}







// if (box.top <= 323.5 && box.bottom >= 330.5) {
//   // Apply active state on the current section and the corresponding Nav link.
//   section.classList.add("active");
//   navLi.classList.add("bg-red");
//   console.log(section.getBoundingClientRect())
// } else {
//   // Remove active state from other section and corresponding Nav link.
//   section.classList.remove("active");
//   navLi.classList.remove("bg-red");
// }