document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents the default form submission

            const phone = document.getElementById('phone').value;
            const otp = document.getElementById('otp').value;

            if (phone === "7989902682") {
                if (phone.length === 10 && otp.length === 4) {
                    window.location.href = "nextpage.html";
                } else {
                    alert("Please enter a valid 10-digit phone number and 4-digit OTP.");
                }
            } else {
                alert("Enter a valid number.");
            }
        });
    }
});
const v1=document.querySelectorAll(".container");
v1.addEventListener("mouseover",changemusic);
function changemusic(){
    var audio=new Audio("vinu/style/vinu1.mp3");
    audio.play();
}


