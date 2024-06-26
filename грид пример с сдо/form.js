document.getElementById('report-error').addEventListener('click', function () {
    document.getElementById('form-container').style.display = 'block';
});

function closeForm() {
    document.getElementById('form-container').style.display = 'none';
}

document.getElementById('errorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
        alert('Форма отправлена успешно!');
        closeForm();
    } else {
        alert('Пожалуйста, заполните все поля правильно.');
    }
});
