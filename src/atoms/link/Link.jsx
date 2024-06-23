import React from 'react';
import style from './Link.module.scss'

const Link = ({path, content}) => {
    return (
        <Link to={path} className={style.link}>
            {content}
        </Link>
    );
};

export default Link;