window.onload = () => { // document is loaded

    const counters = new Counters('.counter') // create counter

    counters.getValues() // get value counter and set 0

    document.querySelector('.start').addEventListener('click', event => {
        counters.start() // start counter
    })
}

class Counters {
    constructor(elements) {
        this.elements = document.querySelectorAll(elements)
        this.valueCounters = []
    }

    start() {
        this.valueCounters.forEach((elem, index) => {
            this.counter(this.elements[index], +elem)
        })
    }

    getValues() {
        this.elements.forEach(elem => {
            this.valueCounters.push(elem.textContent)
            elem.textContent = 0
        })
    }

    counter(elem, num) {
        let i = 0
        let count = setInterval(() => {
            elem.textContent = i
            i++
            if (i >= num + 1) clearInterval(count)
        }, 30)
    }
}
