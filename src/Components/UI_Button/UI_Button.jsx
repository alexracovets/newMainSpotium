import PropTypes from 'prop-types';

import s from './UI_Button.module.scss';

export default function UI_Button({ text }) {

    return (
        <button className={s.button}>
            {text}
        </button>
    )
}

UI_Button.propTypes = {
    text: PropTypes.string
}