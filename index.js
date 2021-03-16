// Write your code here!

/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
// const newHeader = document.createElement("h1");
// newHeader.id = "victory"
// newHeader.innerHTML = "Flatiron School is the champion!";


const newHeader = document.createElement('h1');
document.body.append(newHeader);
newHeader.setAttribute('id', 'victory');
document.getElementById('victory').innerHTML = "Name is the champion"