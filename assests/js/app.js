const rand = cap => Math.floor(Math.random() * cap) + 1
let goalNum
let currNum = 0
let isFinished = false
let x = document.getElementById("picture1"),
    y = document.getElementById("picture2"),
    z = document.getElementById("picture3"),
    Win = 1
    Loss = 1




// initializes application
const init = _ => {
    isFinished = false
    // sets random number for user to try matching
    goalNum = rand(100)
    // reset current user progress
    currNum = 0
    // displays goal number
    document.querySelector('#goalNum').textContent = goalNum
    // displays user's current progress
    document.querySelector('#currNum').textContent = 0

    document.querySelector('.instructions').innerHTML = 'Click a Gem to get closer to the number displayed.'

    document.querySelector('#result').textContent = ""

    // gives pics random values
    x.setAttribute('data-value', rand(20))
    x.className = 'randNum'
    y.setAttribute('data-value', rand(20))
    y.className = 'randNum'
    z.setAttribute('data-value', rand(20))
    z.className = 'randNum'
    console.log(x)
    console.log(y)
    console.log(z)

}

const reset = _ => {
    if (isFinished) {
        init()
    }
}

const check = _ => {
    if (currNum === goalNum) {
        isFinished = true
        document.querySelector('#Wins').textContent = "Wins: " + Win++

    } else if (currNum > goalNum) {
        isFinished = true
        document.querySelector('#Losses').textContent = "Losses: " + Loss++
    } else {
        document.querySelector('#result').textContent = 'Keep Going...'
    }
    reset()
}

document.addEventListener('click', e => {
    if (e.target.className === 'randNum' && !isFinished) {
        currNum += parseInt(e.target.dataset.value)
        document.querySelector('#currNum').textContent = currNum
        check()
    }
})

// starts app initial state
init()