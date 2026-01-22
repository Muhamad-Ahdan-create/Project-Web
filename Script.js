const API_URL = "https://script.google.com/macros/s/AKfycbyvpAdKwpjd1ktv5ZWCy8I2gi62bWwvShvwrvi9YsvNFr12sjLH4ZUMAUacDG-9auaVmw/exec";
const form = document.getElementById("orderForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nama: nama.value,
    hp: hp.value,
    produk: produk.value,
    jumlah: jumlah.value,
    mulai: mulai.value,
    selesai: selesai.value,
    catatan: catatan.value
  };

  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (result.status === "success") {
    alert("Pesanan berhasil dikirim, silahkan datang ke toko");
    form.reset();
  } else {
    alert("Pesanan gagal");
  }
});
