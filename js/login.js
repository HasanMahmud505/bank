
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === "mahasanunigroup@gmail.com" && password === "123456"){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please valid Email & password !!');
    }
    
})


// document.getElementById('btn-submit').addEventListener('click', function(){
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
//     const passwordField = document.getElementById('user-password');
//     const password = passwordField.value;
//     console.log(email, password)

//     if(email === 'mahasanunigroup@gmail.com' && password === '12345'){
//         console.log('valid user')
//     }else{
//         console.log('invalid user')
//     }
// })