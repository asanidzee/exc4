///davaleba 1
let fruits = ["apple","mango","avocado","kiwi"];
fruits.splice(fruits.length - 2, 1, 'strawberry');

console.log(fruits);
///davaleba 2
let info = 'good day';
let words = info.split(' ');
let day = words[1];
console.log(day)
///davaleba 3
function str(string){
    return string.length
}
///davaleba 4
let nums = [5,25,89,120,36];
nums.push('javascript','python');
nums.unshift('html','css');
console.log(nums.length);
nums.pop();
nums.shift();
console.log(nums)
///davaleba 5
let fruit = ["ფორთოხალი","ბანანი","კივი"];
console.log(fruit.length);
fruit.push('ვაშლი','ანანასი');
fruit.unshift('საზამთრო');
console.log(fruit.length);
fruit.splice(2,0,'მანგო');
fruit.pop();
fruit.shift();
console.log `დარჩა ${fruit.length} ელემენტი`;
///davaleba 6
let array3 = [1,2,3,4,5];
let index0 = array3.indexOf(3);
array3.splice(index0,0, 'a', 'b', 'c');
console.log(array3);
///davaleba 7
let array7 = [15,100,25,10,36];
let index1 = array7.indexOf(10);
array7.pop(index1);
console.log(array7);
///davaleba 8
let array8 = [1,2,3,4,5];
let index2 = array8.indexOf(3);
array8.splice(index2, 1, 'three');
console.log(array8);