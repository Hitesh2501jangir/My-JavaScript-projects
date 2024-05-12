const ageCalculateBtn = document.getElementById('age-cal-btn');
const resultContainer = document.getElementById('result-container');
const result = document.getElementById('result')



ageCalculateBtn.addEventListener('click',()=>{
    const crrentDate = new Date();
    const birthDateInput = document.getElementById('age-input-holder').value;
    const birthdateParts = birthDateInput.split('-');
    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1]-1;
    const birthYear = birthdateParts[2];
    const birthDate = new Date(birthYear,birthMonth,birthDay);
    


    const isValidDate = (Date)=>{
        return (Object.prototype.toString.call(Date) === "[object Date]" && !isNaN(Date));
    }
    if(!isValidDate(birthDate)){
        alert('Invalid Date Format : Use DD-MM-YYYY');
        return;
    }

    const ageInMilliSecond = crrentDate - birthDate;
    const ageInSecond = Math.floor(ageInMilliSecond/1000);
    const ageInMinute = Math.floor(ageInSecond/60);
    const ageInHour = Math.floor(ageInMinute/60);
    const ageInDays = Math.floor(ageInHour/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);
    
    result.innerHTML = `
        <div class="result-item">
            <h4>BirthDate:</h4>
            <p>${birthDateInput}</p>
        </div>
        <div class="result-item">
            <h4>Age:</h4>
            <p>${ageInYears} Years ${ageInMonths%12} Month ${Math.floor(ageInDays%30.436875)} Days </p>
        </div>
        <div class="result-item">
            <h4>Month Passed:</h4>
            <p>${ageInMonths}</p>
        </div>
        <div class="result-item">
            <h4>Day Passed:</h4>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h4>Week Passed:</h4>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h4>Hour Passed:</h4>
            <p>${ageInHour}</p>
        </div>
        <div class="result-item">
            <h4>Minute Passed:</h4>
            <p>${ageInMinute}</p>
        </div>
        <div class="result-item">
            <h4>Second Passed:</h4>
            <p>${ageInSecond}</p>
        </div>
    `;
    resultContainer.style.display = "block";
    document.getElementById('age-input-holder').value = "";
    // setTimeout(() => {
    //     resultContainer.style.display = "none";
    // }, 5000);
})