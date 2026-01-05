fetch('data/opini.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('daftar-opini');

    data.forEach(opini => {
      const artikel = document.createElement('article');

      artikel.innerHTML = `
        <h2>${opini.judul}</h2>
        <p><strong>${opini.penulis}</strong> | ${opini.tanggal}</p>
        <p>${opini.isi}</p>
        <hr>
      `;

      container.appendChild(artikel);
    });
  })
  .catch(error => {
    console.error('Gagal memuat opini:', error);
  });
