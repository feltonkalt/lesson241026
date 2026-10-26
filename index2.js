
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];

let n = prompt('Введите длину пароля')

let randomItem
let password = ""
let allowedSymbols = []
allowedSymbols = lowercase.push()
allowedSymbols = uppercase.push()

const ConfCount = confirm('Нужно ли включать в пароль цифры?')
if (ConfCount) { allowedSymbols = numbers.push() }
const ConfSymbol = confirm('Нужно ли включать в пароль Спецсимволы?')
if (ConfSymbol) { allowedSymbols = symbols.push() }

for (let i = 0; i < n; i++) {
    let randomItem = allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)]
    password = randomItem.join()
}
alert(`Ваш пароль: ${password}`)