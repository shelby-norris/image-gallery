const gallery = document.getElementById("gallery");

// Fetch 12 random images from Lorem Picsum

async function fetchImages() {
  try {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=50");

    const data = await res.json();

    gallery.innerHTML = data

      .map((image) => {
        return `

 <div>

 <img src="${image.download_url}" alt="Random image by ${image.author}" />

 </div>

 `;
      })

      .join("");
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }
}

fetchImages();
