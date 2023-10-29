const displayTime = document.querySelector(".display-time");

function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
    setTimeout(showTime, 1000);
}

showTime();

function updateDate() {
    let today = new Date();
    let dayNum = String(today.getDate()).padStart(2, '0');
    let month = today.getMonth();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",];


    const IDCollection = ["daynum", "month"];
    const val = [dayNum, months[month]];
    for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).innerText = val[i];
    }
}

updateDate();