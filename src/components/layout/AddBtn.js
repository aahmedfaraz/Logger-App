import React from 'react'

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large waves-effect waves-light deep-purple darken-3 modal-trigger">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#developer-list-modal" className="btn-floating waves-effect waves-light indigo darken-3 modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#developer-modal" className="btn-floating waves-effect waves-light blue darken-4 modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn;
