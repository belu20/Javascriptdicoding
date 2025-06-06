/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

// TODO
function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else if (a == b) {
    return a;
  }
}

function power(a, b) {
  resultPower = a ** b;
  return resultPower;
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));
console.log(power(7, 3));
console.log(power(3, 3));
console.log(power(4, 0.5));

/**
 * Jangan hapus kode di bawah ini
 */
//map
const map = new Map();
map.set("name", "aras");
console.log(map.get("name")); // Output: aras

//Rest Operator
function myFunc(...manyMoreArgs) {
  console.log("manyMoreArgs", manyMoreArgs);
}

myFunc("one", "two", "three");
