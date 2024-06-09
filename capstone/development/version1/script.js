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
            const imageName = item.toLowerCase();
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

    function updateInterface(item, data) {
        const { image, title, description } = data['Fashion of the future'][item];
    
        const info = document.querySelector('#info');
        const img = info.querySelector('#cover');
        const content = info.querySelector('#item');
    
        img.src = image;
        img.alt = `${item} cover`;
    
        content.querySelector('h2').textContent = title;
        content.querySelector('p').textContent = description;
    
        info.classList.remove('hidden');
        info.classList.add('visible');
    }

    getData();
    
})();
