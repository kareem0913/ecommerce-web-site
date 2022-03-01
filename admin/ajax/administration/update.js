
class Update extends Checkfile
{
    constructor(data){
        super(data)
        this.data = data;

    }
    cheack(){
        var i = 0
        if (!this.cheackName()) {
            i++
        }
        if (!this.cheackPassword()) {
            i++
        }
        if (!this.cheakMail()) {
            i++
        }
        if (!this.cheackOtherMethod()) {
            i++
        }

        if (i > 0) {
            return  false;
        }
        return true;
    }

    cheackName(){
        if (this.name()) {
            return true;
        }
        return false;
    }

    cheackPassword(){
        if (this.data[1].value.length === 0) {
            this.error('password', 'your passwrd not changed');
            return true;
        }
        if (this.password()) {
            return true;
        }
        return false;
    }

    cheakMail(){
        if (this.email()) {
            return true;
        }
        return false;
    }

    cheackOtherMethod(){
        if (this.address()&
        this.age()&
        this.start_data()&
        this.gander()) {
            return true;
        }
        return false;
    }
}
