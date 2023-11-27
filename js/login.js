if (localStorage.getItem('user_id')) {
    window.location.href = 'profile.html?profileid='+localStorage.getItem('user_id');
}

$("#login-form").submit(function(e) {

    e.preventDefault(); 
    var form = $(this);
    
    
    $.ajax({
        type: "POST",
        url: "http://localhost/interview/php/login.php",
        data: form.serialize(), 
        success: function(data)
        {
            
         let result = JSON.parse(data);
         if(result.error){
            alert(result.error); 
         } else if(result.success) {
            localStorage.setItem('user_id', result.success);
            window.location.href  = 'profile.html?profileid='+result.success;
        }
        }
    });
    
});