// Declaration
class calculator {
    constructor() {
    }

    sqrt(x) {
        return Math.sqrt(x)
    }

    per(x, y) {
        console.log(x)
        console.log(y)
        let answer = (x / y) * 100
        answer = answer.toString()
        answer = answer + '%'
        return answer
    }

    ratio(x, y) {
        let smaller = 0
        if (x > y) {
            smaller = y
        } else {
            smaller = x
        }
        for (let i = smaller; i > 0; i--) {
            if (x % i === 0 && y % i === 0) {
                let first = x / i;
                let second = y / i;
                return first + ':' + second
            }
        }
    }
}

(function () {
    const calculate = new calculator()

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let percent = document.querySelector('.btn-perc');
    let square = document.querySelector('.btn-square');
    let pi = document.querySelector('.btn-pi');
    let mod = document.querySelector('.btn-m');
    let elevator = document.querySelector('.elevator');
    let ratio = document.querySelector('.btn-rat');


    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;

        });
    });

    equal.addEventListener("click", function (e) {
        // let stringVal = screen.value.prototype.toString()
        screen.value = screen.value.replace('^', '**')
        screen.value = screen.value.replace('π', Math.PI)
        if (screen.value.includes(':')) {
            let ratioindex = screen.value.indexOf(':');
            let firstIndex = screen.value.slice(0, ratioindex)
            let secondIndex = screen.value.slice(ratioindex + 1)

            screen.value = calculate.ratio(firstIndex, secondIndex)
        } else if (screen.value.includes(' per ')) {
            let ratioindex = screen.value.indexOf(' per ');
            let firstIndex = screen.value.slice(0, ratioindex)
            let secondIndex = screen.value.slice(ratioindex + 5)
            screen.value = calculate.per(firstIndex, secondIndex)
        } else if (screen.value === '') {
            screen.value = "Please enter";
        } else {

            screen.value = eval(screen.value);
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });

    square.addEventListener('click', function (e) {
        let num = parseFloat(screen.value);
        let squareValue = Math.sqrt(num);
        screen.value = squareValue;
    });

    pi.addEventListener('click', function (e) {
        screen.value += Math.PI;
    });
})();

