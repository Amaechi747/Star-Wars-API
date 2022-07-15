const body = document.querySelector('body');

// Create DOM variables
const container = document.createElement('div');
let mainDiv = document.createElement('div');
const themeDiv = document.createElement('div');
const themeDivText = document.createElement('h1');
const menu = document.createElement('div');
const textNode = document.createTextNode('STAR WARS');

let modal = document.createElement('div');

// Add div elements
body.appendChild(modal);
const modalBody = document.querySelector('.modal-body')

body.appendChild(container);
container.appendChild(themeDiv);
container.appendChild(mainDiv);
container.appendChild(menu)
themeDivText.appendChild(textNode);

themeDiv.appendChild(themeDivText);

// Add attributes
container.className = 'container-fluid';
themeDiv.id = 'theme';
themeDivText.id = 'starwars';
menu.id = 'navbar';

mainDiv.classList = 'main_div row justify-content-center mb-3';


menu.innerHTML +=
`   <div class= ""> 
        <button class="btn  btn-lg btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" 
        aria-controls="offcanvasRight"> <span class="magic">VIEW CHARACTER LIST</span> </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">CHARACTER LIST</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
           
        </div>
    </div>
`
let offCanvas = document.querySelector('.offcanvas');


// Get API data
const starWarsAPI = function (address){
    return fetch(address).then(res=>res.json()).then(json=> json.results)
}

function main() {
    // Data Store
    const heightDataStorage = [];
    const nameDataStorage = [];
    const genderDataStorage = [];

    // Star Wars Data
    const url = 'https://swapi.dev/api/people';
    let starWarsData = starWarsAPI(url).then(data => data.forEach((element, i ) => {

           mainDiv.innerHTML += `<div class="col-md-3 col-lg-2 mb-3 ms-3 d-flex align-items-end main-card-div">
            <div class="card border-danger" style="width: 10rem; ">
            <img src="../images/image${i}.jpeg" class="card-img-top" alt="...">
            <div class="card-body" style="padding: 10px;"> 
                <a href="#" class="btn btn-primary btn-sm" style="white-space: nowrap;">${element.name}</a>
            </div>
            </div>
            </div>`


            // Navbar Bar List
            let newDiv = document.createElement('div');
            newDiv.classList = 'offcanvas-body offcanvas-effect';
            let nameDiv = document.createElement('div');
            newDiv.innerText = `${ element.name}`;
            newDiv.id = `name${i}`;
            newDiv.appendChild(nameDiv);
            offCanvas.appendChild(newDiv);

            // Store Data
            nameDataStorage.push(element.name);
            genderDataStorage.push(element.gender);
            heightDataStorage.push(element.height);

            document.getElementById(`name${i}`).addEventListener('click', (e)=>{

                    for ( let j = 0; j < nameDataStorage.length; j++){
                        if ( i == j){
                            // Get data from storage
                            let elementName = nameDataStorage[j];
                            let elementGender = genderDataStorage[j];
                            let elementHeight = heightDataStorage[j];
                            alert(`Name: ${elementName}, Gender: ${elementGender}, Height: ${elementHeight}`);
                          
                        }
        
                    }
                   
                   
            });

    }));
     
 
    return starWarsData;
}

main();

