
let repalybutton = document.getElementById("repalybutton")

//다시 게임 실행하는 버튼 이벤트 
repalybutton.addEventListener("click", function () {
    timeOut_AfterReplay.style.display = "none"


    document.getElementById("time").innerText = '05:00'

    let afterReplayNumver = Math.floor(Math.random() * 30) + 1;
    randomImage.style.backgroundImage = "url(https://kimmsoll.github.io/whale-game-js/imgs/icons/" + afterReplayNumver + ".png)"


    //새로운 랜덤한 이미지를 넣을 이미지 아이콘 박스 2 생성 하는 js 코드 
    let gamepage = document.getElementById("gamepage")
    let child = document.createElement('div')
    let divCreate = gamepage.appendChild(child)
    divCreate.id = "imgsIconBox2"
    let imgsIconBox2 = document.getElementById("imgsIconBox2")



    //타이머 개발2
    var count2 = 5;

    // timer 함수를 1초 후에 실행 5에서 0으로 줄어들음
    var counter2 = setInterval(function timer2() {


        count2--;
        document.getElementById("time").innerHTML = "0" + count2 + ":00";

        //시간이 종료되었을때 발생하는 이벤트 
        if (document.getElementById("time").innerText == '00:00') {
            console.log('시간 종료 !! 게임 끝!!');
            timeOut_AfterReplay.style.display = "block"
            imgsIconBox2.remove()
        }

        if (count2 <= 0) {

            clearInterval(counter2);
            document.getElementById("time").innerHTML = "00" + ":00"

        }

    }, 1000);


    //랜덤한 이미지가 나옴
    for (let j = 1; j < 31; j++) {
        const image2 = new Image();
        image2.src = "https://kimmsoll.github.io/whale-game-js/imgs/icons/" + j + ".png";
        imgsIconBox2.appendChild(image2);

        //사용자가 클릭한 이미지의 숫자와 랜덤으로 나온 값이 맞는가를 확인
        image2.addEventListener("click", function () {
            //랜덤 숫자값과 사용자가 선택한 이미지의 url숫자가 같은지 틀린지 확인 
            if ("https://kimmsoll.github.io/whale-game-js/imgs/icons/" + afterReplayNumver + ".png" == image2.src) {
                console.log(afterReplayNumver + "둘의 값이 같음 afterReplayNumver ");

                document.getElementById("time").innerText = '00:00'

                count2 = 0

                timeOut_AfterReplay.style.opacity = 0
                document.getElementById("game_success").style.display = "block"
                imgsIconBox2.style.display = "none"
            } else {
                console.log("다름 ");
            }
        })
    }

})