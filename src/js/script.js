// Kalender
var now = new Date();
var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear();

var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
var ids = ["nBulan", "nHari", "hTanggal", "tahun"];
var values = [months[mo], week[dname], dnum, yr];
for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];


// if (week[dname] == 'Sabtu') {
//     document.getElementById("absent").style.display = "none";
// }
// if (week[dname] == 'Minggu') {
//     document.getElementById("absent").style.display = "none";
// } else {
//     document.getElementById("absent").style.display = "";
// }
console.log('Sekarang hari ' + week[dname]);

// Jam
var hour = document.getElementById("jam");
var minute = document.getElementById("menit");
var seconds = document.getElementById("detik");

var clock = setInterval(
    function time() {
        var now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        // if (hr >= 3) {
        //     document.getElementById("waktu").innerHTML = "Selamat Pagi";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 6) {
        //     document.getElementById("absent").style.display = "";
        // }

        // if (hr >= 8) {
        //     document.getElementById("absent").style.display = "none";
        // }
        // if (hr >= 11) {
        //     document.getElementById("waktu").innerHTML = "Selamat Siang";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 15) {
        //     document.getElementById("waktu").innerHTML = "Selamat Sore";
        //     document.getElementById("absent").style.display = "none";
        // }

        // if (hr >= 19) {
        //     document.getElementById("waktu").innerHTML = "Selamat Malam";
        //     document.getElementById("absent").style.display = "none";
        // }

        if (week[dname] == 'Sabtu') {
            document.getElementById("absent").style.display = "none";

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Selamat Pagi";
            }
            
            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Selamat Siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Selamat Sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Selamat Malam";
            }
        } else if (week[dname] == 'Minggu') {
            document.getElementById("absent").style.display = "none";

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Selamat Pagi";
            }
            
            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Selamat Siang";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Selamat Sore";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Selamat Malam";
            }
        } else {
            document.getElementById("absent").style.display = "";

            if (hr >= 3) {
                document.getElementById("waktu").innerHTML = "Selamat Pagi";
                document.getElementById("absent").style.display = "none";
            }

            if (hr >= 6) {
                document.getElementById("absent").style.display = "";
            }

            if (hr >= 8) {
                document.getElementById("absent").style.display = "none";
            }

            if (hr >= 11) {
                document.getElementById("waktu").innerHTML = "Selamat Siang";
                document.getElementById("absent").style.display = "none";
            }

            if (hr >= 15) {
                document.getElementById("waktu").innerHTML = "Selamat Sore";
                document.getElementById("absent").style.display = "none";
            }

            if (hr >= 19) {
                document.getElementById("waktu").innerHTML = "Selamat Malam";
                document.getElementById("absent").style.display = "none";
            }
        }


        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

    }, 1000
);

// Deadline

// Inggris
var countDateInggris= new Date('October 21 2021 24:00:00').getTime();
var a = setInterval(function () {
    var now = new Date().getTime();
    gap = countDateInggris - now

    var detik = 1000;
    var menit = detik * 60;
    var jam = menit * 60;
    var hari = jam * 24;

    var h = Math.floor(gap / (hari));
    var j = Math.floor((gap % (hari)) / (jam));
    var m = Math.floor((gap % (jam)) / (menit));
    var d = Math.floor((gap % (menit) / (detik)));

    if (h < 10) {
        h = "0" + h;
    }
    if (j < 10) {
        j = "0" + j;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (d < 10) {
        d = "0" + d;
    }

    document.getElementById("inggris").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (h <= 0) {
        document.getElementById("inggris").innerHTML = j + " Jam, " + m + " Menit, " + d + " Detik.";
    }
    if (j <= 0) {
        document.getElementById("inggris").innerHTML = m + " Menit, " + d + " Detik.";
        document.getElementById("inggris").style.color = "#FD8C04";
    }

    if (m <= 0) {
        document.getElementById("inggris").innerHTML = d + " Detik.";
    }

    if (gap < 0) {
        clearInterval(a);
        document.getElementById("inggris").innerHTML = "Telah lewat tenggat waktu!";
        document.getElementById("inggris").style.color = "#FF0000";
    }

}, 1000);

// Jadwal Pelajaran ganti hari
const senin = document.getElementById('senin');
const selasa = document.getElementById('selasa');
const rabu = document.getElementById('rabu');
const kamis = document.getElementById('kamis');
const jumat = document.getElementById('jumat');
const teks = document.getElementById('infoJadwal');
const seninBesok = document.getElementById('infoSeninBesok');
const selasaBesok = document.getElementById('infoSelasaBesok');
const rabuBesok = document.getElementById('infoRabuBesok');
const kamisBesok = document.getElementById('infoKamisBesok');
const jumatBesok = document.getElementById('infoJumatBesok');

if (week[dname] == 'Senin') {
    senin.style.display = '';
    teks.textContent = 'Pelajaran hari ini adalah';
    seninBesok.style.display = 'none';
    selasa.style.display = '';
    rabu.style.display = 'none';
    kamis.style.display = 'none';
    jumat.style.display = 'none';
    selasaBesok.style.display = '';
    rabuBesok.style.display = 'none';
    kamis.style.display = 'none';
    kamisBesok.style.display = 'none';
    jumat.style.display = 'none';
    jumatBesok.style.display = 'none';
} else if (week[dname] == 'Selasa') {
    senin.style.display = 'none'
    seninBesok.style.display = 'none'
    selasa.style.display = '';
    teks.textContent = 'Pelajaran hari ini adalah';
    selasaBesok.style.display = 'none';
    rabu.style.display = '';
    rabuBesok.style.display = '';
    kamis.style.display = 'none';
    kamisBesok.style.display = 'none';
    jumat.style.display = 'none';
    jumatBesok.style.display = 'none';
} else if (week[dname] == 'Rabu') {
    senin.style.display = 'none'
    seninBesok.style.display = 'none'
    selasa.style.display = 'none'
    selasaBesok.style.display = 'none'
    rabu.style.display = '';
    teks.textContent = 'Pelajaran hari ini adalah';
    rabuBesok.style.display = 'none';
    kamis.style.display = '';
    kamisBesok.style.display = '';
    jumat.style.display = 'none';
    jumatBesok.style.display = 'none';
} else if (week[dname] == 'Kamis') {
    senin.style.display = 'none'
    seninBesok.style.display = 'none'
    selasa.style.display = 'none'
    selasaBesok.style.display = 'none'
    rabu.style.display = 'none'
    rabuBesok.style.display = 'none'
    kamis.style.display = '';
    kamisBesok.style.display = 'none';
    teks.textContent = 'Pelajaran hari ini adalah';
    jumat.style.display = '';
    jumatBesok.style.display = '';
} else if (week[dname] == "Jum'at") {
    senin.style.display = 'none'
    seninBesok.style.display = 'none'
    selasa.style.display = 'none'
    selasaBesok.style.display = 'none'
    kamis.style.display = 'none'
    kamisBesok.style.display = 'none'
    teks.textContent = 'Pelajaran hari ini adalah';
    rabu.style.display = 'none';
    rabuBesok.style.display = 'none';
    kamis.style.display = 'none';
    kamisBesok.style.display = 'none';
    jumat.style.display = '';
    jumatBesok.style.display = 'none';
}  else {
    senin.style.display = '';
    seninBesok.style.display = ''
    selasa.style.display = 'none';
    selasaBesok.style.display = 'none'
    rabu.style.display = 'none';
    rabuBesok.style.display = 'none'
    kamis.style.display = 'none';
    kamisBesok.style.display = 'none'
    jumat.style.display = 'none';
    jumatBesok.style.display = 'none'
    teks.textContent = 'Hari ini tidak ada jadwal pelajaran..';
}


// Jadwal Pelajaran Filter
// const filterItem = document.querySelector('.jadwalFilter');
// const filterBox = document.querySelectorAll('.itemBox');

// window.onload = () => {
//     filterItem.onclick = (selectedItem) => {
//         if (selectedItem.target.classList.contains("list")) {
//             filterItem.querySelector(".active").classList.remove("active");
//             selectedItem.target.classList.add("active");
//             let filterName = selectedItem.target.getAttribute("data-name");
//             filterBox.forEach((itemBox) => {
//                 let filterJadwal = itemBox.getAttribute("data-name");
//                 if ((filterJadwal == filterName) || filterName == "semua") {
//                     itemBox.classList.add("show");
//                 } else {
//                     itemBox.classList.add("hide");
//                     itemBox.classList.remove("show");
//                 }
//             });
//         }
//     }
// }