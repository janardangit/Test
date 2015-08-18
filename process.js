function submitForm(){
    var username = document.getElementById('uname');
    var password = document.getElementById('pword');
    if(username == ''){
        alert('please enter the username');
        return;
    }else if(password == ''){
         alert('please enter the password');
        return;     
    }
    var udata = {'username':username,'password':password};
    $.ajax({
       url:"cgi_check_user.py?input_str="+JSON.stringify(udata),
       data:{'username':username,'password':password},
       type:'POST'
       datatype:'JSON',
       success:function(data){
                var response = JSON.Parse(data);
                if(response['data'] == 'success'){
                    window.location.href = 'home.html';
                }else{
                    alert('Username password is wrong');
                    return;
                }
            },
        error:function(){
            alert('There is some issue in networl, please try again');
        }
           
    });
}

function show_all users(){
    var current_url = window.location.href;
    var query_str = current_url.split('?')[1];
    var batch_id = query_str.split('=')[1];
    var filter_str = {'batch_id':batch_id};
    $.ajax({
       url:"cgi_get_users.py?input_str="+JSON.stringify(filter_str),
       type:'POST'
       datatype:'JSON',
       success:function(data){
                var response = JSON.Parse(data);
                if(response['data']){
                    document.getElementById('result_div').innerHTML = '';
                    document.getElementById('result_div').innerHTML = response['data'];
                }else{
                    document.getElementById('result_div').innerHTML = '';
                    document.getElementById('result_div').innerHTML = 'No user found for the above batch id.';
                }
            },
        error:function(){
            alert('There is some issue in networl, please try again');
        }
           
    });
}

function show_input_box_for_path(){
    document.getElementById('input_div').style.display = "block";
    return;
}

function show_files(){
    var folder_path = document.getElementById('path');
    if(folder_path == ''){
        alert('please provide any folder path.');
        return;
    }
    
    var json_path = {'path':folder_path};
    $.ajax({
       url:"cgi_get_files.py?input_str="+JSON.stringify(json_path),
       type:'POST'
       datatype:'JSON',
       success:function(data){
                var response = JSON.Parse(data);
                if(response['data']){
                    document.getElementById('result_div').innerHTML = '';
                    document.getElementById('result_div').innerHTML = response['data'];
                }else{
                    document.getElementById('result_div').innerHTML = '';
                    document.getElementById('result_div').innerHTML = 'No files exist.';
                }
            },
        error:function(){
            alert('There is some issue in networl, please try again');
        }
           
    });
    
}