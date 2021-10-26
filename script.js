const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

updateBigCup()

smallCups.forEach((curr, idx) => {
    curr.addEventListener('click', () => {
        highlight(idx)

    })

})

function highlight(idx) {


    if (smallCups[idx].classList.contains('full-cup')) {
        idx--
    }

    smallCups.forEach((curr, idx2) => {
        if (idx2 <= idx) {
            curr.classList.add('full-cup')
        } else {
            curr.classList.remove('full-cup')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.full-cup').length
    const totalCup = smallCups.length

    if (fullCups == 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / totalCup * 350}px`
        percentage.style.width = `${fullCups / totalCup * 7000}px`
        percentage.innerText = `${fullCups / totalCup * 100}%`
    }

    if (fullCups === totalCup) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`

    }
}