var lagi = true;
while(lagi){

// Pilihan Player
var orang = prompt('Pilih: Kertas, Gunting, Batu');

// Pilihan Computer
// Membangkitkan Bilangan Random
var comp = Math.random();
    if(comp < 0.36){
        comp = 'Kertas'
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'Gunting'
    } else {
        comp = 'Batu'
    }

var hasil = '';
// Menentukan Rules
    if (orang == comp){
        hasil = 'Seri';
    }else if (orang == 'Kertas'){
        hasil = (comp == 'Batu') ? 'Menang' : 'Kalah';
    }else if (orang == 'Gunting'){
        hasil = (comp == 'Kertas') ? 'Menang' : 'Kalah';
    }else if (orang == 'Batu'){
        hasil = (comp == 'Gunting') ? 'Menang' : 'Kalah';
    } else {
        hasil = 'Memasukkan Pilihan Yang Salah!';
    }

// Tampilkan Hasil
alert('Kamu memilih: '+ orang+'\n Komputer memilih: '+ comp +'\n  Maka Hasilnya: Kamu ' + hasil);
lagi = confirm('Lagi?');
}

alert('Terimakasih Sudah Bermain');
