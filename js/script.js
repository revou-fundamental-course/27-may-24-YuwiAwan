// Function untuk relace name
function replaceName(){
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML=name
    }
    
    replaceName();

    document.getElementById('formulir').addEventListener('submit', function(event) {
        event.preventDefault();  // Mencegah pengiriman formulir default
    
    
        //membuat tanggal sekarang
        const now = new Date();
        const dateTimeString = now.toLocaleString();
       
    
        // Ambil nilai dari formulir
       
        const nama = document.getElementById('nama').value;
        const tglLahir = document.getElementById('tgl_lahir').value;
        const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
    
        // Buat teks hasil inputan
        const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;
    
        // Tampilkan hasil inputan di text area
        document.getElementById('result').value = resultText;
    
        // Tampilkan pesan alert
        alert('Masukan Anda sedang di proses!!!');
        document.getElementById('nama').value ="";
        document.getElementById('tgl_lahir').value ="";
        document.getElementById('pesan').value ="";
        
    });

    //! Banner slide
let slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
    showDivs((slideIndex += n))
}

function showDivs(n) {
    let imgList = document.getElementsByClassName("banner")
    if (n > imgList.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = imgList.length
    }

    for (let x = 0; x < imgList.length; x++) {
    imgList[x].style.display = "none"
    }

    imgList[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDivs(1)
}, 5000)

// Function untuk Toggler Navbar
function toggleNavbar() {
    var nav = document.getElementById("navbar-nav");
    nav.classList.toggle("active");
}