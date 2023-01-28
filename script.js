const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const centerBtn = document.querySelector(".btop");

    // the toggle navigation
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
          centerBtn.style.visibility = "visible";
        } else {
          centerBtn.style.visibility = "hidden";
          link.style.animation = `navLinksFade 0.5s ease forwards ${
            index / 7 + 1.5
          }s`;
        }
      });
      // Burger animation
      burger.classList.toggle("toggle");
    });
  };

  navSlide();
  




  
  
  