import React from 'react';
import styles from './Pagenation.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = () => (
    <div className={cx('pagination')}>
        <Button disabled>
            이전 은하
        </Button>
        <div className={cx('number')}>
            은하 1
        </div>
        <Button>
            다음 은하
        </Button>
    </div>
);

export default Pagination;