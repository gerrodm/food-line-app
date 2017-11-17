var students = [
 "Alma Pineda", "Erick Munguia",
 "Abraham Albiso", "Beverly Bribiesca",
 "RJay Matias", "Steven Munoz",
 "Camila Melara", "Jaaaasssmine Rosas",
 "Gerrod Milton", "Erick Alas",
 "Edgardo Alas", "Estefania Lopez",
 "Dulce Rubio", "Jefferson Fon Nieto",
 "Hashby Marroquin", "Lizbeth Alcaraz",
 "Jeder Ramos Aguilar"
]

function showWhoIsNextInLine(){
    document.getElementById('next-student').innerHTML = students[0] 
    
    document.getElementById('line-length').innerHTML = students.length
    
    document.getElementById('students').innerHTML = students
}

showWhoIsNextInLine()

function takeOffFirstInLine(){
students.shift()
showWhoIsNextInLine()
}

function pickRandomStudent(){
    var randomNum = Math.floor(Math.random() * students.length)
    var student = students[randomNum]
    students.splice(randomNum,1)
    document.getElementById('eating').innerHTML = student
    showWhoIsNextInLine()
}

function letSomeoneCut(){
    var newPerson = prompt("Who is cutting in line?")
    students.unshift(newPerson)
    showWhoIsNextInLine()
}

function putSomeoneAtTheEndOfLine(){
    var newPerson = prompt("Who is going to the end of the line?")
    students.push(newPerson)
    showWhoIsNextInLine()
}




