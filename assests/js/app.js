const rand = cap => Math.floor(Math.random() * cap) + 1
let goalNum
let currNum = 0
let isFinished = false
let x = document.getElementById("picture1"),
    y = document.getElementById("picture2"),
    z = document.getElementById("picture3")



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
    // // empties button div
    // document.querySelector('#pictures').innerHTML = ''

    document.querySelector('#result').textContent = 'Click A Button to get closer to the number displayed.'

    // gives pics random values
    x.setAttribute('data-value', rand(20))
    y.setAttribute('data-value', rand(20))
    z.setAttribute('data-value', rand(20))
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
        document.querySelector('#result').textContent = 'Congratulations! You Matched The Number!'
    } else if (currNum > goalNum) {
        isFinished = true
        document.querySelector('#result').textContent = 'Oh No! You seriously suck at this!'
    } else {
        document.querySelector('#result').textContent = 'Keep Going...'
    }
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