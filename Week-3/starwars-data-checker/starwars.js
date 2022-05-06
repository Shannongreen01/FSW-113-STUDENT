// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

let queryType, itemID;
function fetchData(){
    queryType = document.getElementById('queryType').value;
    itemID = parseInt(document.getElementById('itemID').value);
    getFromSWAPI()
};

function getFromSWAPI() {
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(response => response.json())
    .then(function (data){
        console.log(data);
        let name = data.name;
        let height = data.height;
        let mass = data.mass;
        let hairColor = data.hair_color;
        let skinColor = data.skin_color;
        let eyeColor = data.eye_color;
        let birthYear = data.birth_year;
        let gender = data.gender;
        let climate = data.climate;
        let gravity = data.gravity;
        let terrain = data.terrain;
        let population = data.population;
    
        updateInfo(name,height,mass,hairColor,skinColor,eyeColor,birthYear,gender,climate,gravity,terrain,population,)
    })
    .catch(err => console.warn(err))
};
function updateInfo(name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender, climate, gravity, terrain, population,){

    //data will update respectivly if user selects people for an option
    if (queryType === "people") {
   
    let dataLabel1 = document.getElementById('name');
    let newData = document.createElement('div');
    newData.innerHTML = `Name: ${name}`;
    dataLabel1.append(newData);
    
    let dataLabel2 = document.getElementById('height');
    let newData2 = document.createElement('div');
    newData2.innerHTML = `Height: ${height}`;
    dataLabel2.append(newData2);

    let dataLabel3 = document.getElementById('mass');
    let newData3 = document.createElement('div');
    newData3.innerHTML = `mass: ${mass}`;
    dataLabel3.append(newData3);

    let dataLabel4 = document.getElementById('hair-color');
    let newData4 = document.createElement('div');
    newData4.innerHTML = `hair-color: ${hairColor}`;
    dataLabel4.append(newData4);

    let dataLabel5 = document.getElementById('skin-color');
    let newData5 = document.createElement('div');
    newData5.innerHTML = `skin-color: ${skinColor}`;
    dataLabel5.append(newData5);

    let dataLabel6 = document.getElementById('eye-color');
    let newData6 = document.createElement('div');
    newData6.innerHTML = `eye-color: ${eyeColor}`;
    dataLabel6.append(newData6);

    let dataLabel7 = document.getElementById('birth-year');
    let newData7 = document.createElement('div');
    newData7.innerHTML = `birth-year: ${birthYear}`;
    dataLabel7.append(newData7);

    let dataLabel8 = document.getElementById('gender');
    let newData8 = document.createElement('div');
    newData8.innerHTML = `gender: ${gender}`;
    dataLabel8.append(newData8);

//data will update respectivly if user selects planets for an option
} else if (queryType === "planets") {
    let dataLabel1 = document.getElementById('name');
    let newData = document.createElement('div');
    newData.innerHTML = `Name: ${name}`;
    dataLabel1.append(newData);

    let dataLabel2 = document.getElementById('height');
    let newData2 = document.createElement('div');
    newData2.innerHTML = `Climate: ${climate}`;
    dataLabel2.append(newData2);

    let dataLabel3 = document.getElementById('mass');
    let newData3 = document.createElement('div');
    newData3.innerHTML = `Gravity: ${gravity}`;
    dataLabel3.append(newData3);

    let dataLabel4 = document.getElementById('hair-color');
    let newData4 = document.createElement('div');
    newData4.innerHTML = `Terrain: ${terrain}`;
    dataLabel4.append(newData4);

    let dataLabel5 = document.getElementById('skin-color');
    let newData5 = document.createElement('div');
    newData5.innerHTML = `Population: ${population}`;
    dataLabel5.append(newData5);

} 
};

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.
