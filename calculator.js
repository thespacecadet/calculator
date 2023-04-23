// Declaration
class calculator{
    constructor() {

    }
    sqrt(x) {
        return Math.sqrt(x)
    }
    calc(expression) {
        return eval(expression)
    }
    per(x,y) {
        console.log(x)
        console.log(y)
       let answer = (x/y)*100
        answer = answer.toString()
        answer = answer + '%'
        return answer
    }
    ratio (x,y) {
        let smaller = 0
        if (x > y) {
            smaller = y
        }
        else {
            smaller = x
        }
        for (let i = smaller; i > 0; i--){
            if(x%i === 0 && y%i === 0){
                let first = x/i;
                let second = y/i;
                return first + ':' + second
            }
        }
    }

}