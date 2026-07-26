var  Outcome;
// step 1  Str(number)+3 int = number3(str)  
// step 2  Str(number3)+3 int = number33(str) 
Outcome = 'number' + 3 + 3  
console.log(Outcome) //result  number33(str)

// step 1  null convert into 0 
// step 2  0 + 3 = 3(int)
Outcome = null + 3
console.log(Outcome) // result 3(int)

// step 1  left side 5 is true
// step 2  return right side --> "qwerty"
Outcome = 5 && "qwerty" 
console.log(Outcome) // result qwerty(str)

// step 1  "+" before text is meaning number  +40 ++ 2 = 42 int
// step 2 int + Str(hillel) = 42hillel(str)
Outcome = +'40' + +'2' + "hillel";
console.log(Outcome) //result 42hillel(str)

// step 1  '10' - 5 int = 5(int)
// step 2  === it`s strict comparison
// 5 != 6

Outcome = '10' - 5 === 6;
console.log(Outcome) //  result false

// step 1   true = 1(int)
// step 2   false = 0(int)
// step 3  1+0=1 
Outcome = true + false
console.log(Outcome) // result 1 

// step 1  try 4px convert into int 
// step 2  impossible to convert this value and 4px = NaN int
// step 3  NaN int  -  3 int  
Outcome = '4px' - 3
console.log(Outcome) // result NaN

// step 1  try '4' convert into int 
// step 2  4 int - 3 int 
Outcome = '4' - 3 
console.log(Outcome) // result 1

// step 1  3 int ** 0 int = 1  
// step 2  '6' str + 1 int  --> '61' (strict concatination )
Outcome = '6' + 3 ** 0;
console.log(Outcome) // result 61 

//step 1 try '6' convert into  int 
//step 2  12int \ 6 int
Outcome = 12 / '6'
console.log(Outcome) //result 2 

// step 1  first action on ()  5===6  result  false    '===' - strict comprasion 
// step 2 10 str + false --> '10false'
Outcome = '10' + (5 === 6);
console.log(Outcome) //  result 10false

// step 1 '==' - default comprasion 
// step 2 null != '' 
Outcome = null == ''
console.log(Outcome) // result false 

// step 1 first action on ()  9 int \ 3 int == 3 int
// step 2  3 int **3 int  
Outcome = 3 ** (9 / 3);
console.log(Outcome) // result 27

// step 1 'false' not empty = true   first '!' convert into false  second '!' convert into true   final result will true
// step 2 'true' not empty = true   first '!' convert into false  second '!' convert into true   final result will true
// step 3 default comprasion true and true
Outcome = !!'false' == !!'true' 
console.log(Outcome) // result true 

// step 1  &&   higher priority than ||
// step 2 '0'str not empty --> true
// step 3  '0' && 1 --> returns 1
// step 4   0 is falsy
// step 5  0 || 1 --> returns 1
Outcome = 0 || '0' && 1
console.log(Outcome) // result 1 

// step 1  + before null meaning it will be number  null convert into 0 
// step 2  0 == false  result true
// step 3 true convert  into number it will be 1 
// 1 !> 1  
Outcome = (+null == false) < 1; // result false 
console.log(Outcome)

// step 1 &&   higher priority than ||  false && true = false
//  && returns the first false value
// step 2 false || true
// || returns the first true value
Outcome = false && true || true
console.log(Outcome) // result true 

// step 1 first action will on ()  || returns the first true value
// step 2  && returns the first false value
Outcome = false && (false || true); // result false
console.log(Outcome)

// step 1   + converts null into number
// +null --> 0
// step 2  0 == false --> true
// false converts into 0
// step 3  1 ** 5 --> 1
// step 4  true converts into number 1
Outcome = (+null == false) < 1 ** 5;
console.log(Outcome) // false

