//Домашка від 24.12.2022
// 1. Написати функцію, яка приймає 2 числа и повертає -1, якщо перше менше, ніж друге, 1 - якщо навпаки
//  і 0 - якщо оба числа дорівнюють один одному
// var num1 = parseInt(prompt("Enter the first number"));
// var num2 = parseInt(prompt("Enter the second number"));
// function comparisonNumber(x, y){
//     if(x<y) return -1;
//     else if(x>y) return 1;
//     else return 0;
// }
// alert(comparisonNumber(num1, num2));

//2. написати функцію, яка вираховує факторіал переданого їй числа
var num = parseInt(prompt("Enter the number"));
var factorial = function(x){
    var i = 1;
    var res = 1;
    while(i<=x){
        res = res*i;
        ++i;
    }
    alert(res);
}
alert(factorial(num));//буде виводити результат і undefined, оскільки функція нічього не повертає

//3. Написати функцію, яка приймає три окремих цифри і перетворює їх в одне число
var num_a = prompt("Enter the first number");
var num_b = prompt("Enter the second number");
var num_c = prompt("Enter the third number");
function glueNumbersIntoAnumber(a,b,c){
    var res = a+b+c;
    res = parseInt(res);
    alert(res);
    return res;
}
var r = glueNumbersIntoAnumber(num_a, num_b, num_c);

//4. Написати функцію, яка приймая довжину та ширину прямокутника та вираховує його площу.
    //Якщо в функцію передати лише 1 параметр, то він вирахувує площу квадрата
    var num_a = +prompt("Enter the first number");
    var num_b = +prompt("Enter the second number");
    function square(x,y){
        x=x || 0;
        y=y || 0;
        if(Number.isNaN(y) || !!y==false) y=x;//перша перевірка якщо введено не число, а в другій у привів до типу буліан
        alert(x*y);
    }
    square(num_a,num_b);