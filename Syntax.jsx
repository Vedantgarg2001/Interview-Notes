const numbers=[1,2,3,4,5];

const double= numbers.map(num =>num*2)

console.log(double)


const numberss=[1,2,3,4,5];

doubles=numberss.map(num=>num*3)


function createMultiplier(multiplier){
  return function(value){
    return multiplier*value;
  }
}

doubled=createMultiplier(2)
doubled(4)

const numbersss=[1,2,3,4,5,6]

filterd=numbersss.filter(num=>num%2===0)
console.log(filterd)

function createCounter(){
    let count=0;
    return function(){
        count+=1;
        return count;
    }
}

counter=createCounter();
console.log(counter);
