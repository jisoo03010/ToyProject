/* 검색 아이콘 클릭시 실행되는 이벤트 */
let searchBox = document.getElementById("search")
let search_input = document.getElementById("search_input")

searchBox.addEventListener("click", function searchEvent() {
    searchBox.style.width = 178 + "px"
    search_input.style.display = "block"
})

let drink_orange = document.getElementById("orange")
let drink_lavender = document.getElementById("lavender")
let drink_dolce = document.getElementById("dolce")

setTimeout(function orange() {
    drink_orange.style.opacity = 1
}, 600);

setTimeout(function orange() {
    drink_lavender.style.opacity = 1
}, 1200);

setTimeout(function orange() {
    drink_dolce.style.opacity = 1
}, 1800);

let nicaragua = document.getElementById("nicaragua")
let nicaragua_text = document.getElementById("nicaragua_text")
let nicaragua_btn = document.getElementById("nicaragua_btn")


addEventListener("scroll", function () {
    var sc = window.scrollY || document.documentElement.scrollTop
    console.log(sc);

    let hawaii_kau = document.getElementById("hawaii_kau")
    let prckYourFacorite_text = document.getElementById("prckYourFacorite_text")
    let reserve_visual_img = document.getElementById("reserve_visual_img")
    let pieImg = document.getElementById("pieImg")

    let store_txt01 = document.getElementById("store_txt01")
    let store_txt02 = document.getElementById("store_txt02")
    let store_btn = document.getElementById("store_btn")
    let storeimg = document.getElementById("storeimg")
    if (sc >= 2700) {
        pieImg.style.opacity = 1
        store_txt01.style.right = 3 + "px"
        store_txt02.style.right = 20 + "px"
        store_btn.style.right = 266 + "px"

        storeimg.style.opacity = 1
    }
    else if (sc >= 2231) {
        reserve_visual_img.style.opacity = 1
    }
    else if (sc >= 1800) {
        prckYourFacorite_text.style.left = 15 + "vw"

    }
    else if (sc >= 1200) {
        hawaii_kau.style.opacity = 1
    } else if (sc = 400) {
        nicaragua.style.left = 0 + "vw"
        nicaragua.style.opacity = 1

        nicaragua_text.style.right = -19 + "vw"
        nicaragua_text.style.opacity = 1


    }


})


// 현재 스크롤의 위치 값을 반환함




