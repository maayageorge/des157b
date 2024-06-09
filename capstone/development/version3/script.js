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
            const imageName = item.toLowerCase().replace(/\s+/g, ''); //remove whitespace characters from string
            console.log('imageName:', imageName);
            html += `<li><button id="${item}"><img src="images/navimages/${imageName}.png" alt="${item}"></button></li>`;
        });
        return html;
    }

    function populateButtons(data) {
        const items = Object.keys(data['Fashion of the future']);
        const html = items.map(item => {
            const image = data['Fashion of the future'][item].image;
            return `<li><button id="${item}"><img src="${image}" alt="${item}"></button></li>`;
        }).join('');

        document.querySelector('nav.bottom-nav ul').innerHTML = html;
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

                const about = document.querySelector('.about');
                about.classList.remove('hidden');
                about.classList.remove('visible');
                AOS.refresh();
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
        AOS.refresh();
    }

    getData();

    //chart.js javascript below
    const data1 = {
        datasets: [{
            data: [10, 100],
            backgroundColor: [
                'rgb(105,105,105)',
                'rgb(220,220,220)'
            ],
            hoverOffset: 2,
            hoverBackgroundColor: [
                'rgb(255, 99, 132)',  
                'rgb(220,220,220)'
            ]
        }]
    };

    const data2 = {
        datasets: [{
            data: [20, 100],
            backgroundColor: [
                'rgb(105,105,105)',
                'rgb(220,220,220)'
            ],
            hoverOffset: 2,
            hoverBackgroundColor: [
                'rgb(54, 162, 235)', 
                'rgb(220,220,220)'
            ]
        }]
    };

    const data3 = {
        datasets: [{
            data: [35, 100],
            backgroundColor: [
                'rgb(105,105,105)',
                'rgb(220,220,220)'
            ],
            hoverOffset: 2,
            hoverBackgroundColor: [
                'rgb(65, 224, 102)',  
                'rgb(220,220,220)'
            ]
        }]
    };

    const config1 = {
        type: 'doughnut',
        data: data1,
        options: { //disables labels on hover
            plugins: {
                tooltip: {
                    enabled: false 
                }
            }
        }
    };

    const config2 = {
        type: 'doughnut',
        data: data2,
        options: { //disables labels on hover
            plugins: {
                tooltip: {
                    enabled: false 
                }
            }
        }
    };

    const config3 = {
        type: 'doughnut',
        data: data3,
        options: { //disables labels on hover
            plugins: {
                tooltip: {
                    enabled: false 
                }
            }
        }
    };

    const chart1 = new Chart(
        document.getElementById('chart1'),
        config1
    );

    const chart2 = new Chart(
        document.getElementById('chart2'),
        config2
    );

    const chart3 = new Chart(
        document.getElementById('chart3'),
        config3
    );

    // change description text color on chart hover
    const desc1 = document.getElementById('desc1');
    const desc2 = document.getElementById('desc2');
    const desc3 = document.getElementById('desc3');

    const ch1 = document.getElementById('chart1');
    const ch2 = document.getElementById('chart2');
    const ch3 = document.getElementById('chart3');

    ch1.addEventListener('mouseover', () => {
        desc1.style.color = 'rgb(255, 99, 132)'; 
    });
    ch1.addEventListener('mouseout', () => {
        desc1.style.color = ''; 
    })

    ch2.addEventListener('mouseover', () => {
        desc2.style.color = 'rgb(54, 162, 235)'; 
    });
    ch2.addEventListener('mouseout', () => {
        desc2.style.color = ''; 
    })

    ch3.addEventListener('mouseover', () => {
        desc3.style.color = 'rgb(65, 224, 102)'; 
    });
    ch3.addEventListener('mouseout', () => {
        desc3.style.color = ''; 
    })
            
})();
