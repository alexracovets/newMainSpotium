
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
                            asdasd
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