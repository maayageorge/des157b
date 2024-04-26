(function(){
    "use strict"; 
    console.log("reading js"); 

    let globalData;

    async function getData() {
        const myData = await fetch('data.json');
        const data = await myData.json();
        globalData = data;
    
        document.querySelector('nav ul').innerHTML = createButtons(data);

        createEvents();
        const initialDay = 'Monday'; // Adjust this to your initial day
        updateInterface(initialDay, globalData);
    }

    function createButtons(data){
        let html = '';
        const daysOfWeek = Object.keys(data['Top Songs of the Week']);
        console.log(daysOfWeek);
        daysOfWeek.forEach(function(day){
            html += `<li><button id="${day}">${day}</button></li>`;
        });
        return html;
    }

    function createEvents() {
        const buttons = document.querySelectorAll('button');
    
        for (const button of buttons) {
            button.addEventListener('click', function(event) {
                const day = event.target.id;
                updateInterface(day, globalData);
            });
        }
    }

    function updateInterface(day, jsonData){
        console.log(jsonData);
        const songTitle = document.querySelector('#song h2');
        const img = document.querySelector('img');
    
        const { song, artist } = jsonData['Top Songs of the Week'][day];
        songTitle.innerHTML = `${song} <br> by ${artist}`;
    
        const imageName = day.toLowerCase();
        img.src = `images/${imageName}.jpg`; 
        img.alt = `${day} cover`;
    }

    getData();
})();