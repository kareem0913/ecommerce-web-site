
class Checkfile {
    err = {}
    constructor(data) {
        this.data = data;
    }

    vildate(){

        var i  = 0;
        if (!this.name()) {
            i++;
        }
        if (!this.password()) {
            i++;
        }
        if (!this.email()) {
            i++;
        }
        if (!this.address()) {
            i++;
        }
        if (!this.age()) {
            i++;
        }
        if (!this.start_data()) {
            i++;
        }
        if (!this.gander()) {
            i++;
        }
        if (i > 0) {
            return false;
        }
        return true;
    }

    name(){
        let name = this.data[0].value.replace(/ /g, '');
        if (name.length === 0 ) {
            this.error('name', 'it cant be empty');
            return false;
        }else if (!this.clean(name)) {
            this.error('name', 'please insert correct name dont contain [+=*<>()$?]');
            return false;
        }else if (name.length < 3) {
            this.error('name','name cant be very short');
            return false;
        }else if (this.stringContainsNumber(name)) {
            this.error('name','your name must dont have any number');
        }else{
            return true;
        }
        // name.length === 0 ? this.error('name', 'it cant be empty') : name.length < 3 ? this.error('name', 'pleace insert good name') : '';
    }

    password(){
        let pass = this.data[1].value.replace(/ /g, '');
        const decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (pass.length === 0) {
            this.error('password', 'it cant be empty');
            return false;
        }else if (!this.clean(pass)) {
            this.error('password', 'please insert correct password dont contain [<>?]');
            return false;
        }else if(!pass.match(decimal)) {
            this.error('password', 'your bassword length should be betwen {8,15} and have A/Z a/z !/*');
            return false;
        }
        return true;
    }

    email(){
        let email = this.data[2].value.replace(/ /g, '');
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length === 0) {
            this.error('email', 'it cant be empty');
            return false;
        }else if (!this.clean(email)) {
            this.error('email', 'please insert correct email dont contain [+=*<>()$?]');
            return false;
        }else if(!email.match(mailformat)){
            this.error('email', 'please insert corect email');
            return false;
        }
        return true;

    }
    address(){
        let address = this.data[3].value.replace(/ /g, '');
        if (address.length === 0) {
            this.error('adress', 'it cant be empty');
            return false;
        }else if (!this.clean(address)) {
            this.error('adress', 'please insert correct address dont contain [+=*<>()$?]');
            return false;
        }
        return true;
    }

    age(){
        let age = this.data[4].value.replace(/ /g, '');
        if (age.length === 0) {
            this.error('age', 'it cant be empty');
            return false;
        }else if (!this.clean(age)) {
            this.error('age', 'please insert correct age dont contain [+=*<>()$?]');
            return false;
        }
        return true;
    }

    start_data(){
        var date = this.data[5].value.replace(/ /g, '');
        if (date.length === 0) {
            this.error('start_date', 'you must specify date');
            return false;
        }else if (!this.clean(date)) {
            this.error('start_date', 'please insert correct date dont contain [+=*<>()$?]');
            return false;
        }
        return true;
    }

    // where you dont
    gander(){
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].name === 'gander') {
                return true;
            }
        }
        this.error('gander', 'it cant be empty');
        return false;
    }

    clean(data){
        const clean = data;
        if (clean.replace(/[?<>]/g, '$quot') != data) {
            return false;
        }
        return true;
    }

    error(key, value){
        return this.err[key] = value
    }

    stringContainsNumber(_string) {
    return /\d/.test(_string);
  }


}
