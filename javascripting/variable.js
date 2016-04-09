var string = 'this example exists'

//console.log(example)

//length
//console.log(example.length)

//Revise String
var pizza = 'pizza is alright'
pizza = pizza.replace('alright','wonderful')


//Numbers
var num = 123456789

//Rounding Numbers
var roundUp = 1.5
var rounded = Math.round(roundUp)

//Number to String
var n = 128
//console.log(n.toString())


//Conditionals
var fruit = 'orange'
if(false){
  if(fruit.length > 5){
    console.log('The fruit name has more than five characters.')
  }else{
    console.log('The fruit name has 5 characters or less.')
  }
}


//For looping
if(false){
  var total = 0
  var limit = 10

  for(var i  = 0; i < limit;i++){
    total+= i
  }
  console.log(total)
}

//Arrays
var toppings = ['tomato sauce','cheese','pepperoni']


//Array Filtering
if(false){
  var nums = [1,2,3,4,5,6,7,8,9,10]

  var filtered = nums.filter(function evenNumbers(number){
    return number%2 == 0;
  });
}


var food = ['apple','pizza','pear']
console.log(food[1])
