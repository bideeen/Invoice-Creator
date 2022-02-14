const car = document.getElementById('car')
const lawn = document.getElementById('lawn')
const weeds = document.getElementById('weeds')
let task = document.getElementById('task')


let invoice = []
let total = 0


car.addEventListener('click', function(){
    invoice.push(10)
    total += 10
    Invoice()
}, {once:true})
lawn.addEventListener('click', function(){
    invoice.push(20)
    total += 20
    Invoice()
}, {once:true})
weeds.addEventListener('click', function(){
    invoice.push(30)
    total += 30
    Invoice()
}, {once:true})

function Invoice(){

    for (let i = 0; i < invoice.length; i++) {
        if ( invoice[i] === 10){
            task.innerHTML = `Wash Car <span style="float:right;">$${invoice[i]}</span>`
        }
        else if ( invoice[i] === 20){
            task.innerHTML = `Mow Lawn <span style="float:right;">$${invoice[i]}</span>`
        }
        else if ( invoice[i] === 30){
            task.innerHTML = `Pull Weeds <span style="float:right;">$${invoice[i]}</span>`
        }
    }
    

    document.getElementById('total').textContent = "$" + total
}


// 