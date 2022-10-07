//첫 화면 부드럽게 화면 넘어가는 애니메이션 
let container = document.getElementById("container")
setInterval(function time() {
    container.style.opacity = 0
    container.style.zIndex = 0

}, 1700)
let contents = document.getElementById("contents")
setInterval(function time1() {
    contents.style.opacity = 1

}, 2700)

// 게임 설명 팝업 
let popup = document.getElementById("pop")
let game_field = document.getElementById("game_field")
popup.addEventListener("click", function btn() {
    if (game_field.style.display == "block") {
        game_field.style.display = "none"
    } else {
        game_field.style.display = "block"
    }
})

let play = document.getElementById("play") //play버튼 
let i = document.getElementById("i") //플레이 버튼 왼쪽 아이콘 
let text = document.getElementById("text") // play 텍스트 적힌 span 태그 

let newI = document.getElementById("newI") //stop 아이콘 

let randomImage = document.getElementById("randomImage") //랜덤한 이미지가 들어갈  div 태그 

let randomNumber = Math.floor(Math.random() * 30) + 1;

//시간이 종료되거나 게임이 끝나면 나타나는 리플레이를 권유하는 팝업 창 
var timeOut_AfterReplay = document.getElementById("timeOut_AfterReplay")


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//play 클릭하면 발생하는 이벤트 
play.addEventListener("click", function () {

    let imgsIconBox = document.getElementById("imgsIconBox")
    //랜덤으로 이미지 
    randomImage.style.backgroundImage = "url(https://kimmsoll.github.io/whale-game-js/imgs/icons/" + randomNumber + ".png)"

    /* 상단 play버튼의 아이콘을 none으로 하고 innertext를 stop으로 변경 및 왼쪽 아이콘 변경하는 부분  */
    i.style.display = "none"
    newI.style.display = "block"
    text.replaceWith("STOP")

    //타이머 개발
    var count = 5;



    // timer 함수를 1초 후에 실행 5에서 0으로 줄어들음 
    var counter = setInterval(function timer1() {

        document.getElementById("time").innerHTML = "05" + ":00"

        count--
        document.getElementById("time").innerHTML = "0" + count + ":00";


        //시간이 종료되었을때 발생하는 이벤트 
        if (document.getElementById("time").innerText == '00:00') {
            console.log('시간 종료 !! 게임 끝!!');
            timeOut_AfterReplay.style.display = "block"
            imgsIconBox.remove()
        }
        if (count <= 0) {
            document.getElementById("time").innerHTML = "00" + ":00"
            //counter 함수 삭제 
            clearInterval(counter);
        }
    }, 1000);
    //랜덤한 이미지가 나옴
    for (let i = 1; i < 31; i++) {
        const image = new Image();
        image.src = "https://kimmsoll.github.io/whale-game-js/imgs/icons/" + i + ".png";
        imgsIconBox.appendChild(image);

        //이미지 클릭시 이벤트 
        image.addEventListener("click", function () {

            //랜덤 숫자값과 사용자가 선택한 이미지의 url숫자가 같은지 틀린지 확인 
            if ("https://kimmsoll.github.io/whale-game-js/imgs/icons/" + randomNumber + ".png" == image.src) {
                console.log(randomNumber + "random둘의 값이 같음 "); //console

                document.getElementById("time").innerText = '00:00'

                count = 0

                timeOut_AfterReplay.style.display = "none"
                document.getElementById("game_success").style.display = "block"
                imgsIconBox.style.display = "none"
            } else {
                console.log("다름 ");
            }
        })
    }


    game_field.style.display = "none"

})


/*========================================================= */

//점수 판 


let score = document.getElementById("score")
let backgroundBanner = document.getElementById("backgroundBanner")
score.addEventListener("click", function () {
    backgroundBanner.style.display = "block"
})
let closes = document.getElementById("close")
closes.addEventListener("click", function () {
    backgroundBanner.style.display = "none"
})
