function Yes() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
    window.location.href = 'When.html';
    }, 300);
}

function No2() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
    window.location.href = 'No.html'; 
    }, 1000);
}

function playSound() {
     var sound = document.getElementById("sound");
    sound.play();
    sound.volume= 0.1;
    sound.currentTime = 0;
}

function goBack() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.history.back();
    }, 1000);
}

function goNext() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'Project3.html';
    }, 1000);
}

function Next2() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'Project2.html';
    }, 1000);
}

function Next4() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'Project4.html';
    }, 1000);
}

function goNext5() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'flowers.html';
    }, 1000);
}

function restart() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function playSoundAndShowImage() {
    playSound();
    var imageContainer = document.getElementById("image-container");
    var img = document.createElement("img");
    img.src = "/celine/celine.jpg";
    img.style.position = "fixed";
    img.style.bottom = "10px";
    img.style.left = "80px";
    img.style.width = "100px";
    img.style.height = "100px";
    imageContainer.appendChild(img);

    setTimeout(function() {
        imageContainer.removeChild(img);
    }, 1000);
}

function limitCheckboxSelection(checkbox) {
    var checkboxes = document.querySelectorAll('input[name="dessert"]:checked');
    if (checkboxes.length > 3) {
        checkbox.checked = false;
        alert("Damn girl chill, you know your mans ain't that rich");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'Project.html';
        }, 1000);
    });

    flatpickr("#datetime-picker", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        theme: "dark"
    });

    flatpickr("#time-picker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        theme: "dark"
    });
});