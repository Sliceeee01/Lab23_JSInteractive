const form = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const clearBtn = document.getElementById("clearBtn");
const profileCard = document.getElementById("profileCard");
const errorMsg = document.getElementById("errorMsg");


const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayCity = document.getElementById("displayCity");
const displayHobby = document.getElementById("displayHobby");


function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add("show");
    setTimeout(() => {
        errorMsg.classList.remove("show");
    }, 3000);
}

function validateForm() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const city = cityInput.value.trim();
    const hobby = hobbyInput.value.trim();
    
    if (!name) {
        showError("Ошибка: Введите имя");
        return false;
    }
    
    if (!age) {
        showError("Ошибка: Введите возраст");
        return false;
    }
    
    if (isNaN(age) || age < 0 || age > 150) {
        showError("Ошибка: Введите корректный возраст (0-150)");
        return false;
    }
    
    if (!city) {
        showError("Ошибка: Введите город");
        return false;
    }
    
    if (!hobby) {
        showError("Ошибка: Введите хобби");
        return false;
    }
    
    return true;
}
function displayUserInfo() {
    displayName.textContent = nameInput.value.trim();
    displayAge.textContent = ageInput.value.trim();
    displayCity.textContent = cityInput.value.trim();
    displayHobby.textContent = hobbyInput.value.trim();
    profileCard.style.display = "block";
}
function saveProfile(event) {
    event.preventDefault();
    
    if (validateForm()) {
        displayUserInfo();
    }
}
function clearAllData() {
    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    hobbyInput.value = "";
    profileCard.style.display = "none";
    errorMsg.classList.remove("show");
}
form.addEventListener("submit", saveProfile);
clearBtn.addEventListener("click", clearAllData);