const url = ` https://api.dictionaryapi.dev/api/v2/entries/en/hello `;

const loadAudio = async () =>{
    const res = await fetch(url);
    const data = await res.json();
    showData(data)
}
loadAudio()

const showData = (data) =>{
    console.log(data);
    data[0].phonetics.forEach(element => {
        console.log(element);
        const audioParent = document.getElementById('audioP');
        const audio = document.createElement('audio');
        audio.src = element.audio;
        const button = document.createElement('button');
        button.innerText = 'Play'
        button.addEventListener('click', () =>audio.play())
        console.log(audio);
        audioParent.appendChild(button)
        audioParent.appendChild(audio)
    });
}