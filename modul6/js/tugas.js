$(document).ready(function () {
  function simpanPemesanan() {
    // Ambil data dari form menggunakan jQuery
    const namaPemesan = $("#namaPemesan").val();
    const jenisKelamin = $("#jenisKelamin").val();
    const nomorIdentitas = $("#nomorIdentitas").val();
    const hargaManual = parseInt($("#harga").val(), 10);
    const durasi = parseInt($("#durasiMenginap").val(), 10);
    const breakfast = $("#breakfast").is(":checked");
    const tanggalPesan = $("#tanggalPesan").val();

    // Validasi input data
    if (nomorIdentitas.length !== 16 || isNaN(nomorIdentitas)) {
      alert("Isian salah, nomor identitas harus 16 digit!");
      return;
    }
    if (!durasi || durasi <= 0 || isNaN(durasi)) {
      alert("Durasi menginap harus diisi dengan angka yang valid!");
      return;
    }

    // Hitung harga total
    let totalHarga = hargaManual * durasi;
    let diskon = 0;
    if (durasi > 3) {
      diskon = totalHarga * 0.1; // Diskon 10%
      totalHarga *= 0.9; // Terapkan diskon
    }

    if (breakfast) {
      totalHarga += 80000 * durasi; // Biaya breakfast Rp 80.000 per hari
    }

    // Kirim data ke halaman dataPemesanan dengan query string
    const queryString = `?namaPemesan=${encodeURIComponent(
      namaPemesan
    )}&jenisKelamin=${encodeURIComponent(
      jenisKelamin
    )}&nomorIdentitas=${encodeURIComponent(
      nomorIdentitas
    )}&tanggalPesan=${encodeURIComponent(
      tanggalPesan
    )}&durasi=${durasi}&diskon=${diskon}&totalHarga=${totalHarga}`;

    // Arahkan ke halaman dataPemesanan dan kirim data
    window.location.href = "dataPemesanan.html" + queryString;
  }

  // Event listener untuk tombol simpan
  $(".simpan").on("click", function () {
    simpanPemesanan();
  });
});
