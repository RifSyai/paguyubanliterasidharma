fetch('data/ebook.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('ebook-list');

    data.forEach(ebook => {
      container.innerHTML += `
        <div class="ebook-card">
          <h3>${ebook.judul}</h3>
          <p>${ebook.deskripsi}</p>
          <a href="${ebook.file}" target="_blank" class="btn">
            Baca / Unduh
          </a>
        </div>
      `;
    });
  });
