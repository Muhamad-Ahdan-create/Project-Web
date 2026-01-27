// animasi konten
function moveleft() {
  let elem = document.getElementsByClassName("conten")[0];
  let pos = 350;

  let id = setInterval(() => {
    if (pos <= 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + "px";
    }
  }, 5);
}

// animasi tombol
const tombol = document.getElementsByClassName("back-btn")[0];
let posisi = 0;

function bawah() {
  if (posisi < 10) {
    posisi += 2;
    tombol.style.top = posisi + "px";
    requestAnimationFrame(bawah);
  }
}

// efek ketik heading
const teks = "about us";
const heading = document.querySelector(".heading span");
let i = 0;

function ketik() {
  if (i < teks.length) {
    heading.innerHTML += teks.charAt(i);
    i++;
    setTimeout(ketik, 150);
  }
}

window.addEventListener("load", () => {
  ketik();
  bawah();
  moveleft();

  // video hover (aman)
  const video = document.querySelector("video");
  if (video) {
    video.addEventListener("mouseenter", () => {
      video.classList.add("hover");
    });
    video.addEventListener("mouseleave", () => {
      video.classList.remove("hover");
    });
  }

  // FORM kirim ke spreadsheet
  const form = document.getElementById("aboutForm");
  const statusText = document.getElementById("status");

  if (form) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwDWoj9MKQnQdu0nBNS25XgWIqOOHbyRrLtj_adLtMZHEF28BEfOZarGO_StMioGO6VaA/exec";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      statusText.innerHTML = "Sedang mengirim...";

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      })
        .then(() => {
          statusText.innerHTML = "Data berhasil dikirim!";
          form.reset();
        })
        .catch((err) => {
          statusText.innerHTML = "Gagal mengirim data!";
          console.error(err);
        });
    });
  }
});
