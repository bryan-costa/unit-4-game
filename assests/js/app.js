const rand = cap => Math.floor(Math.random() * cap) + 1
let goalNum
let currNum = 0
let isFinished = false
let pics = []

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
    // empties button div
    document.querySelector('#pics').innerHTML = ''

    document.querySelector('#result').textContent = 'Click A Button to get closer to the number displayed.'

    // generates three buttons with random values
    for (let i = 0; i < 3; i++) {
        let pics = ['./assests/images/Green.jpg', './assests/images/Pink.jpg', './assests/images/Red.jpg']
        document.getElementById
        pics.className = 'randNum'
        pics.textContent = 'pics'
        pics.setAttribute('data-value', rand(20))
        document.querySelector('#pics').append(pics)
    }
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