function alertbutton() {
    if (window.confirm("Чтобы начать, напиши мне в телеграмме")) {
        alert("Нажми ОК чтобы написать мне")
        window.location = "https://t.me/DjTimon"

    } else {
        alert("Ну и не нужно...")
    }
}

let planting = document.querySelectorAll(".planting")
let garden = document.querySelectorAll(".garden")
let lawn = document.querySelectorAll(".lawn")
let planting_button = document.querySelector(".planting_button")
let garden_button = document.querySelector(".garden_button")
let lawn_button = document.querySelector(".lawn_button")
let isDisabled = true;


garden_button.addEventListener("click", (e) => {

    e.target.classList.toggle("button_s3_when_onclick")
    planting.forEach((elem) => {
        elem.classList.toggle("blur");
    });
    lawn.forEach((elem) => {
        elem.classList.toggle("blur");
    });
    if (isDisabled) {
        search("garden", isDisabled)
        isDisabled = false
    } else {
        search("garden", isDisabled)
        isDisabled = true;
    }

})

planting_button.addEventListener("click", (e) => {

    e.target.classList.toggle("button_s3_when_onclick")
    garden.forEach((elem) => {
        elem.classList.toggle("blur")
    });
    lawn.forEach((elem) => {
        elem.classList.toggle("blur");
    });

    if (isDisabled) {
        search("planting", isDisabled)
        isDisabled = false
    } else {
        search("planting", isDisabled)
        isDisabled = true;
    }



})
lawn_button.addEventListener("click", (e) => {


    e.target.classList.toggle("button_s3_when_onclick")
    planting.forEach((elem) => {
        elem.classList.toggle("blur");
    });
    garden.forEach((elem) => {
        elem.classList.toggle("blur");
    });
    if (isDisabled) {
        search("lawn", isDisabled)
        isDisabled = false
    } else {
        search("lawn", isDisabled)
        isDisabled = true;
    }


})

function search(arg, isDisabled) {
    if (arg === "lawn") {
        planting_button.disabled = isDisabled
        garden_button.disabled = isDisabled
    } else if (arg === "garden") {
        planting_button.disabled = isDisabled
        lawn_button.disabled = isDisabled
    } else if (arg === "planting") {
        garden_button.disabled = isDisabled
        lawn_button.disabled = isDisabled
    }

}

let button_selector = document.querySelector(".button_selector")

let basics_btn_arrow = document.querySelector(".basics_btn_arrow")
let standard_btn_arrow = document.querySelector(".standard_btn_arrow")
let procare_btn_arrow = document.querySelector(".procare_btn_arrow") 

let basics_btn = document.querySelector(".basics_btn")
let standard_btn = document.querySelector(".standard_btn")
let procare_btn = document.querySelector(".procare_btn")
var svg = document.getElementsByTagName("svg")[0]
var svg1 = document.getElementsByTagName("svg")[1]
var svg2 = document.getElementsByTagName("svg")[2]

let text_in_btn_basics = document.querySelector(".text_in_btn_basics")
let text_in_btn_standard = document.querySelector(".text_in_btn_standard")
let text_in_btn_procare = document.querySelector(".text_in_btn_procare")


basics_btn_arrow.addEventListener("click", (e) => {
    button_selector.classList.toggle("button_selector_onclick")
    basics_btn.classList.toggle("but_sel_s4_onclick");
    basics_btn_arrow.classList.toggle("btn_arrow_onclick")
    text_in_btn_basics.classList.toggle("block")
    svg.classList.toggle("svg_onclick")
    if (svg.getAttribute('viewBox') === "4 9 24 24") {
        svg.setAttribute("viewBox", "-4 -6 24 24")
    } else {
        svg.setAttribute("viewBox", "4 9 24 24")
    }
    standard_btn.classList.toggle('none')
    procare_btn.classList.toggle('none')
})

standard_btn_arrow.addEventListener("click", (e) => {
    button_selector.classList.toggle("button_selector_onclick")
    standard_btn.classList.toggle("but_sel_s4_onclick")
    standard_btn_arrow.classList.toggle("btn_arrow_onclick")
    svg1.classList.toggle("svg_onclick")
    text_in_btn_standard.classList.toggle("block")
    if (svg1.getAttribute('viewBox') === "4 9 24 24") {
        svg1.setAttribute("viewBox", "-4 -6 24 24")
    } else {
        svg1.setAttribute("viewBox", "4 9 24 24")
    }
    basics_btn.classList.toggle('none')
    procare_btn.classList.toggle('none')

})

procare_btn_arrow.addEventListener("click" , (e) => {
    button_selector.classList.toggle("button_selector_onclick")
    procare_btn.classList.toggle("but_sel_s4_onclick")
    procare_btn_arrow.classList.toggle("btn_arrow_onclick")
    svg2.classList.toggle("svg_onclick")
    text_in_btn_procare.classList.toggle("block")
    if (svg2.getAttribute('viewBox') === "4 9 24 24") {
        svg2.setAttribute("viewBox", "-4 -6 24 24")
    } else {
        svg2.setAttribute("viewBox", "4 9 24 24")
    }
    basics_btn.classList.toggle('none')
    standard_btn.classList.toggle('none')


})

let btn_in_btn = document.querySelector(".btn_in_btn")

btn_in_btn.addEventListener("click" , (e) => {
    if (window.confirm("Чтобы записать, напиши мне в телеграмме")) {
        alert("Нажми ОК чтобы написать мне")
        window.location = "https://t.me/DjTimon"

    } else {
        alert("Ну и не нужно...")
    }
})