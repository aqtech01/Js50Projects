// LeapYear divisible by 4
// leap year if it is also divisble by 400
// not leap year if it is only divible by 100


const checkLeapYear = (year)=>{
    if (year % 4 ==0 ) {
        return `The Given Year ${year} is a Leap Year`   
        
    }else if(year%100==0 ){
        return `The Given Year ${year} is not a Leap Year`  
    }
    else if(year%400==0 ){
        return `The Given Year ${year} is a Leap Year`  
    }
    return `The Given Year ${year} is not a Leap Year`  
}