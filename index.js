let winuser = 0
let wincomp = 0
let number = 5
let fail = 10

while (fail > 0) {
    if (winuser == 1) {
        alert('Победапользователя')
        break
    }
    let a = prompt(`Введите число от 1 до ${number}`)
    const random = Math.floor(Math.random() * number) + 1;
    if (a === "изменить") {
        let b = +prompt("Введите новое число до какого")
        while (Number.isNaN(b) || b < 1) {
            let b = +prompt("Введите новое число до какого")
        }
        number = b
        continue
    }
    a = Number(a)
    if (Number.isNaN(a) || a < 1 || a > number) {
        alert("Неверный ввод")
        continue
    }

    if (a == random) {
        winuser += 1
        alert(`Победа пользователя!`)

    }
    else {
        wincomp += 1
        alert(`Победа компьютера! Было загадано: ${random}`)
        fail -= 1
    }
    alert(`Компьютер:${wincomp} Пользователь:${winuser}`)
    alert(`Осталось: ${fail} жизней`)
}
if (fail == 0) {
    alert('Попытки кончились')
}