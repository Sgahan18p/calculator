
const resultInput = document.getElementById("result");
const calculatorButtons = document.querySelectorAll("#calculator input[type='button']");

calculatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        const buttonValue = button.value;
        if (buttonValue === "=") {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = "Error";
            }
        } else if (buttonValue === "c") {
            resultInput.value = "";
        } else {
            resultInput.value += buttonValue;
        }
    });
});
    