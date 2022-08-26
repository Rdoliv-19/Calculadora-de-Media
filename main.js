function mostraNota(aluno){
    

    let nota1 = document.querySelector('#nota1').value
    let nota2 = document.querySelector('#nota2').value
    let nota3 = document.querySelector('#nota3').value
    let nota4 = document.querySelector('#nota4').value

    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    nota3 = parseFloat(nota3)
    nota4 = parseFloat(nota4)

    let soma =  (nota1 + nota2 + nota3 + nota4) /4 ;

    alert(`Ola sua média foi ${soma.toFixed(1)}`)
}


