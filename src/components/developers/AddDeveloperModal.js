import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addDeveloper } from '../../actions/developerActions';
import PropTypes from 'prop-types'

const AddDeveloperModal = ({addDeveloper}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName.trim() === '' || lastName.trim() === ''){
            M.toast({html: 'Some credentials are missing'});
        } else  {
            const newDeveloper = {
                firstName,
                lastName
            }

            addDeveloper(newDeveloper);

            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id="developer-modal" className="modal">
            <div className="modal-content">
                <h4 className="center">New Developer</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={ e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={ e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect waves-black grey darken-2 white-text btn-flat"
                >
                    Submit
                </a>
            </div>
        </div>
    )
}

AddDeveloperModal.propTypes = {
    addDeveloper: PropTypes.func.isRequired,
}

export default connect(null, {addDeveloper})(AddDeveloperModal);