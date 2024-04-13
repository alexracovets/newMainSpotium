import ai from '/image/icons/ai_icon.svg';
import mob from '/image/icons/mob_icon.svg';
import srmBpm from '/image/icons/srmBpm_icon.svg';
import xr from '/image/icons/xr_icon.svg';
import web from '/image/icons/web_icon.svg';
import eCom from '/image/icons/eCom_icon.svg';
import dm from '/image/icons/dm_icon.svg';
import bots from '/image/icons/bots_icon.svg';
import analytics from '/image/icons/analytics_icon.svg';

import s from './Strengths.module.scss';
export default function Strengths() {

    const strengths = [
        {
            name: 'Artificial Intelligence',
            img: ai
        },
        {
            name: 'Mobile Applications',
            img: mob
        },
        {
            name: 'CRM/BPM',
            img: srmBpm
        },
        {
            name: 'Extended Reality',
            img: xr
        },
        {
            name: 'Web Applications',
            img: web
        },
        {
            name: 'E-Commerce',
            img: eCom
        },
        {
            name: 'Digital Marketing',
            img: dm
        },
        {
            name: 'Social Apps & Bots',
            img: bots
        },
        {
            name: 'Tech Analytics',
            img: analytics
        },
    ]

    return (
        <ul className={s.strengths}>
            {strengths.map((strength, i) => {
                return (
                    <li key={i}>
                        <img src={strength.img} alt={strength.name} />
                        <span>{strength.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}