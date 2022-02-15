const car = document.getElementById('car')
const lawn = document.getElementById('lawn')
const weeds = document.getElementById('weeds')
const reset = document.getElementById('reset')
let task = document.getElementById('task')
let c_k = 1
let l_k = 1
let w_k = 1



let invoice = []
let total = 0

// Car button Action
car.addEventListener('click', function(){
    if (c_k === 1) {
        invoice.push(`Wash Car <span style="float:right;">$10</span><br>`)
        total += 10
        Invoice()
        c_k = c_k - c_k
    }
})
// Lawn button Action
lawn.addEventListener('click', function(){
    if (l_k === 1) {
        invoice.push(`Mow Lawn <span style="float:right;">$20</span><br>`)
        total += 20
        Invoice()
        l_k = l_k - l_k
    }
})
// Weeds button Action
weeds.addEventListener('click', function(){
    if (w_k === 1) {
        invoice.push(`Pull Weeds <span style="float:right;">$30</span><br>`)
        total += 30
        Invoice()
        w_k = w_k - w_k
    }
})

reset.addEventListener('click', function(){
    invoice = []
    task.innerHTML = ''
    for (let i = 0; i < invoice.length; i++) {
        task.innerHTML += invoice[i]
    }
    total = 0
    document.getElementById('total').innerHTML =`<span style="float:right;">$${total}</span>`
    c_k = 1
    l_k = 1
    w_k = 1    
     
})


function Invoice(){
    task.innerHTML = ''
    for (let i = 0; i < invoice.length; i++) {
        task.innerHTML += invoice[i]
    }   

    document.getElementById('total').innerHTML =`We accept card, Credit card or Paypal. <span style="float:right;">$${total}</span>`
}


// 