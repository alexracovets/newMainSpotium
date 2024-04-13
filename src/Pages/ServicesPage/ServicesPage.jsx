
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Services from '../../Components/Blocks/Services/Services';

import s from './ServicesPage.module.scss';

export default function ServicesPage({ location }) {
    const [isServices, setIsServices] = useState(false);

    useEffect(() => {
        const isCurrent = location === "/services";
        setIsServices(isCurrent);
    }, [location])

    return (
        <>
            {
                isServices &&
                <div className={s.wrapper} >
                    <section>
                        <div className={s.content}>
                            <h2>Services</h2>
                            <Services />
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

ServicesPage.propTypes = {
    location: PropTypes.string
}