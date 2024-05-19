const paragraph = ["A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects.","The environment refers to the surroundings in which life exists on earth. Components like animals, humans, sunlight, water, trees, and air make up the environment. They are the earth's living and non-living components. Living organisms include trees, humans, and animals.","Artificial Intelligence is the theory and development of computers, which imitates the human intelligence and senses, such as visual perception, speech recognition, decision-making, and translation between languages. Artificial Intelligence has brought a revolution in the world of technology.","A machine is a physical system that uses power to apply forces and control movement to perform an action. The term is commonly applied to artificial devices, such as those employing engines or motors, but also to natural biological macromolecules, such as molecular machines.","India is a democratic country where people select their government of their own choice, also people have the rights to do the work of their choice. There are two types of democracy: direct and representative and hybrid or semi-direct democracy. There are many decisions which are made under democracies.","Transport, or transportation, is moving people or things from one place to another place. Transport can be divided into infrastructure, vehicles and operations. Many different types of vehicles including carriages, trams, trains, cars, bicycles, balloons, planes, ships, airships and yachts.","Technology is a necessity of the modern lifestyle. Every day there are new ideas and advancements in the technology as the world becomes more involved in discovering and utilizing the potential of natural resources. Technology has improved human lives significantly by providing convenience and efficiency.","Pollution is a big problem that happens when harmful things get into the air, water, and land around us. It can be from factories, cars, or even how we throw away our trash. Pollution is not good because it can make people and animals sick and can even change the weather.","Holi is a two-day festival. It is celebrated with great joy in India and other countries. It is a colourful festival with people of all religions celebrating with joy. After burning the Holika idol, people gather and daub colours at each other.","Diwali is often called the 'Festival of Lights', and is celebrated by lighting lamps, and bursting crackers and fireworks. It is a festival which commemorates the victorious return of Lord Rama to Ayodhya after saving his wife Sita from the demon king Ravana.","Raksha Bandhan is celebrated as a festival of peace and harmony. On this day, the sisters tie a thread or a bracelet to their brothers and the brothers, in return, promise to be their sisters' protectors for their entire life. The Rakhi, or the thread, is a pious symbol of being someone's protector.","Summertime is the most awaited time of any student's life. It gives them a break from the scorching sun and blazing heat. The summer months are quite hot, however, students love them because they bring a sense of calmness due to the vacations. It frees them from the monotonous and dull routine of school and studies."];

const item = document.getElementById('input-field');
const generateButton = document.getElementById('gen-btn');
const resultContainer = document.getElementById('result-container');
const copyIcon = document.getElementById('copy-para');


const generateParagraph = (NumOfPara)=>{
    for(let i=0;i<NumOfPara;i++){
        let randomNum = Math.floor(Math.random()*11);
        console.log(randomNum);
        const paraTag = document.createElement('p');
        paraTag.innerText = paragraph[randomNum];
        resultContainer.append(paraTag);
    }
}


generateButton.addEventListener('click',()=>{
    if(item.value<=0){
        resultContainer.innerHTML = "Sorry!";
        alert("Value Should Not Be Zero")
    }else if(item.value>11){
        resultContainer.innerHTML = "";
        generateParagraph(1);
    }else{
        resultContainer.innerHTML = "";
        generateParagraph(item.value);
    }
})

copyIcon.addEventListener('click',()=>{
    navigator.clipboard.writeText(resultContainer.innerText);
})