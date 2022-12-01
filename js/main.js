/*
1.
var = eski ozgaruvchaning turi
let = eng kop iwlatiladigan ozgaruvchan
const = ozgarmaydigan ozgaruvchan

2.
    1.string
    2.number
    3.boolean
    4.null
    5.undefined
-----------------
    1.Let 
    2.Array 
    3.Object
3.

increment ++ добовляет +1 к значению переменной
descrement -- вычитывает -1 от значении переменной

4.

string + number = string+string
: let str = "11" + 5
consle.log(str) = (115)

5.
&& означет "и"
|| означает "или"

6.

if - проверяет заданное условие и отвечает типом данных boolean
else - если if отвечает false, тогда срабатывает else, else нельзя задать условие

7.

else if(){} - можно использовать после if как допольнительное условие

8.

массив сохраняет заданные значение по номеру индекс(0,1,...)
arr.pop - позволяет убрать последний элемент из массива

9.

object - хранить элементы key : value

10.

method - методы помогают работат с элементами например : .push .shift .pop .unshift .lenght .map .includes .replace .toUpperCase ...

*/

function sum(a,b){
  return a + b
}
console.log(sum(55,45))

let worldYear = 2022

function hoay(years){

   return worldYear - years
}

console.log(hoay(17))

function calc(a,b){
  if( typeof a == "number" && typeof b == "number"){
    return a + b
  }
  else{
    return console.log("son emas")
  }

}
console.log(calc(5,22))