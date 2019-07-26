class AddressBook {
    constructor(contacts){
        this.contacts =[],
    } 
    addContact(name, email, phone, relation){
        let newContact = new Contact(name, email, phone, relation)
        this.contacts.push(newContact);
    }
    delete(name){
        const index = this.contacts.findIndex(contact => {
            return contact.name === name;
        });
        // if index is 0 we wouldnt want -1
        if (index >= 0){
            this.contacts.splice(index,1);        }
    }
    print(){
        for(let i=0; i<this.contacts.length; i++){
            console.log(this.contacts[i])
        }
    }
}
class Contact {
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = 3333333;
        this.relation = relation;
    }
}
const addressBook = new AddressBook();
addressBook.addContact("Veronica", "@gmail", "248", "self");
addressBook.addContact("Eric", "313", )





