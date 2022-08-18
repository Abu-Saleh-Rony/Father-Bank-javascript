document.getElementById('submit-Button').addEventListener('click', function () {
    const userMail = document.getElementById('mail-id');
    let email = userMail.value;
    console.log(userMail.value);

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(password);

    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = "bank.html";
    }
    else { console.log('invalid mail') }
})