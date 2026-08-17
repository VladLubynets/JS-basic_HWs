// Напишіть регулярний вираз, який знайде послідовність з шести або більше символів,
// які не містять літери «А» (великої або малої)

const str = "Wonderful Joyful Happiness Time Task Apple";

const pattern1 = /\b[^Aa\s]{6,}\b/g;

console.log(str.match(pattern1));


// За допомогою регулярного виразу створіть масив з адресами, гідними довіри.
// До @ одне або два слова, які можуть містити латинські букви та цифри,
// слова можуть бути розділені крапкою.

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

const pattern2 = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;

var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
    if (pattern2.test(arr[i].email)) {
        trustedEmails.push(arr[i].email);
    }
}

console.log(trustedEmails);