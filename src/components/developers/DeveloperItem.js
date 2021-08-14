import React from 'react'
import PropTypes from 'prop-types'

const DeveloperItem = ({developer}) => {

    const {firstName, lastName} = developer;

    return (
        <li className="collection-item">
            <div>
                { firstName } { lastName }
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

DeveloperItem.propTypes = {
    developer: PropTypes.object.isRequired,
}

export default DeveloperItem
