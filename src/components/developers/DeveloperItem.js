import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDeveloper } from '../../actions/developerActions';

const DeveloperItem = ({developer, deleteDeveloper}) => {

    const {firstName, lastName} = developer;

    return (
        <li className="collection-item">
            <div>
                { firstName } { lastName }
                <a 
                    href="#!" 
                    className="secondary-content"
                    onClick={() => deleteDeveloper(developer.id)}
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

DeveloperItem.propTypes = {
    developer: PropTypes.object.isRequired,
    deleteDeveloper: PropTypes.func.isRequired,
}

export default connect(null, { deleteDeveloper })(DeveloperItem);
