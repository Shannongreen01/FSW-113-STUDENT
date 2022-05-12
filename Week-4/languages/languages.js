// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
// use an array method to check whether the user included 'JavaScript' in their
// list of languages


const lang = 'JavaScript'
document.querySelector('#submit').addEventListener('click', function(){
    const nodeList = document.querySelectorAll('input');
    const aryStuffs = [...nodeList];
    chkLang(aryStuffs);
});
function chkLang(langs) {
    let result = false;
    langs.forEach((i) => {
        if (i.value === lang)
            result = true;
    });
    let obj = document.querySelector('#TestResult');
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`;
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`;
};
