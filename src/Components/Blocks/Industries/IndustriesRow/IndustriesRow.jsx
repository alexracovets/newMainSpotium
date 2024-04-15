import PropTypes from 'prop-types';

import s from '../Industries.module.scss';
import { useEffect, useState } from 'react';
import IndustriesItem from '../IndustriesItem/IndustriesItem';
import { useSelector } from 'react-redux';



export default function IndustriesRow({ industries, idx }) {
    const currentRowIndustry = useSelector((state) => state.stateIndustries.activeRow);
    const [isDetail, setIsDetail] = useState(false);
    const [detailText, setDetailText] = useState(null);

    useEffect(() => {
        setIsDetail(idx === currentRowIndustry)
    }, [currentRowIndustry, idx])

    return (
        <>
            <ul className={s.industries} >
                {industries.map((industry) => <IndustriesItem key={industry.idx} industry={industry} rowIndustry={idx} setDetailText={setDetailText} />)}
            </ul>
            <div className={isDetail ? s.detail + ' ' + s.active : s.detail}>
                {detailText}
            </div>
        </>
    );
}

IndustriesRow.propTypes = {
    industries: PropTypes.array,
    idx: PropTypes.number
}
