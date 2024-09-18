document.getElementById('btnLogIn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber= document.getElementById('phone_number').value
  const pinNumber =document.getElementById('pin_number').value 


//   console.log(phoneNumber,pinNumber);
if(phoneNumber === '5' && pinNumber === '1234'){

    console.log('logged');
    window.location.href = '/home.html'
}
else{
    alert('wrong')
}
})
