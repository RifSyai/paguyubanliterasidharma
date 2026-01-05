fetch('data/anggota.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('anggota-list');

    data.forEach(a => {
      container.innerHTML += `
        <div class="anggota-card">
          <img src="${a.foto}" class="foto-anggota" alt="${a.nama}">
          <div class="nama-anggota">${a.nama}</div>
          <div class="motto-anggota">"${a.motto}"</div>
        </div>
      `;
    });
  });
