const API_URL = "http://localhost:5000";

async function loadMusic() {
    const res = await fetch(`${API_URL}/music`);
    const musicList = await res.json();

    const musicContainer = document.getElementById("music-list");
    musicContainer.innerHTML = musicList.map(music => `
        <div>
            <h3>${music.title} - ${music.artist}</h3>
            <p>${music.album} | ${music.genre}</p>
            <audio controls>
                <source src="${API_URL}${music.filePath}" type="audio/mp3">
            </audio>
            <div class="share-buttons">
                <a href="https://www.facebook.com/sharer/sharer.php?u=${API_URL}${music.filePath}" target="_blank">Facebook</a>
                <a href="https://api.whatsapp.com/send?text=Check this music: ${API_URL}${music.filePath}" target="_blank">WhatsApp</a>
                <a href="https://open.spotify.com/search/${music.title}" target="_blank">Spotify</a>
                <a href="https://www.youtube.com/results?search_query=${music.title} ${music.artist}" target="_blank">YouTube</a>
            </div>
        </div>
    `).join("");
}

loadMusic();