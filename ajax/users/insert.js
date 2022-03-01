

// class check data

class Checkdata{

    err = {}

    constructor(data){
        this.data = data;
    }
    // validata register account
    validate(){
        let i  = 0;
        if (!this.name()) {
            i++;
        }
        if (!this.phone()) {
            i++;
        }
        if (!this.email()) {
            i++;
        }
        if (!this.address()) {
            i++;
        }
        if (!this.password()) {
            i++;
        }
        if (i > 0) {
            return false;
        }
        return true;
    }

    // validate edit data user
    validateEdit(){
        let i  = 0;
        if (!this.name()) {
            i++;
        }
        if (!this.phone()) {
            i++;
        }
        if (!this.email()) {
            i++;
        }
        if (!this.address()) {
            i++;
        }
        if (!this.Editpassword()) {
            i++;
        }

        if (i > 0) {
            return false;
        }
        return true;
    }

    // contact validata 
    contact_validate(){
        let i  = 0;
        if (!this.name()) {
            i++;
        }
        if (!this.phone()) {
            i++;
        }
        if (!this.email()) {
            i++;
        }
        if (!this.message()) {
            i++;
        }
        if (i > 0) {
            return false;
        }
        return true;
    }

    name(){
        let name = this.get('username');
        if (name.length === 0 ) {
            this.error('username', 'it cant be empty');
            return false;
        }else if (!this.clean(name)) {
            this.error('username','please insert correct name dont contain [+=*<>()$?]');
            return false;
        }else if (name.length < 3) {
            this.error('username','name cant be very short');
            return false;
        }else if (this.stringContainsNumber(name)) {
            this.error('username','your name must dont have any number');
        }else{
            return true;
        }
    }

    phone(){
        var phone = this.get('phone');
        // /[^a-zA-Z]/ patern characters
        if (phone.length == 0) {
            this.error('phone', 'it cant be empty');
            return false;
        }else if (!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            this.error('phone', 'insert correct number');
            return false;
        }
        return true;
    }

    email(){
        let email = this.get('email')
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;     // email regular expression
        if (email.length === 0) {
            this.error('email', 'it cant be empty');
            return false;
        }else if (!this.clean(email)) {
            this.error('email','please insert correct email dont contain [+=*<>()$?]');
            return false;
        }else if(!email.match(mailformat)){
            this.error('email', 'please insert corect email');
            return false;
        }
        return true;
    }

    address(){
        let address = this.get('address');
        if (address.length === 0) {
            this.error('address', 'it cant be empty');
            return false;
        }else if (!this.clean(address)) {
            this.error('address', 'please insert correct address dont contain [+=*<>()$?]');
            return false;
        }
        return true;
    }

    password(){
        let pass = this.get('password');
        const repeatePassword = this.get('repeatPassword');
        if (pass !== repeatePassword) {
            this.error('repeatPassword', 'You have repeated an incorrect password');
            return false;
        }
        const decimal=  /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;      // password regular expression
        if (pass.length === 0) {
            this.error('password', 'it cant be empty');
            return false;
        }else if (!this.clean('password')) {
            this.error('password', 'please insert correct password dont contain [+=*<>()$?]')
        }else if(!pass.match(decimal)) {
            this.error('password', 'your bassword length should be betwen {8,15} and have A/Z a/z !/*');
            return false;
        }
        return true;
    }
    // validate password
    Editpassword(){
        const pass = this.get('password');
        if (pass.length == 0) {
            this.error('password', 'your password has not changing optional');
        }else{
            if (!this.clean(pass)) {
                this.error('password', 'please insert correct password dont contain [+=*<>()$?]')
                return false;
            }else if (!pass.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)) {
                this.error('password', 'your bassword length should be betwen {8,15} and have A/Z a/z !/*');
                return false;
            }
        }
        return true;
    }

    // contact message 
    message(){
        let name = this.get('message');
        if (name.length === 0 ) {
            this.error('message', 'it cant be empty');
            return false;
        }else if (!this.clean(name)) {
            this.error('message','please insert correct message dont contain [+=*<>()$?]');
            return false;
        }else if (name.length < 50) {
            this.error('message','message cant be short than 50char');
            return false;
        }else{
            return true;
        }
    }

    get(name){
        return this.data[name].replace(/ /g, '');
    }

    clean(data){
        if (data.replace(/[+=*<>()$?]/g, '$quot') != data) {
            return false;
        }
        return true;
    }

    stringContainsNumber(_string) {
    return /\d/.test(_string);
    }

    error(key, value){
        return this.err[key] = value
    }
}
