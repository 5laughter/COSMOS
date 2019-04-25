import React from 'react';
import styles from './AskRemoveModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AskRemoveModal = ({visible, onConfirm, onCancel}) => (
    <ModalWrapper visible={visible}>
        <div className={cx('question')}>
            <div className={cx('title')}>별 폭파</div>
            <div className={cx('description')}>이 별을 정말로 폭파시키겠습니까?</div>
        </div>
        <div className={cx('options')}>
            <Button theme="gray" onClick={onCancel}>취소</Button>
            <Button onClick={onConfirm}>폭파</Button>
        </div>
    </ModalWrapper>
);

export default AskRemoveModal;