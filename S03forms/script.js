// <?php
// if (isset($_POST['submit'])) {

//     //numbers must be numbers
//     $a = (float) $_POST['number1'];
//     $b = (float) $_POST['number2'];

//     //make calculations with respect to the chosen criteria
//     switch ($_POST['operation']) {
//         case '+':
//             $result = $a + $b;
//             break;
//         case '-':
//             $result = $a - $b;
//             break;
//         case '*':
//             $result = $a * $b;
//             break;
//         case '/':
//             if ($b == 0) {
//                 $result = 'ERROR!';
//             } else {
//                 $result = $a / $b;
//             }
//             break;
//     }
// } else {
//     //default result to display
//     $result = 0;
// }
// ?>

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = 0;
  const screen = document.getElementById("screen");
  const n1 = +e.target[0].value;
  const n2 = +e.target[1].value;
  const operation = e.target[2].value;

  switch (operation) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      if (n2 == 0) {
        result = "ERROR!";
      } else {
        result = n1 / n2;
      }
      break;
  }

  screen.innerText = result;
});
