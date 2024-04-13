import { useState } from 'react';
import ServicesItem from './ServicesItem/ServicesItem';
import { Scrollbar } from 'react-scrollbars-custom';
import s from './Services.module.scss';
import './scroll.scss'
export default function Services() {

    const [currentService, setCurrentService] = useState(0);

    const colapses = [
        {
            title: 'Artificial Intelligence (AI)',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers."
        },
        {
            title: 'Extended Reality (XR)',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers.nlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your cust"
        },
        {
            title: 'Software Development',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers."
        },
        {
            title: 'Digital Marketing',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers."
        }
    ]

    return (
        <Scrollbar className={'scroll'}>
            <ul className={s.services}>
                {colapses.map((colapse, i) => {
                    return (
                        <ServicesItem
                            key={i}
                            index={i}
                            title={colapse.title}
                            colapse={colapse.colapse}
                            currentService={currentService}
                            setCurrentService={setCurrentService}
                        />
                    )
                })}
            </ul>
        </Scrollbar>
    )
}