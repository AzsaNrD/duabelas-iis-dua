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


if (week[dname] == 'Sabtu') {
    document.getElementById("absent").style.display = "none";
}
if (week[dname] == 'Minggu') {
    document.getElementById("absent").style.display = "none";
} else {
    document.getElementById("absent").style.display = "";
}
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

        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

    }, 1000
);

// Deadline

// pkwu
var countDatePkwu = new Date('September 29 2021 22:00:00').getTime();
var a = setInterval(function () {
    var now = new Date().getTime();
    gap = countDatePkwu - now

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

    document.getElementById("pkwu").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (h <= 0) {
        document.getElementById("pkwu").innerHTML = j + " Jam, " + m + " Menit, " + d + " Detik.";
    }
    if (j <= 0) {
        document.getElementById("pkwu").innerHTML = m + " Menit, " + d + " Detik.";
        document.getElementById("pkwu").style.color = "#FD8C04";
    }
    
    if (m <= 0) {
        document.getElementById("pkwu").innerHTML = d + " Detik.";
    }

    if (gap < 0) {
        clearInterval(a);
        document.getElementById("pkwu").innerHTML = "Telah lewat tenggat waktu!";
        document.getElementById("pkwu").style.color = "#FF0000";
    }

}, 1000);

// geografi
var countDateGeo = new Date('September 28 2021 12:00:00').getTime();
var b = setInterval(function () {
    var now = new Date().getTime();
    gap = countDateGeo - now

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


    document.getElementById("geografi").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (h <= 0) {
        document.getElementById("geografi").innerHTML = j + " Jam, " + m + " Menit, " + d + " Detik.";
    }
    if (j <= 0) {
        document.getElementById("geografi").innerHTML = m + " Menit, " + d + " Detik.";
        document.getElementById("pkwu").style.color = "#FD8C04";
    }
    if (m <= 0) {
        document.getElementById("geografi").innerHTML = d + " Detik.";
    }

    if (gap < 0) {
        clearInterval(b);
        document.getElementById("geografi").innerHTML = "Telah lewat tenggat waktu!";
        document.getElementById("geografi").style.color = "#FF0000";
    }

}, 1000);

// senbud
var countDateSenbud = new Date('October 04 2021 24:00:00').getTime();
var e = setInterval(function () {
    var now = new Date().getTime();
    gap = countDateSenbud - now

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

    document.getElementById("senbud").innerHTML = h + " Hari, " + j + " Jam, " + m + " Menit, " + d + " Detik.";

    if (h <= 0) {
        document.getElementById("senbud").innerHTML = j + " Jam, " + m + " Menit, " + d + " Detik.";
    }
    if (j <= 0) {
        document.getElementById("senbud").innerHTML = m + " Menit, " + d + " Detik.";
        document.getElementById("pkwu").style.color = "#FD8C04";
    }
    if (m <= 0) {
        document.getElementById("senbud").innerHTML = d + " Detik.";
    }

    if (gap < 0) {
        clearInterval(e);
        document.getElementById("senbud").innerHTML = "Telah lewat tenggat waktu!";
        document.getElementById("senbud").style.color = "#FF0000";
    }

}, 1000);


// Jadwal Pelajaran Filter
const filterItem = document.querySelector('.jadwalFilter');
const filterBox = document.querySelectorAll('.itemBox');

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("list")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterBox.forEach((itemBox) => {
                let filterJadwal = itemBox.getAttribute("data-name");
                if ((filterJadwal == filterName) || filterName == "semua") {
                    itemBox.classList.add("show");
                } else {
                    itemBox.classList.add("hide");
                    itemBox.classList.remove("show");
                }
            });
        }
    }
}