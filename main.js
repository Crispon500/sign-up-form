function addDashes(phone) {
    if(phone.value.length > 3){
        phone.value = phone.value.replace(/\D/g, '');
        phone.value = phone.value.slice(0,3)+"-"+phone.value.slice(3,15);
        if(phone.value.length > 7){
            phone.value = phone.value.slice(0,7)+"-"+phone.value.slice(7,16);
        }
    }
    else{
        phone.value = phone.value.replace(/\D/g, '');
    }
           
}