/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
//Answer:
    // 1. variabel scope pada javascrit ada 3 yaitu:
        // Block scope
        // Global scope
        // Local scope
    // 2. Penjelasan:
        // Block scope adalah area yang dicakup oleh scope yang tidak bisa diakses diluar {} (curly braces), atau yang berada di dalam statement if-else atau looping, atau bisa juga kita sebut dengan block statement.
        // Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.
        // Local scope adalah data yang hanya dapat terlibat atau diakses secara independendi dalam satu function tanpa terpengaruh function lainnya.
    // 3. Contoh:
        // Block scope: {let nama = dellila
                        //     console.log(nama)
                        // }
        // Global scope: let aku = dellila
                        // function name(){
                        //     return aku
                        // }
                        // console.log(aku)
        // Local scope: function name(){
                        // let aku = dellila
                        //     return aku
                        // }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// 1. yang tampil di console adalah "Mariah"
/// 2. karena parameter yang di masukan/gunakan itu bukan nama variable name yang berisi nama "Jhon Watson" melainkan "Mariah Carey"
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
