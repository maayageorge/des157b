AOS.init();

(function(){
    "use strict"; 
    console.log("reading js"); 

    let globalData;

    async function getData() {
        try {
            const myData = await fetch('data.json');
            const data = await myData.json();
            globalData = data;
        
            document.querySelector('nav.bottom-nav ul').innerHTML = createButtons(data);

            createEvents();
            
            const initialItem = 'Algikicks'; 
            updateInterface(initialItem, globalData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function createButtons(data){
        let html = '';
        const items = Object.keys(data['Fashion of the future']);
        items.forEach(function(item){
            const imageName = item.toLowerCase().replace(/ /g, '');
            html += `<li><button id="${item}"><img src="images/${imageName}.jpg" alt="${item}"></button></li>`;
        });
        return html;
    }

    function createEvents() {
        const buttons = document.querySelectorAll('nav.bottom-nav ul button');
    
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                const item = event.currentTarget.id;
                updateInterface(item, globalData);

                const info = document.querySelector('#info');
                info.classList.remove('hidden');
                info.classList.add('visible');
            });
        });
    }

    function updateInterface(update, jsonData) {
        console.log(jsonData);
        const { title, description } = jsonData['Fashion of the future'][update];
    
        const info = document.getElementById('info');
        const img = info.querySelector('#info img');
        const item = info.querySelector('#item');
    
        img.src = `images/${update}.jpeg`;
        img.alt = `${update} cover`;
    
        item.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
    }

    getData();
    
})();
