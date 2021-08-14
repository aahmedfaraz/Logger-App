import React, { useEffect, useState } from 'react';
// Importing Components
import Preloader from '../layout/Preloader';
import DeveloperItem from './DeveloperItem';

const DeveloperListModal = () => {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, []);

    const getDevelopers = async () => {
        setLoading(true);
        const res = await fetch('/developers');
        const data = await res.json();
        setDevelopers(data);
        setLoading(false);
    }

    return (
        <div id="developer-list-modal" className="modal">
            <div className="modal-content">
                <h4>Developer list</h4>
                <ul className="collection">
                    {
                        !loading ? (
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

export default DeveloperListModal;