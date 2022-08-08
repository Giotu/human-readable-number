module.exports = function toReadable (number) {
    const a = ['zero', 'one', 'two' ,'three', 'four' , 'five' , 'six' , 'seven' , 'eight' , 'nine'];
    const b = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const c = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';

    if (number<10){                                                                  //для чисел меньше 10 (0-9)                
        result += a[number]; 
    }else if(number < 20){                                                           //для 10-19                                                          
        result += b[number % 10];
    }else if(number<100){                                                            
        if(number % 10 === 0){
            result += c[(Math.floor(number/10))-1];
        }else{
            result = c[(Math.floor(number/10))-1] + ' ' + a[number%10];
        }

    }else if(number<1000){
        if(number % 100 === 0){
            result = a[Math.floor(number/100)] + ' hundred';
        }else if(number % 10 === 0){
            result = a[Math.floor(number/100)] + ' hundred ' + c[(Math.floor((number/10)%10))-1];
        }else if(number % 100 < 10){
            result = a[Math.floor(number/100)] + ' hundred ' + a[number%10];
        }else if(number % 100 < 20 && number % 100 > 10){
            result = a[Math.floor(number/100)] + ' hundred ' + b[number % 10];
        }else{
            result = a[Math.floor(number/100)] + ' hundred ' +  c[(Math.floor((number/10)%10))-1] + ' ' + a[number%10];
        }

    }
    return result;
}
