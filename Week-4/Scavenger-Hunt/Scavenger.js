// Create an event listenter for the 'submit' button that calls the combineLists() function

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.
document.getElementById('submit').addEventListener('click', combineLists);
function combineLists() {
    let scav0 = document.getElementById('scavenger-0').value;
    let scav0Array = [scav0];
    let scav1 = document.getElementById('scavenger-1').value;
    let scav1Array = [scav1];
    let scav2 = document.getElementById('scavenger-2').value;
    let scav2Array = [scav2];
    let scav3 = document.getElementById('scavenger-3').value;
    let scav3Array = [scav3];
    let combinedArrays = [...scav0Array, ...scav1Array, ...scav2Array, ...scav3Array];
    console.log(combinedArrays);
    combinedArrays.sort();
    let link = document.getElementById('AllItems');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = combinedArrays;
    link.append(newDiv);
};
