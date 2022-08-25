# Landing Page
<!-- Author -->
##### Author Name:Malik Burton 
##### Web Page: Landing Page 
##### Technologies: HTML,CSS,Javascript

<!-- Description  -->
Description: Landing page to demonstrate javascript actions and events. Page has dynamic navigation. Page also scroll when navigation is clicked. When user scrolls down page once sections is close to top border is places on section.

**Structure of Site:**

<!-- Index html -->

Dymanic Navigation applied with Javascript



    function createNav(){
    for(let i = 1; i <= sections.length; i++){
        let navigationLinks = document.createElement("li");
        let navLink = document.createElement("a");
        navLink.textContent = "Section " + [i];
        navigationLinks.appendChild(navLink);
        navigation.appendChild(navigationLinks);
    // Scroll into view section
        navLink.addEventListener("click", () => {
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
      sections.className = " ";
      
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 323.5 && box.bottom >= 330.5) {
        // Apply active state on the current section and the corresponding Nav link.
        section.classList.add("active");
        // sections[0].classList.add(`bg-red`);
        
      } else {
        // Remove active state from other section and corresponding Nav link.
        section.classList.remove("active");
        // sections[0].classList.remove(`bg-red`);
      }
    }
    
    });
    }

<!-- HTML Body -->
## Section

Random text 