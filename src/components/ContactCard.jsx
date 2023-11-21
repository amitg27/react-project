import React from 'react';

let ContactCard =(props)=>{
    let {selectedContact} = props
    return (
        <React.Fragment>
            {
                Object.keys(selectedContact).length >0 &&                    
                <div className="card shadow-lg sticky-top">
                <img src={selectedContact.picture.large} alt="" className='img-fluid'></img>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                        {selectedContact.name.title}. {selectedContact.name.first} {selectedContact.name.last}
                        </li>
                        <li className="list-group-item">
                        {selectedContact.email}
                        </li>
                        <li className="list-group-item">
                        {selectedContact.dob.age} yrs
                        </li>
                        <li className="list-group-item">
                        {selectedContact.location.city}
                        </li>                        
                    </ul>
                </div>
            </div>

            }
        </React.Fragment>
    )
};
export default ContactCard;