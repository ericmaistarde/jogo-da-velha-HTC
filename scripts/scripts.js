const $field0 = document.querySelector('.field0')
const $field1 = document.querySelector('.field1')
const $field2 = document.querySelector('.field2')
const $field3 = document.querySelector('.field3')
const $field4 = document.querySelector('.field4')
const $field5 = document.querySelector('.field5')
const $field6 = document.querySelector('.field6')
const $field7 = document.querySelector('.field7')
const $field8 = document.querySelector('.field8')

const $pointsPlayer1 = document.querySelector(".points-player-1")
const $pointsPlayer2 = document.querySelector(".points-player-2")

const $buttonStarter = document.querySelector(".button-starter")
const $buttonReset = document.querySelector(".button-reset")

var $fieldName1 = document.querySelector('.field-name1')
var $fieldName2 = document.querySelector('.field-name2')


const horizontal1 = [$field0, $field1, $field2]
const horizontal2 = [$field3, $field4, $field5]
const horizontal3 = [$field6, $field7, $field8]

const vertical1 = [$field0, $field3, $field6]
const vertical2 = [$field1, $field4, $field7]
const vertical3 = [$field2, $field5, $field8]

const diagonal1 = [$field2, $field4, $field6]
const diagonal2 = [$field0, $field4, $field8]

const linesVerify = [horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3, diagonal1, diagonal2]

let startGame = false

let winner = ''
// let player1name = $fieldName1.value//valor do input player 1
// let player2name = $fieldName2.value//valor do input player 2

let movePlayer = "X"//valor que vai aparecer no field

let pointsP1 = 0
let pointsP2 = 0

function variableMoves() {
    if (movePlayer == "X") {
        movePlayer = "O"
    } else {
        movePlayer = "X"
    }
}

function movePrint($field) {
    $field.textContent = movePlayer
}

function verifyWinnerHorizontal() {
    for (const horizontal of linesVerify) {
        if (horizontal[0].textContent != "" && horizontal[0].textContent == horizontal[1].textContent && horizontal[1].textContent == horizontal[2].textContent) {
            winner = movePlayer
            addPointsP1()
            addPointsP2()
            setTimeout(function () {
                resetFields()
            }, 100)
        }
    }
}

function verifyWinnerVertical() {
    for (const vertical of linesVerify) {
        if (vertical[0].textContent != "" && vertical[0].textContent == vertical[1].textContent && vertical[1].textContent == vertical[2].textContent) {
            winner = movePlayer
            addPointsP1()
            addPointsP2()
            setTimeout(function () {
                resetFields()
            }, 100)
            // resetFields()
        }
    }
}

function verifyWinnerDiagonal() {
    for (const diagonal of linesVerify) {
        if (diagonal[0].textContent != "" && diagonal[0].textContent == diagonal[1].textContent && diagonal[1].textContent == diagonal[2].textContent) {
            winner = movePlayer
            addPointsP1()
            addPointsP2()
            setTimeout(function () {
                resetFields()
            }, 100)
            // resetFields()
        }
    }
}

function startMessage() {
    $buttonStarter.textContent = "o jogo já começou"
    setTimeout(function () {
        $buttonStarter.textContent = "partida em andamento..."
    }, 3000)
}

// function reconhecervencedor() { //fiz essa funçao tentando fazer ela reconhecer se X ou O ganhou e transformar o winner em 1 ou 2 para colocar no add poinbts
//     if (winner == "X") {
//         winner = 1
//     } else if (winner == "O") {
//         winner = 2
//     } else if(winner != "O" && "X"){
//         winner = 0
//     }
// }

function addPointsP1() {
    if (winner === "X") {
        $pointsPlayer1.textContent = pointsP1 += 1
    }
}

function addPointsP2() {
    if (winner === "O") {
        $pointsPlayer2.textContent = pointsP2 += 1
    }
}
function resetHistoryRight() {//função que reseta o historico da direia

}

function resetScoreboard() {//função que reseta o scoreboard

}

function resetFields() {//função que reseta o battlefield central
    $field0.textContent = ""
    $field1.textContent = ""
    $field2.textContent = ""
    $field3.textContent = ""
    $field4.textContent = ""
    $field5.textContent = ""
    $field6.textContent = ""
    $field7.textContent = ""
    $field8.textContent = ""
}

function resetScenarys() {//função que reseta os cenarios a esquerda

}

function reset() {//função que reseta tudo
    resetFields()
}


$buttonReset.addEventListener("click", () => {//este botao é para resetar tudo ao ser clicado
    reset()
})

$buttonStarter.addEventListener("click", () => {//ao clicar o valor fica true dando inicio ao jgo
    startGame = true
    startMessage()
})

$field0.addEventListener("click", () => {
    if (startGame == false) return
    if ($field0.textContent != "") return
    movePrint($field0)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()

    console.log(reconhecervencedor())
})
$field1.addEventListener("click", () => {
    if (startGame == false) return
    if ($field1.textContent != "") return
    movePrint($field1)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field2.addEventListener("click", () => {
    if (startGame == false) return
    if ($field2.textContent != "") return
    movePrint($field2)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field3.addEventListener("click", () => {
    if (startGame == false) return
    if ($field3.textContent != "") return
    movePrint($field3)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field4.addEventListener("click", () => {
    if (startGame == false) return
    if ($field4.textContent != "") return
    movePrint($field4)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field5.addEventListener("click", () => {
    if (startGame == false) return
    if ($field5.textContent != "") return
    movePrint($field5)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field6.addEventListener("click", () => {
    if (startGame == false) return
    if ($field6.textContent != "") return
    movePrint($field6)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field7.addEventListener("click", () => {
    if (startGame == false) return
    if ($field7.textContent != "") return
    movePrint($field7)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
$field8.addEventListener("click", () => {
    if (startGame == false) return
    if ($field8.textContent != "") return
    movePrint($field8)
    verifyWinnerHorizontal()
    verifyWinnerVertical()
    verifyWinnerDiagonal()
    reconhecervencedor()
    variableMoves()
})
