document.addEventListener('DOMContentLoaded', function(){

    const formForAddress = document.querySelector('form');
    const newHomeAddress = document.getElementById('homeAddressInput');
    const newWorkAddress = document.getElementById('workAddressInput');
    const submitFormBtn = document.getElementById('submitBtn');

    submitFormBtn.addEventListener("click", function() {
        console.log('btn clicked');
        console.log('hemadress:');
        console.log(newHomeAddress.value);
        
        
        
        localStorage.setItem("homeAddress", newHomeAddress.value);
        localStorage.setItem("workAddress", newWorkAddress.value);
    });

    if (localStorage.getItem("homeAddress") !== null && localStorage.getItem("workAddress") !== null) {
        formForAddress.style.display = "none";
    }
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(this).parent().parent().addClass('active');
        }
        else if($(this).prop("checked") == false){
            $(this).parent().parent().removeClass('active');
        }
    })
});