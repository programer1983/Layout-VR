const burgerButton = document.querySelector(".header__burger")
const navList = document.querySelector(".header__list")
const html = document.querySelector("html")

burgerButton.addEventListener("click", open)

function open(){
  navList.classList.toggle("active-menu")
  burgerButton.classList.toggle('active')
  html.classList.toggle('unscroll')
}



/* =======================================================================================  */

const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})

/* ========================================================================================= */
navList.querySelectorAll(".header__link").forEach(link => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("active")
    navList.classList.remove("active-menu")
    html.classList.remove("unscroll")
  })
})

/* ========================================================================================= */


const scrollRevealOptins = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".top__title", {
  ...scrollRevealOptins,
})

ScrollReveal().reveal(".top__text", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".top__buttons", {
  ...scrollRevealOptins,
  delay: 1000,
})


ScrollReveal().reveal(".top__iamage", {
  ...scrollRevealOptins,
  origin: "right",
})

ScrollReveal().reveal(".projects__title", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".projects__text", {
  ...scrollRevealOptins,
  delay: 1000,
})


ScrollReveal().reveal(".projects__details-item", {
  ...scrollRevealOptins,
  interval: 500,
  delay: 1500,
})

ScrollReveal().reveal(".projects__image", {
  ...scrollRevealOptins,
  origin: "left",
})

ScrollReveal().reveal(".commynity__imag", {
  ...scrollRevealOptins,
  origin: "right",
})

ScrollReveal().reveal(".commynity__title", {
  ...scrollRevealOptins,
  delay: 500,
})

ScrollReveal().reveal(".commynity__text", {
  ...scrollRevealOptins,
  delay: 1000,
})
ScrollReveal().reveal(".commynity__item", {
  ...scrollRevealOptins,
  delay: 1500,
  interval: 500,
})


/* ========================================================================================  */


const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
