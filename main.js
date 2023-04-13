const span = document.getElementById('span')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => { 
    let input = document.getElementById('input').value
    palindrome(input)
})

function palindrome(input){
    let a = /[\W_]/g
    input = input.toLowerCase().replace(a, '')
    let len = input.length
    let half = Math.floor(len/2)

    for(let i=0; i<half; i++){
        if(input[i] !== input[len-1-i]){
            span.textContent = "Not a palindrome!"
            return
        } else {
            span.textContent = "It's a palindrome!"
            return
        }
    }
}


document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code === 'Enter') {
        palindrome(input.value)
    }
})



