function addDashes(str) {
    if(str.value.length > 3){
        str.value = str.value.replace(/\D/g, '');
        str.value = str.value.slice(0,3)+"-"+str.value.slice(3,15);
        if(str.value.length > 7){
            str.value = str.value.slice(0,7)+"-"+str.value.slice(7,16);
        }
    }
    else{
        str.value = str.value.replace(/\D/g, '');
    }
           
}

function removeDashes(str) {
    str.value = str.value.replace(/\D/g, '');
}