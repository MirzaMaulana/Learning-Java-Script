// Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
// Jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const input = "12345"; //KONFERENSI STRING KE NUMBER
const number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(number);

console.info(Number("salah"));

console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.NaN);

const data = Number("eko");
console.info(Number.isInteger(data)); //mengecek tipe data menggunakan function isInteger dan is NaN
console.info(Number.isNaN(data));

const value = Number("12345");
console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US"));
