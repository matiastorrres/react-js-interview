//@ts-nocheck
import { isRomanNumberValid } from "./roman-nums-validation.utils";

/**
 * This function gets as argument a roman number string for instance
 * XX -> 20
 * XIX -> 19
 * V -> 5
 * VIII -> 8
 * HI -> 0 -- invalid
 * @param romanNumber 
 * @returns integer value of roman number or 0 if its invalid
 */

//  I: 1,
//  V: 5,
//  X: 10,
//  L: 50,
//  C: 100,
//  D: 500,
//  M: 1000,
export const romanToInt = (romanNumber: string): number => {
  let sum = 0;
  const romanNumberArray = romanNumber.split("")

  const romanNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //MCMXCIX 


  for(let i=0; i<romanNumberArray.length; i++){
    const currentNumber=romanNumberMap[romanNumberArray[i]]

    const nextNumber= romanNumberMap[romanNumberArray[i+1]]
    // console.log(romanNumberMap[romanNumberArray[i]])
    if(nextNumber && nextNumber>currentNumber){
      sum=sum-currentNumber
    }else{
      sum = sum + romanNumberMap[currentNumber]
    }
    
  }
  // romanNumberArray.forEach((el, index)=>{
     
  //    if(el==="I" ){
  //      sum=sum+1
  //    }
  //    if(el==="V"){
  //      sum=sum+5
  //    }
  //    if(el==="X"){
  //      sum=sum+10
  //    }
  //    if(el==="L"){
  //     sum=sum+50
  //   }
  //   if(el==="C"){
  //     sum=sum+100
  //   }
  //   if(el==="D"){
  //     sum=sum+500
  //   }
  //   if(el==="M"){
  //     sum=sum+1000
  //   }
  // })
  switch (romanNumber){
    
  }
  if (!isRomanNumberValid(romanNumber)) {
    return sum;
  }

  

  return sum;
};
