

var coffee = document.querySelector("#coffee")
var cornBeardTea = document.querySelector("#cornBeardTea")
var water = document.querySelector("#water")


var ten = document.querySelector("#ten")
var five = document.querySelector("#five")
var one = document.querySelector("#one")
console.log(one.name)

var priceAll = document.querySelector("#priceAll")
var price = document.querySelector("#price")

var menus = document.querySelectorAll(".menu input")
function menu() {
    if (price.innerHTML >= 1000) { //현재 돈  >  1000
        coffee.style.color = "blue"
        cornBeardTea.style.color = "blue"
        water.style.color = "blue"
    } else if (price.innerHTML >= 700) {//현재 돈  >  700
        coffee.style.color = "blue"
        water.style.color = "blue"
    } else if (price.innerHTML >= 500) {//현재 돈  >  500
        water.style.color = "blue"
    }
}


//돈 충전하기

var coin = 0;
function moneyTen() {
    coin += 1000;
    alert("1000원 넣음")
    price.innerHTML = coin
}
function moneyOne() {
    coin += 100;
    alert("100원 넣음")
    price.innerHTML = coin
}
function moneyFive() {
    coin += 500;
    alert("500원 넣음")
    price.innerHTML = coin
}


//메뉴 구매 
var coffeeSpanding = 700;
function moneyTenSpending() {
    if (m == 0) {
        alert("돈을 입금해주세요.")
    } else if (m != 0) {
        var m = price.innerHTML - coffeeSpanding
        price.innerHTML = m
        alert("커피 구매 완료")
    }


}

var corneSpanding = 1000;
function moneyOneSpending() {
    var m = price.innerHTML - corneSpanding
    alert("옥수수수염차 구매 완료")
    price.innerHTML = m
}

var warterSpanding = 500;
function moneyFiveSpending() {
    var m = price.innerHTML - warterSpanding
    alert("물 구입 완료")
    price.innerHTML = m
}

function menu2() {
    if (price.innerHTML >= 1000) {
        cornBeardTea.style.color = "blue"
        coffee.style.color = "blue"
        water.style.color = "blue"
    } else if (price.innerHTML >= 700) {
        cornBeardTea.style.color = "red"
        coffee.style.color = "blue"
        water.style.color = "blue"
    } else if (price.innerHTML >= 500) {
        water.style.color = "blue"
        cornBeardTea.style.color = "red"
        coffee.style.color = "red"
    } else {
        water.style.color = "red"
        cornBeardTea.style.color = "red"
        coffee.style.color = "red"

    }
}



