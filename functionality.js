(function(){
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
   

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;

        });
    });
    //
    // let num1 = 0;
    // let num2 = 0;
    // let width = 0;
    //
    
    // let elevate = "";
    // let ratioValue = "";
  
    equal.addEventListener("click", function (e) {
        // let stringVal = screen.value.prototype.toString()
        screen.value = screen.value.replace('^', '**')
        screen.value = screen.value.replace('π', Math.PI)
        if (screen.value.includes(':')){
            let ratioindex = screen.value.indexOf(':');
            let firstIndex = screen.value.slice(0,ratioindex)
            let secondIndex = screen.value.slice(ratioindex+1)

            screen.value = calculate.ratio(firstIndex,secondIndex)
        }
        else if (screen.value.includes(' per ')){
            let ratioindex = screen.value.indexOf(' per ');
            let firstIndex = screen.value.slice(0,ratioindex)
            let secondIndex = screen.value.slice(ratioindex+5)
            screen.value = calculate.per(firstIndex,secondIndex)
        }

  // if(elevate === "elevator" || elevate === "ratio") {
  //   num2 = screen.value;
  //   if (num1 !== 0 && num2 !== 0 && elevate === "elevator") {
  //
  //     screen.value =  Math.pow(num1, num2);
  //   }else if(ratioValue === "ratio" || ratioValue === "elevator") {
  //       num2 = screen.value;
  //       screen.value = (num2 * width) / num1;
  //   }if (width !== 0 && num1 !== 0 && num2 !== 0 && ratioValue === "ratio"){
  //       screen.value = `height is ${height.toFixed(2)} on ratio (${num2}*${width}):${num1}`;
  //   }
  //
  //
  // }
  // else{
      else if (screen.value === '') {
        screen.value = "Please enter";
      }
      else {
        // let answer = eval(`${num1} ** ${num2} ** ${width}`);
        // screen.value = answer;
          screen.value = eval(screen.value);
      // }
  }
      
    });

    clear.addEventListener('click', function(e){
        screen.value = "";
    });

    // percent.addEventListener('click', function(e){
    //     let num = parseFloat(screen.value);
    //     let percentValue = num / 100;
    //     screen.value = percentValue;
    // });

    square.addEventListener('click', function(e){
        let num = parseFloat (screen.value);
        let squareValue = Math.sqrt(num);
        screen.value = squareValue;
    });

   pi.addEventListener('click', function(e){
        screen.value += Math.PI;
    });

    // mod.addEventListener('click', function(e){
    //     // let num1 = parseFloat(screen.value);
    //     // let num2 = parseFloat(screen.value);
    //     // let modResult = num1 % num2;
    //     // screen.value = modResult;
    // });

    // elevator.addEventListener('click', function(e){
    //     num1 = parseFloat(screen.value);
    //     elevate = "elevator"
    //    screen.value = "";
    //   /*  let elevatorValue = (x, y) =>  Math.pow(x, y);
    //    screen.value = elevatorValue; */
    //
    //
    //  });

    /*let ratioValue = (x, y, width) => {
        let height = (y * width) / x;
        return `height is ${height.toFixed(2)} on ratio ${x}:${y}`;
      }*/
    // ratio.addEventListener('click', function(e){
    //
    //     if (num2 === 0) {
    //         num2 = parseFloat(screen.value);
    //     } else {
    //         width = parseFloat(screen.value); // screnn.value = ratio5 => scren.value.slice(5)
    //     }
    //     ratioValue = "ratio";
    //     screen.value = num2;
    //     ratioValue = "ratio";
    //
    //     //screen.value = "ratio";
    //     num1 = parseFloat(screen.value);
    //     ratioValue = "ratio";
    //     screen.value = `height is ${height.toFixed(2)} on ratio ${num2}:${num1}`;
    //
    //   });


   /* ratio.addEventListener('click', function(e){
        let num = parseFloat(screen.value);
        let ratioValue = parseFloat(x, y, width) => {
            let height = parseFloat(y * width) / x;
            return `height is ${height.toFixed(2)} on ratio ${x}:${y}`;
            screen.value = ratioValue(num.x, num.y, num.width);
          }
        
      
      });*/


    

})();

