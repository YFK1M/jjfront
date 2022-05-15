import React, { FC, memo } from 'react';
import { IAuthTab } from './RegLogModal';
import { Button, Input, PasswordInput, Text } from '@mantine/core';
import { REG_LOG_TABS_TYPES } from '../../../assets/constants/reglog.constant';
import { observer } from 'mobx-react-lite';

const SignInTab: FC<IAuthTab> = observer(({handleChangeModalOpenedType}) => {
  return (
    <>
      <Input
        placeholder="Your email"
      />
      <PasswordInput
        placeholder="Password"
        description="Password must include at least one letter, number and special character"
        required
      />

      <Button>Sign In</Button>

      <div style={{display: 'flex'}}>
        <Text size="sm">Still have not account?</Text>
        <Text
          size="sm"
          style={{marginLeft: '0.5em', cursor: 'pointer'}}
          color="blue"
          onClick={() => handleChangeModalOpenedType(REG_LOG_TABS_TYPES.SIGN_UP)}
        >
          Sign Up
        </Text>
      </div>
    </>
  )
})

export default memo(SignInTab)