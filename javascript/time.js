document.addEventListener('DOMContentLoaded', () => {
    const accessButton = document.getElementById('accessButton');

    accessButton.addEventListener('click', () => {

        const currentDate = new Date();

        const targetDate = new Date('2024-12-15T00:00:00');

        if (currentDate >= targetDate) {
           
            window.location.href = './index.html';
        } else {

            alert('Access is not yet allowed. Please try again after December 15, 2024, at 12:00 AM.');
        }
    });
});
