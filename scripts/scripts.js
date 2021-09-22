const $field0 = document.querySelector('.field0')
const $field1 = document.querySelector('.field1')
const $field2 = document.querySelector('.field2')
const $field3 = document.querySelector('.field3')
const $field4 = document.querySelector('.field4')
const $field5 = document.querySelector('.field5')
const $field6 = document.querySelector('.field6')
const $field7 = document.querySelector('.field7')
const $field8 = document.querySelector('.field8')

const $fieldItem = document.querySelectorAll(".field")

const $fieldMini = document.querySelectorAll(".field--mini")

const $fieldMini0 = document.querySelector(".minifielfd1")
const $fieldMini1 = document.querySelector(".minifielfd2")
const $fieldMini2 = document.querySelector(".minifielfd3")
const $fieldMini3 = document.querySelector(".minifielfd4")
const $fieldMini4 = document.querySelector(".minifielfd5")
const $fieldMini5 = document.querySelector(".minifielfd6")
const $fieldMini6 = document.querySelector(".minifielfd7")
const $fieldMini7 = document.querySelector(".minifielfd8")
const $fieldMini8 = document.querySelector(".minifielfd9")

const $pointsPlayer1 = document.querySelector(".points-player-1")
const $pointsPlayer2 = document.querySelector(".points-player-2")

const $historyWrapper = document.querySelector(".history-wrapper")
const $historyWrapperRight = document.querySelector(".history-wrapper-right")

const $buttonStarter = document.querySelector(".button-starter")
const $buttonReset = document.querySelector(".button-reset")
const $balls = document.querySelectorAll(".ball")
const $md3 = document.querySelector(".md3")
const $md5 = document.querySelector(".md5")

let $fieldName1 = document.querySelector('.field-name1')
let $fieldName2 = document.querySelector('.field-name2')

let $winnerRound = document.querySelector(".winner-round")

const horizontal1 = [$field0, $field1, $field2]
const horizontal2 = [$field3, $field4, $field5]
const horizontal3 = [$field6, $field7, $field8]

const vertical1 = [$field0, $field3, $field6]
const vertical2 = [$field1, $field4, $field7]
const vertical3 = [$field2, $field5, $field8]

const diagonal1 = [$field2, $field4, $field6]
const diagonal2 = [$field0, $field4, $field8]

const linesVerify = [horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3, diagonal1, diagonal2]

const fieldsPlayed = [
    "primeiro quadrado",
    "segundo quadrado",
    "terceiro quadrado",
    "quarto quadrado",
    "quinto quadrado",
    "sexto quadrado",
    "sétimo quadrado",
    "oitavo quadrado",
    "nono quadrado",
]

let startGame = false

let winner = ''

let movePlayer = "X"//valor que vai aparecer no field

let pointsP1 = 0
let pointsP2 = 0

function printWinnerPlayer() {
    if (winner === "X") {
        $winnerRound.textContent = $fieldName1.value + " ganhou"
        setTimeout(function () {
            $winnerRound.textContent = ""
        }, 5000)
    } else if (winner === "O") {
        $winnerRound.textContent = $fieldName2.value + " ganhou"
        setTimeout(function () {
            $winnerRound.textContent = ""
        }, 5000)
    }
}

function variableMoves() {
    if (movePlayer == "X") {
        movePlayer = "O"
    } else {
        movePlayer = "X"
    }
}

function verifyWinnerHorizontal() {
    for (const lines of linesVerify) {
        if (lines[0].textContent && lines[0].textContent == lines[1].textContent && lines[1].textContent == lines[2].textContent) {
            winner = movePlayer
            addPoints()
            setTimeout(function () {
                resetFields()
            }, 1000)
        }
    }

    const isFilled = checkBoard()

    if (!winner && isFilled) {
        winner = 'draw'
        if (winner === "draw") {
            $winnerRound.textContent = "empatou"
        }
    }
}

function getPLayerName(movePlayer) {
    const valuePlayer1 = $fieldName1.value
    const valuePlayer2 = $fieldName2.value

    if (movePlayer === "X") {
        return valuePlayer1
    } else if (movePlayer === "O") {
        return valuePlayer2
    }
}

function printScenaryGame(winner) {

    const scenary = valueBattleField()

    const _container = document.createElement("li")
    _container.classList.add("scenary-game")

    const _winnerWrapper = document.createElement("div")
    _winnerWrapper.classList.add("winner-wrapper")

    const _winner = document.createElement("div")
    _winner.classList.add("winner")

    const _dataWinnerHistory = document.createElement("div")
    _dataWinnerHistory.classList.add("data-winner-wrapper")

    // const _namePlayer = document.createElement("span")
    // _namePlayer.classList.add("text-box-left")
    // _namePlayer.textContent = "vencedor"

    const _nameWinner = document.createElement("span")
    _nameWinner.classList.add("text-box-left")
    _nameWinner.textContent = getPLayerName(winner)

    const _scenary = document.createElement("span")
    _scenary.classList.add("text-box-left")
    _scenary.textContent = "cenário"

    const _battlefield = document.createElement("div")
    _battlefield.classList.add("battlefield--historic--mini")
    _battlefield.classList.add("battlefield")

    _container.appendChild(_winnerWrapper)
    _container.appendChild(_scenary)
    _container.appendChild(_battlefield)

    _winnerWrapper.appendChild(_winner)

    // _winner.appendChild(_namePlayer)
    _winner.appendChild(_nameWinner)
    _winner.appendChild(_scenary)


    $historyWrapper.appendChild(_container)

    for (const moves of scenary) {
        const _moves = document.createElement("div")
        _moves.classList.add("field--mini")
        _moves.textContent = moves

        _battlefield.appendChild(_moves)
    }
}

function valueBattleField() {
    const scenary = []

    for (const $boardItem of $fieldMini) {
        const move = $boardItem.textContent

        scenary.push(move)
    }

    return scenary
}

function printHistoryMoveRight(movePlayer, index) {
    const namePlayer = getPLayerName(movePlayer)

    $historyWrapperRight.innerHTML += `
    <li class="moves-rounds">
        <div class="who-played">${movePlayer}</div>
        <div class="data-winner-history">
        <span>${namePlayer}</span>
        <span>${index}</span>
        </div>
        </li>
        `
}

function movePrint($field) {
    $field.textContent = movePlayer
}


function checkBoard() {
    let isFilled = true

    for (const $fields of $fieldItem) {
        if (!$fields.textContent) {
            isFilled = false
        }
    }

    return isFilled
}

function startMessage() {
    $buttonStarter.textContent = "o jogo já começou"
    setTimeout(function () {
        $buttonStarter.textContent = "partida em andamento..."
    }, 3000)
}

// let PointsTeste = 5

for (let i = 0; i < $balls.length; i++) {
    const $ball = $balls[i]

    const verifyActivatedBall = (Points) => {
        console.log($ball.classList.contains("ball-activated"))
        if ($ball.classList.contains("ball-activated")) {
           
            // valueBolleanBall = true
            return 5
        } else {
           
            // valueBolleanBall = false
            return 3
        }
    }

    $ball.addEventListener("click", function (e) {
        e.preventDefault()
        $ball.classList.toggle("ball-activated")
        verifyActivatedBall()
    })

    function addPoints(Points) {
        const verifyActivatedTeste = verifyActivatedBall(Points)
        console.log(verifyActivatedTeste)
        if (winner === "X") {
            pointsP1 = pointsP1 + 1
            if (pointsP1 >= verifyActivatedTeste) {
                $pointsPlayer1.textContent = "0" + pointsP1
                resetFields()
                setTimeout(() => { resetScoreboard() }, 1000)
            } else {
                $pointsPlayer1.textContent = pointsP1
            }
        }
        else if (winner === "O") {
            pointsP2 = pointsP2 + 1
            if (pointsP2 >= verifyActivatedTeste) {
                $pointsPlayer2.textContent = "0" + pointsP2
                resetFields()
                setTimeout(() => { resetScoreboard() }, 1000)
            } else {
                $pointsPlayer2.textContent = pointsP2
            }
        }
    }
}


function stopGameOneMoment() {
    if (winner === "X" || "O" || "draw") {
        startGame = false
        setTimeout(function () {
            startGame = true
        }, 1500)
    }
}

function resetHistoryRight() {//função que reseta o historico da direia
    $historyWrapperRight.innerHTML = ""
}

function resetScoreboard() {//função que reseta o scoreboard
    $pointsPlayer1.textContent = ""
    $pointsPlayer2.textContent = ""
    pointsP1 = 0
    pointsP2 = 0
    $winnerRound.textContent = ""
}

function resetFields() {//função que reseta o battlefield central
    for (const field of $fieldItem) {
        field.textContent = ""
    }
}

function resetVariables() {
    movePlayer = "X"
    winner = ""
}

function resetButtonStarttext() {//função que reseta os cenarios a esquerda
    $buttonStarter.textContent = "jogar"
}

function resetScenary() {
    $historyWrapper.innerHTML = ""
}

function reset() {//função que reseta tudo
    resetFields()
    resetScoreboard()
    resetButtonStarttext()
    resetVariables()
    resetHistoryRight()
    resetScenary()
    resetValueBall()
}


$buttonReset.addEventListener("click", (e) => {//este botao é para resetar tudo ao ser clicado
    e.preventDefault()
    reset()
})

$buttonStarter.addEventListener("click", (e) => {//ao clicar o valor fica true dando inicio ao jgo
    e.preventDefault()
    startGame = true
    startMessage()
    resetFields()
})


for (let i = 0; i < $fieldItem.length; i++) {
    const $itemOfField = $fieldItem[i]

    $itemOfField.addEventListener("click", () => {
        if (!startGame) return
        if ($itemOfField.textContent) return
        movePrint($itemOfField)
        verifyWinnerHorizontal()
        printWinnerPlayer()
        printHistoryMoveRight(movePlayer, fieldsPlayed[i])
        variableMoves()
        if (winner) {
            printScenaryGame(winner)
            setTimeout(function () {
                resetFields()
                resetVariables()
                resetHistoryRight()
            }, 1000)
            stopGameOneMoment()
            valueBattleField()
        }
    })
}







