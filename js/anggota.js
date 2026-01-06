fetch('data/anggota.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.anggota-grid');
    container.innerHTML = ''; // clear dulu

    data.forEach(a => {
      container.innerHTML += `
        <div class="anggota-card">
          <img src="${a.foto}" alt="${a.nama}">
          <h3>${a.nama}</h3>
          <p>"${a.motto}"</p>
        </div>
      `;
    });
  });
