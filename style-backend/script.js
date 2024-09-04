document.addEventListener('DOMContentLoaded', function () {
    // Menangani form komentar untuk blog pertama
    const form1 = document.getElementById('commentForm');
    const commentDisplay1 = document.getElementById('commentDisplay1');
    const savedComments1 = JSON.parse(localStorage.getItem('comments1')) || [];

    savedComments1.forEach(comment => {
        addCommentToDOM(commentDisplay1, comment.nama, comment.komentar);
    });

    form1.addEventListener('submit', function (event) {
        event.preventDefault();
        const nama = document.getElementById('nama').value;
        const komentar = document.getElementById('komentar').value;
        addCommentToDOM(commentDisplay1, nama, komentar);

        savedComments1.push({ nama, komentar });
        localStorage.setItem('comments1', JSON.stringify(savedComments1));

        form1.reset();
    });

    // Fungsi untuk menambahkan komentar ke DOM
    function addCommentToDOM(container, nama, komentar) {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<h3>${nama}:</h3> <p>${komentar}</p>`;
        container.appendChild(commentElement);
    }

    // Menangani form komentar untuk blog kedua
    const form2 = document.getElementById('commentForm2');
    const commentDisplay2 = document.getElementById('commentDisplay2');
    const savedComments2 = JSON.parse(localStorage.getItem('comments2')) || [];

    savedComments2.forEach(comment => {
        addCommentToDOM(commentDisplay2, comment.nama, comment.komentar);
    });

    form2.addEventListener('submit', function (event) {
        event.preventDefault();
        const nama = document.getElementById('nama2').value;
        const komentar = document.getElementById('komentar2').value;
        addCommentToDOM(commentDisplay2, nama, komentar);

        savedComments2.push({ nama, komentar });
        localStorage.setItem('comments2', JSON.stringify(savedComments2));

        form2.reset();
    });
});

// ANIMASI SCROLL

// Fungsi untuk memeriksa apakah elemen berada di viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Fungsi untuk menambahkan class 'show' ketika elemen berada di viewport
function animateOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-left-lazy');
    
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add("show");
        }
    });
}

// Menambahkan event listener untuk menjalankan animasi saat scroll
window.addEventListener('scroll', animateOnScroll);

// Memastikan animasi berjalan saat halaman pertama kali dimuat
window.addEventListener('load', animateOnScroll);


// HAMBURGER MENU

const navigasi = document.getElementById("navigation");
navigasi.style.maxHeight = "0px";

function toggleMenu() {
    navigasi.style.maxHeight = navigasi.style.maxHeight === "0px" ? "300px" : "0px";    
}