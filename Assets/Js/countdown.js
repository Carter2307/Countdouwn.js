/**
 * Covertir la date renvoyer par le serveur et 
 * celui de l'user en seconde
 * Calculer la difference de seconte entre les deux dates
 * Modifier l'html pour afficher les jours, l'heure, les minutes et les secondes
 */

let MINUTES = 60;
let HOUR = MINUTES * 60;
let DAYS = HOUR * 24;

let countdown = document.querySelector('.countdown')

let elements = {
    days : countdown.querySelector('.days strong'),
    hours: countdown.querySelector('.hours strong'),
    minutes :countdown.querySelector('.min strong'),
    seconds :countdown.querySelector('.sec strong')
}

let previousTimer = {}

//Date de lancement en seconde
let launchDate = Date.parse(countdown.dataset.time) / 1000


function refrechTimer() {

    //Date actuelle en Seconde
    let currentDate = Date.now() / 1000
    let difference = launchDate - currentDate


    let timer = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor((difference % DAYS) / HOUR),
        minutes: Math.floor((difference % HOUR) / MINUTES),
        seconds: Math.floor((difference % MINUTES)),
    }

    updateDom(timer)

    window.setTimeout(() => {
        window.requestAnimationFrame(refrechTimer)
    }, 1000)
}


refrechTimer()

/**
 * Met a jours la structure HTML en fonction du nouvelle interval
 * @param {{days: number, hours : number, minutes : number, seconds : number}} timer 
 */
function updateDom(timer) {
    Object.keys(timer).forEach((key) => {
        if (previousTimer[key] !== timer[key]) {
            elements[key].innerHTML = timer[key]
        }
    })

    previousTimer = timer
}

