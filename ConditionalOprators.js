let age = 30

let ageMoreThank18
if (age > 18){
    ageMoreThank18 = true
}
else if (age =18){
    ageMoreThank18 = false
}
else{
    ageMoreThank18 = false 
}
console.log('Age is more than 18 =  ' + ageMoreThank18)


ageMoreThank18 = (age>18) ? true : false
console.log('Age is more than 18 =  ' + ageMoreThank18)