function adjustFont() {
    document.getElementById('student-info').style.fontFamily = 'Courier New, monospace';
    document.getElementById('student-info').style.color = 'blue';
}

function adjustProfile() {
    document.getElementById('profile-pic').style.borderRadius = '50%';
    document.getElementById('profile-pic').style.borderColor = 'red';
}

function changePhoto() {
    document.getElementById('profile-pic').src = 'life_photo.jpg';
}
