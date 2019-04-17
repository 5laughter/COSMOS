import React from 'react';
import styles from './PostList.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ConstItem = () => {
    return (
        <div className={cx('post-item')}>
            <h2><a>타이틀</a></h2>
        </div>
    )
}