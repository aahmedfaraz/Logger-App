import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearLogError } from '../../actions/logActions';
import { clearDeveloperError } from '../../actions/developerActions';

const Alert = ({ logError, clearLogError, developerError, clearDeveloperError }) => {

    useEffect(() => {
        if(logError) {
            M.toast({ html: `${logError}` });
            clearLogError();
        }
        if(developerError) {
            M.toast({ html: `${developerError}` });
            clearDeveloperError();
        }
    }, [logError, developerError]);

    return (
        <div>
        </div>
    )
}

Alert.propTypes = {
    logError: PropTypes.string.isRequired,
    developerError: PropTypes.string.isRequired,
    clearLogError: PropTypes.func.isRequired,
    clearDeveloperError: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    logError: state.log.error,
    developerError: state.developer.error
})

export default connect(mapStateToProps, { clearLogError, clearDeveloperError })(Alert);
