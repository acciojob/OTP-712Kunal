const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {
        // Allow only numbers
        code.value = code.value.replace(/\D/g, "");

        // Move to next input after entering a digit
        if (code.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            // If current input contains a digit,
            // delete it first.
            if (code.value !== "") {
                code.value = "";
                return;
            }

            // If current input is empty,
            // move to previous input and delete its value.
            if (index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            }
        }
    });
});

// Focus first input automatically
codes[0].focus();