// Declaration
class calculator {
    constructor() {
    }

    //simple square function. never used
    sqrt(x) {
        return Math.sqrt(x)
    }
    //percentage. we take two numbers. divide one with the other and multiply by 100. add % symbol after. this function cannot work with other functions!
    per(x, y) {
        let answer = (x / y) * 100
        answer = answer.toString()
        answer = answer + '%'
        return answer
    }
    //ratio function finds the biggest common denominator of two numbers and divides both with it. this function cannot work with other functions!
    ratio(x, y) {
        let smaller
        // find the smaller number out of the two
        if (x > y) {
            smaller = y
        } else {
            smaller = x
        }

        //start with smaller number and try and divide both numbers. if it doesnt work, decrease the number by one until it works
        for (let i = smaller; i > 0; i--) {
            if (x % i === 0 && y % i === 0) {
                let first = x / i;
                let second = y / i;
                return first + ':' + second
            }
        }
    }    calc(expression) {
        return eval(expression)
    }

}

(function () {
    const calculate = new calculator()

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    // let percent = document.querySelector('.btn-perc');
    let square = document.querySelector('.btn-square');
    let pi = document.querySelector('.btn-pi');
    // let mod = document.querySelector('.btn-m');
    // let elevator = document.querySelector('.elevator');
    // let ratio = document.querySelector('.btn-rat');

    //adds symbols to screen
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;

        });
    });

    equal.addEventListener("click", function (e) {

        //change power sign to a symbol the eval function knows
        screen.value = screen.value.replace('^', '**')

        //change pi symbol to the actual number
        screen.value = screen.value.replace('π', Math.PI)
        //if colon found in screen value then calculate ratio
        if (screen.value.includes(':')) {
            let ratioindex = screen.value.indexOf(':');
            let firstIndex = screen.value.slice(0, ratioindex)
            let secondIndex = screen.value.slice(ratioindex + 1)
            screen.value = calculate.ratio(firstIndex, secondIndex)

        }
        //if 'per' found on screen value, calculate percentage
        else if (screen.value.includes(' per ')) {
            let ratioindex = screen.value.indexOf(' per ');
            let firstIndex = screen.value.slice(0, ratioindex)
            let secondIndex = screen.value.slice(ratioindex + 5)
            screen.value = calculate.per(firstIndex, secondIndex)
        }
        //if screen value is empty string, write 'please enter' on the screen
        else if (screen.value === '') {
            screen.value = "Please enter";
        }
        //if screen not empty, no colon and no 'per', then calculate normally
        else {
            screen.value = calculate.calc(screen.value);
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });

    //calculate square function
    square.addEventListener('click', function (e) {
        let num = parseFloat(screen.value);
        let squareValue = Math.sqrt(num);
        screen.value = squareValue;
    });

    pi.addEventListener('click', function (e) {
        screen.value += Math.PI;
    });
})();

