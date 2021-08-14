import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { getDevelopers } from '../../actions/developerActions';
import PropTypes from 'prop-types';
// Importing Components
import Preloader from '../layout/Preloader';
import DeveloperItem from './DeveloperItem';

const DeveloperListModal = ({ developers, loading, getDevelopers }) => {

    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="developer-list-modal" className="modal">
            <div className="modal-content">
                <h4>Developer list</h4>
                <ul className="collection">
                    {
                        !loading && developers !== null ? (
                            developers.map(developer => <DeveloperItem key={developer.id} developer={developer} />)
                        ) : (
                            <li className="collection-item"><Preloader /></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

DeveloperListModal.propTypes = {
    developers: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getDevelopers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    developers: state.developer.developers,
    loading: state.developer.loading
})

export default connect(mapStateToProps, {getDevelopers})(DeveloperListModal);