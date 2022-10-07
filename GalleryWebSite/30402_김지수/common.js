let slideImg = document.getElementById("slideImg")
let lislide = document.getElementsByClassName("slide")



let small_box = document.getElementsByClassName("small_box")

var slide_in = 0;
setInterval(function () {
    if (slide_in < 2) {
        slide_in++;
    } else {
        slide_in = 0;
        $(".slide").animate({ top: "0" }, 500)
    }
    $(".slide").animate({ top: -384 * slide_in + "px" }, 500);
}, 3000)


var slide_in2 = 0;
setInterval(function () {
    if (slide_in2 < 2) {
        slide_in2++;
    } else {
        slide_in2 = 0;
        $("#slide_Gallary>ul").animate({ right: "0" }, 500)
    }
    $("#slide_Gallary>ul").animate({ right: 330 * slide_in2 + "px" }, 500);
}, 4000)

var slide_in3 = 0;
setInterval(function () {
    if (slide_in3 < 2) {
        slide_in3++;
    } else {
        slide_in3 = 0;
        $(".text_overflow>ul").animate({ right: "0" }, 500)
    }
    $(".text_overflow>ul").animate({ right: 330 * slide_in3 + "px" }, 500);
}, 4000)

let kor_container = document.getElementById("kor_container")
let li_click = document.querySelectorAll(".small_box > ul >li")

let big_img = document.getElementById("big_img")
let small_img = document.querySelectorAll(".small_box >ul img")

// const src = big_img[i].src
// // console.log(src)


//클릭한 값의 big_imgNum
for (let i = 0; i < li_click.length; i++) {


    li_click[i].addEventListener("click", () => {

        // let src = big_img[i].src
        // src = src.replace(/(.png|.jpg|.jpeg|.gif)$/, '')
        // let arr = src.split("/")
        // var big_imgNum = arr[7]

        let src2 = small_img[i].src
        let src_i = src2.replace(/(.png|.jpg|.jpeg|.gif)$/, '')
        let arr2 = src_i.split("/")
        var small_imgNum = arr2[7]
        var small_imgNum1 = small_imgNum.replace(/(_thumb)/, '')

        // console.log(i + "번째의 big_imgNum의 값은?" + big_imgNum)
        console.log(i + "번째의small_imgNum1의 값은?" + small_imgNum1)

        big_img.src = "https://www.k-artmarket.kr/images/2020/artworks/2022/" + small_imgNum1 + ".jpg"

        console.log(big_img.src)

        console.log(small_imgNum1)
        // scroll 이벤트


        if (small_imgNum1 == 415771) {
            art_Text1.style.opacity = 1
            art_Text2.style.opacity = 0
            art_Text3.style.opacity = 0
            art_Text4.style.opacity = 0
            art_Text5.style.opacity = 0
        } else if (small_imgNum1 == 397013) {
            art_Text1.style.opacity = 0
            art_Text2.style.opacity = 1
            art_Text3.style.opacity = 0
            art_Text4.style.opacity = 0
            art_Text5.style.opacity = 0
        } else if (small_imgNum1 == 406621) {
            art_Text1.style.opacity = 0
            art_Text2.style.opacity = 0
            art_Text3.style.opacity = 1
            art_Text4.style.opacity = 0
            art_Text5.style.opacity = 0
        } else if (small_imgNum1 == 413066) {
            art_Text1.style.opacity = 0
            art_Text2.style.opacity = 0
            art_Text3.style.opacity = 0
            art_Text4.style.opacity = 1
            art_Text5.style.opacity = 0
        } else if (small_imgNum1 == 403659) {
            art_Text1.style.opacity = 0
            art_Text2.style.opacity = 0
            art_Text3.style.opacity = 0
            art_Text4.style.opacity = 0
            art_Text5.style.opacity = 1
        }

    })
}
let banner_small = document.getElementById("banner_small")
let more_btn = document.getElementById("more_btn")
more_btn.addEventListener("click", () => {
    if (more_btn.innerText === 'open') {
        window.scrollBy(1200, 0);
        more_btn.innerText = 'back'
        banner_small.style.zIndex = 0
    } else {
        more_btn.innerText = 'open'
        window.scrollBy(-2000, 0);
        banner_small.style.zIndex = 900
    }


})

let close_btn = document.getElementById("close_btn")
let modal = document.getElementById("modal")
function close_b(){
    modal.style.opacity = 0
}

let imgLength = document.querySelectorAll(".list_box_img > img")
let in_descriptionImg = document.getElementById("in_descriptionImg")
for (let i = 0; i < imgLength.length; i++) {
    imgLength[i].addEventListener("click", () => {
        if (imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_177/leespider_1449294560889lWaBQ_JPEG/%BB%A1%B7%A1%C5%CD.JPG?type=w2") {
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_177/leespider_1449294560889lWaBQ_JPEG/%BB%A1%B7%A1%C5%CD.JPG?type=w2"

        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_284/leespider_1449294666131Pje3Y_PNG/%C8%B2%BC%D2_%C0%CC%C1%DF%BC%B7.png?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_284/leespider_1449294666131Pje3Y_PNG/%C8%B2%BC%D2_%C0%CC%C1%DF%BC%B7.png?type=w2"
 
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_195/leespider_1449295437178Fe0g4_JPEG/%C1%A4%BB%F3%C8%AD_%B9%AB%C1%A6_05-3-25.jpg?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_195/leespider_1449295437178Fe0g4_JPEG/%C1%A4%BB%F3%C8%AD_%B9%AB%C1%A6_05-3-25.jpg?type=w2"
 
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20160426_280/leespider_1461661643705wEF9v_JPEG/%C3%B5%B0%E6%C0%DA_%C1%A4%BF%F8_1.jpg?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20160426_280/leespider_1461661643705wEF9v_JPEG/%C3%B5%B0%E6%C0%DA_%C1%A4%BF%F8_1.jpg?type=w2"
 
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_115/leespider_1449295063216HPBXv_JPEG/%B9%DA%BC%AD%BA%B8_65-75.JPG?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_115/leespider_1449295063216HPBXv_JPEG/%B9%DA%BC%AD%BA%B8_65-75.JPG?type=w2"
 
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_104/leespider_14493051728695Oi4R_JPEG/%C6%E6%BD%BD_1.jpg?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_104/leespider_14493051728695Oi4R_JPEG/%C6%E6%BD%BD_1.jpg?type=w2"
       
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_244/leespider_1449305711499uHFce_JPEG/%BA%F3%BC%BE%C6%AE_%B9%DD_%B0%ED%C8%E5_%BA%ED%B7%E7.jpg?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_244/leespider_1449305711499uHFce_JPEG/%BA%F3%BC%BE%C6%AE_%B9%DD_%B0%ED%C8%E5_%BA%ED%B7%E7.jpg?type=w2"
       
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_274/leespider_1449302286310lgy1X_JPEG/NAVER_9302227484.JPG?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_274/leespider_1449302286310lgy1X_JPEG/NAVER_9302227484.JPG?type=w2"
       
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_200/leespider_1449306555963nIS5O_JPEG/%B3%F3%BF%F8.jpg?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_200/leespider_1449306555963nIS5O_JPEG/%B3%F3%BF%F8.jpg?type=w2"
       
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_217/leespider_1449295563157KRfdb_JPEG/%C1%F8%C1%F8%B9%A6.jpg?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_217/leespider_1449295563157KRfdb_JPEG/%C1%F8%C1%F8%B9%A6.jpg?type=w2"
       
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20151205_68/leespider_1449305597470A1wnY_JPEG/IMG_1160.JPG?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20151205_68/leespider_1449305597470A1wnY_JPEG/IMG_1160.JPG?type=w2"
      
        }else if(imgLength[i].src == "https://mblogthumb-phinf.pstatic.net/20160123_250/leespider_1453526820333VrHyA_PNG/%C0%CC%BF%EC%C8%AF_%C3%D6%B0%ED%B0%A1.png?type=w2"){
            in_descriptionImg.src = "https://mblogthumb-phinf.pstatic.net/20160123_250/leespider_1453526820333VrHyA_PNG/%C0%CC%BF%EC%C8%AF_%C3%D6%B0%ED%B0%A1.png?type=w2"
        }
    })

}

