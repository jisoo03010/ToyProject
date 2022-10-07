let tb = document.querySelector('#select > option')

/*
tb.addEventListener("click", function dd() {
    if (tb.value == '스파이더맨-노 웨이 홈') {
        console.log(1)
    } else if (tb.value == '스파이더맨-노 웨이 홈 (10,000)') {
        console.log(2)
    }
})
*/
function handleOnChange(e) {

    var money = 0;
    var money1 = 0;
    var money2 = 0;
    var money3 = 0;
    // 선택된 데이터 가져오기
    const value = e.value;
    console.log(value)
    let phoster1 = document.getElementById("phoster1")
    let phoster2 = document.getElementById("phoster2")
    let phoster3 = document.getElementById("phoster3")
    let phoster4 = document.getElementById("phoster4")
    if (value == "스파이더맨-노 웨이 홈") {
        phoster1.style.display = "block"

        phoster2.style.display = "none"
        phoster3.style.display = "none"
        phoster4.style.display = "none"
    } else if (value == "특송") {
        phoster2.style.display = "block"

        phoster1.style.display = "none"
        phoster3.style.display = "none"
        phoster4.style.display = "none"
    } else if (value == "씽 2게더") {
        phoster3.style.display = "block"

        phoster1.style.display = "none"
        phoster2.style.display = "none"
        phoster4.style.display = "none"
    } else if (value == "웹스트 사이드 스토리") {
        phoster4.style.display = "block"

        phoster1.style.display = "none"
        phoster2.style.display = "none"
        phoster3.style.display = "none"
    }

    let priceNum = document.getElementById("priceNum")
    priceNum.innerHTML = 0
    seatNum.innerHTML = 0
    for (let j = 0; j < seatboxPick.length; j++) {
        seatboxPick[j].addEventListener("click", function put() {
            if (value == '스파이더맨-노 웨이 홈') {
                money += 10000
                priceNum.innerHTML = money
            } else if (value == '특송') {

                money1 += 10000
                priceNum.innerHTML = money1

            } else if (value == '씽 2게더') {

                money2 += 12000
                priceNum.innerHTML = money2
            } else if (value == '웹스트 사이드 스토리') {

                money3 += 8000
                priceNum.innerHTML = money3
            }

        })

        seatboxPick[j].setAttribute("style", "background-color: #f6cd3d;")
    }


}

let seatboxPick = document.getElementsByClassName("seatboxPick")
let seatNum = document.getElementById("seatNum")

for (let i = 0; i < seatboxPick.length; i++) {

    seatboxPick[i].addEventListener("click", function put() {
        seatboxPick[i].setAttribute("style", "background-color: #bf281f;")

        seatNum.innerHTML++


    })

}

let movieBooking = document.getElementById("movieBooking")

movieBooking.addEventListener("click", function () {
    if (seatNum.innerHTML == 0) {
        alert("좌석을 선택해주세요")
    } else {
        alert(seatNum.innerHTML + "좌석이므로 총 ￦" + priceNum.innerHTML + "예매 성공!!")

    }
})