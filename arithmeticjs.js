function calculator(){
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);
    var operation = document.getElementById("op").value;
    var results = document.getElementById("results");
        if(isNaN(first)&&isNaN(second))
            {
                alert("enter valid numbers");
            }
        else if(isNaN(first)||isNaN(second))
            {
                alert("enter valid values");
            }
        else {
        
           
         switch (operation) {
          case '+':
          var x = first + second;
          results.textContent =`Sum of these numbers = ${x}`;
          break;
          case '-':
            var x;
            x = first - second;
            var results;
            results.textContent =` Subtraction of these numbers = ${x}`;
            break;
          case '*':
            var x = first*second;
            var results;
            results.textContent = `Multiplication of these numbers = ${x}`;
            break;
          case '/':
            var x;
            x=first/second;
            var results;
            results.textContent=`Division of these numbers =${x}`;
            break;
          default:
                alert('Select an operation');
            break;
        }
        }    
}
