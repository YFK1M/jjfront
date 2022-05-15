import React, { FC, memo } from 'react';
import { Modal } from '@mantine/core';
import { REG_LOG_TABS_TYPES } from '../../../assets/constants/reglog.constant';
import SignUpTab from './SignUpTab';
import SignInTab from './SignInTab';

interface IRegLogModal {
  isModalOpened: boolean;
  modalOpenedType: string;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  handleChangeModalOpenedType: Function;
  children?: React.ReactChild
}

export interface IAuthTab {
  handleChangeModalOpenedType: Function
}

const RegLogModal: FC<IRegLogModal> = ({ isModalOpened, modalOpenedType, handleCloseModal, handleOpenModal, handleChangeModalOpenedType }) => {
  return (
    <Modal
      opened={isModalOpened}
      onClose={handleCloseModal}
      title={modalOpenedType === REG_LOG_TABS_TYPES.SIGN_UP ? 'Sign Up' : 'Sign In'}
    >
      {modalOpenedType === REG_LOG_TABS_TYPES.SIGN_UP ? <SignUpTab handleChangeModalOpenedType={handleChangeModalOpenedType}/> : <SignInTab handleChangeModalOpenedType={handleChangeModalOpenedType}/>}
    </Modal>
  )
}

export default memo(RegLogModal)