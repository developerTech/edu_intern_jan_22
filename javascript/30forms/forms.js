const validateFname = () => {
    let fname = document.getElementById('fname').value;
    let fdiv = document.getElementById('fdiv');
    let fout = document.getElementById('fout');

    if(fname.trim().length == 0){
        fout.innerHTML = "Please Enter First Name"
        fdiv.classList.add('has-error')
    }else{
        fout.innerHTML = ""
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}