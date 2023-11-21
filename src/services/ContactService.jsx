import axios from "axios";

class ContactService{
    static getContactList(){
        let serverUrl="https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json"
        return axios.get(serverUrl);
    }
}
export default ContactService;