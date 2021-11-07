/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// 1. type error akan terjedi apabila operator atau argumen yang kita teruskan ke dalam suatu fungsi itu tidak sesuai
// 2. Reference error akan terjadi saat kita mencoba membuat suatu variable dan belum kita deklarasikan tetapi sudah kita akses/jalankan
// 3. Range error contohnya akan terjadi apabila kita membuat array dengan panjang tertentu dan belum kita deklarasikan/ belum kita tentukan panjangnya sehingga akan tidak valid

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// 1. hasilnya akan undefined(terjadi pada bagian 'console.log(salaryWithVar)'), dan pada bagian 'console.log(salaryWithVar) sudah menampilkan eror juga'
// 2. error tersebut masuk ke dalam Reference error
// 3. terjadi eror iersebut karena variable yang sudah kita buat tersebut belum di inisialisasikan
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
