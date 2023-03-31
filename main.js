function addDashes(phone) {
    phone.value = phone.value.replace(/\D/g, '');
    phone.value = phone.value.slice(0,3)+"-"+phone.value.slice(3,6)+"-"+phone.value.slice(6,15);
           
}