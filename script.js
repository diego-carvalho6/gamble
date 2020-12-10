// function slot(element, speed){
//     this.speed = speed
//     this.ele = ele
// }

// let slot1 = new slot("#slot1", 50), 
// slot2 = new slot("#slot2", 75), 
// slot3 = new slot("#slot2", 100)

// slot.prototype.start = function() {
//     let this1 = this
//     $(this1.element).addClass("motion")
//     $(this.el).spStart()
// }
// slot.prototype.stop = function(){
//     let this1 = this,
//     $(this1.element).removeClass("motion")
// }

function rolar(){
   return Math.floor(Math.random() * 2)

}
function introduz(){
    if(rolar() === 0){
        let result = "As i see it Yes"
        let game1 = document.getElementById("game1")
        game1.innerText = (result)
        return result
        
    }else if(rolar() === 1){
        let result = "As i see it No"
        let game1 = document.getElementById("game1")
        game1.innerText = (result)
        return result
    }
}
let button = document.getElementById("button")
button.addEventListener("click", introduz)


