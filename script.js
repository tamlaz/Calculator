
let num;
const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
    number.addEventListener('click', () => {
        num = parseInt(number.value)
        console.log(num);
    });
})