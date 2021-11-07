// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Sisa Gaji

const gajiPokok = 5000000;
const gajiBonus = (10 / 100) * gajiPokok;
const gajiLembur = (5 / 100) * gajiPokok;
const totalPemasukan = gajiPokok + gajiBonus + gajiLembur;
const pengeluaranGundam = 750000;
const pengeluaranMakan = 2000000;
const pengeluaranKost = 1000000;
const pengeluaranSubscription = 250000;
const totalPengeluaran =
  pengeluaranGundam +
  pengeluaranMakan +
  pengeluaranKost +
  pengeluaranSubscription;
const sisaGaji = totalPemasukan - totalPengeluaran;
console.log(sisaGaji);

// Soal - 02
// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(isSame);

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 1;
const studentB = 10;
const nilai = studentA >= studentB;
console.log(nilai);
/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber;
console.log(final);