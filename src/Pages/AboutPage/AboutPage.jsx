import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from './AboutPage.module.scss';
import Strengths from '../../Components/Blocks/Strengths/Strengths';

export default function AboutPage({ location }) {
    const [isAbout, setIsAbout] = useState(false);

    useEffect(() => {
        const isCurrent = location === "/about";
        setIsAbout(isCurrent);
    }, [location])

    return (
        <>
            {
                isAbout && <div className={s.wrapper}>
                    <section>
                        <div className={s.content}>
                            <div className={s.lies_info}>
                                <h2>
                                    Our strength lies in our agile problem-solving approaches, delivering top-notch work with swift turnaround.
                                </h2>
                                <h3>
                                    We specialize in software development and digital marketing, serving as a trusted partner for leading companies, providing expert support and deep industry knowledge.
                                </h3>
                            </div>
                            <Strengths />
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

AboutPage.propTypes = {
    location: PropTypes.string
}