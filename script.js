let chest = document.querySelector('.chest')
let map = document.querySelector('.map')
let come = document.querySelector('.cm')
let chestX = Math.random() * 650
let chestY = Math.random() * 400
chest.style.left = chestX + 'px'
chest.style.top = chestY + 'px'

//map.style.left = event.clientX + 'px'
//map.style.top = event.clientY + 'px'

map.onclick = (event) => {
    let img = document.createElement("img")
    img.src="img/cros.png"
    document.body.appendChild(img)
    img.style.position = "fixed" 
    img.style.zIndex = "3" 
    img.style.width = "30px" 
    img.style.height = "30px" 
    img.style.left = event.pageX + 'px'
    img.style.top = event.pageY + 'px'
    ///Math.sqrt
    //Math.pow(2,2)
    let a = event.pageX - chestX - map.getBoundingClientRect().x
    let b = event.pageY - chestY - map.getBoundingClientRect().y
    let steps = Math.round(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)))
    let directionX = event.pageX - map.getBoundingClientRect().x > chestX?"west":"east"
    let directionY = event.pageY - map.getBoundingClientRect().y > chestY?"north":"south"

   /*if (a >= 0 && b >= 0) {
        alert ("Північ")
    }

    if (a <= 0 && b >= 0) {
        alert ("Південь")
    }

    if (a >= 0 && b <= 0) {
        alert ("Схід")
    }

    if (a <= 0 && b <= 0) {
        alert ("Захід")
    }*/

    
    alert (`you have ${steps} steps left, move ${directionX} ${directionY}`)
    //alert(`Відстань до скарбів становить ${distance} кроків рухайтесь на ${directionY} ${directionX}`)
}

chest.onclick = (event) => {
    alert ("our congratulations. you found the treasure.")
    event.cancelBubble = true;
    chest.style.opacity = "1"
}

come.onclick = (event) => {
    event.cancelBubble = true;
}

let body = document.querySelector("body") 
body.onkeypress = () => {
    alert ("something")
}
/* if (onkeypress == 'chest') {
    chest.style.display = "block"
} */

/*map.onclick = () => {
    
    } 
    */