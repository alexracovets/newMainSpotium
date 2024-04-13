import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from './AboutPage.module.scss';

export default function AboutPage({ location }) {
    const [isAbout, setIsAbout] = useState(false);

    useEffect(() => {
        const isCurrent = location === "/about";
        if (isCurrent) {
            setTimeout(() => {
                setIsAbout(true)
            }, 300)
        } else {
            setIsAbout(false);
        }
    }, [location])

    return (
        <div className={s.wrapper}>
            
        </div>
    )
}

AboutPage.propTypes = {
    location: PropTypes.string
}