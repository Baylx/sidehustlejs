document.getElementById('reduce').addEventListener('click', function myFunction(){
    let value = parseInt(document.getElementById('value').innerHTML)
    if(value <= 0){
        let peg = value
        document.getElementById('value').innerHtml = peg    
    }else{
    let peg = value - 1
    document.getElementById('value').innerHTML = peg
    }
})

document.getElementById('add').addEventListener('click', function myFunction(){
    let value = parseInt(document.getElementById('value').innerHTML)
    if(value >= 50){
        let peg = value
        document.getElementById('value').innerHTML = peg
    }else{
        let peg = value + 1
        document.getElementById('value').innerHTML = peg
    }
})

