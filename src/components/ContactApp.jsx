import React,{useState} from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

let ContactApp =()=>{
    let [state, setState] = useState({
        selectedContact:{}
    });
    let {selectedContact}=state;
    let receiveContact=(contact) => {
        setState((state) =>({
            selectedContact:contact                
        }));
    };
    return (
        <React.Fragment>
        {/* <pre>{JSON.stringify(selectedContact)}</pre>             */}
        <div className="containt mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">Contact App</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores odio porro nostrum? Atque eveniet dolore aspernatur fugiat? Cupiditate sed qui possimus laborum accusamus, repellat eaque ratione, commodi officia totam perferendis?</p>

                </div>
            </div>
        </div>
        <div className="containt mt-3">
            <div className="row">
                <div className="col-md-9">
                    <ContactList sendContact={receiveContact}/>
                </div>
                <div className="col-md-3">
                    <ContactCard selectedContact={selectedContact}/>
                </div>
                
            </div>
        </div>
        </React.Fragment>
    )
};
export default ContactApp;