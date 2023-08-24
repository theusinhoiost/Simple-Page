let date = new Date().getUTCFullYear();

const button = document.querySelector('#send');
button.addEventListener('click', function () {
    const firstName = document.getElementById('first-name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;
    alert(`#JUST A TEST# --- Thanks ${surname},${firstName}, year ${date} ---#JUST A TEST#`) 
})
