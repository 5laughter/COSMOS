import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => (
    <footer className={cx('footer')}>
        <Link to="/" className={cx('brand')}>COSMOS</Link>
        <div className={cx('admin-login')}>GO TO COSMOS</div>
    </footer>
)

export default Footer;