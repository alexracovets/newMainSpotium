import { Scrollbar } from 'react-scrollbars-custom';
import s from './Industries.module.scss';
import IndustriesRow from './IndustriesRow/IndustriesRow';
import { useState } from 'react';


const row1 = [
    {
        name: 'Banks',
        row: 0,
        text: "Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks, Banks",
        idx: 0
    },
    {
        name: 'Capital Markets',
        row: 0,
        text: "Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets,",
        idx: 1
    },
    {
        name: 'Finance',
        row: 0,
        text: "Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance",
        idx: 2
    }
]
const row2 = [
    {
        name: 'Specialty Retail',
        row: 1,
        text: "Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail",
        idx: 3
    },
    {
        name: 'Healthcare Services',
        row: 1,
        text: "Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services",
        idx: 4
    },
]
const row3 = [
    {
        name: 'Travel & Hospitality',
        row: 2,
        text: "Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality",
        idx: 5
    },
    {
        name: 'Education Services',
        row: 2,
        text: "Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services, Education Services",
        idx: 6
    }
]
const rows = [row1, row2, row3];

export default function Industries() {

    const [activeRow, setActiveRow] = useState();

    return (
        <Scrollbar className={'scroll'}>
            <div className={s.industries_wrapper}>
                {rows.map((row, i) => <IndustriesRow key={i} industries={row} idx={i} activeRow={activeRow} setActiveRow={setActiveRow} />)}
            </div>
        </Scrollbar >
    );
}
