document.addEventListener('DOMContentLoaded', function(){

    const formForAddress = document.querySelector('form');
    const newHomeAddress = document.getElementById('homeAddressInput');
    const newWorkAddress = document.getElementById('workAddressInput');
    const submitFormBtn = document.getElementById('submitBtn');

    submitFormBtn.addEventListener("click", function() {    
        localStorage.setItem("homeAddress", newHomeAddress.value);
        localStorage.setItem("workAddress", newWorkAddress.value);
    });

    if (localStorage.getItem("homeAddress") !== null && localStorage.getItem("workAddress") !== null) {
        formForAddress.style.display = "none";
    }
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(this).parent().parent().parent().addClass('active');
        }
        else if($(this).prop("checked") == false){
            $(this).parent().parent().parent().removeClass('active');
        }
    })
    const travelHomeBtn = document.getElementById('homeBtn');
    const travelWorkBtn = document.getElementById('workBtn');
    const travelInfoHome = document.getElementById('tableTravelInfoHome');
    const travelInfoWork = document.getElementById('tableTravelInfoWork');
    travelHomeBtn.addEventListener("click", function() {
        travelInfoWork.style.display = "none";
        travelInfoHome.style.display = "table";
    })
    travelWorkBtn.addEventListener("click", function() {
        travelInfoHome.style.display = "none";
        travelInfoWork.style.display = "table";
    })
});