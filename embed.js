let name = "Webster";

// embed a variable
alert( `Hello, ${name}!` ); 

// embed an expression
alert( `the result is ${1 + 2}` ); 

const htmlTemplate = 
    `<h2>Weather condition</h2>
     <p>The weather today will be cloudy</p>`;
    
document.getElementById('template').innerHTML = htmlTemplate;     