import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { IAuthTab } from './RegLogModal';
import { Button, Input, PasswordInput, Text } from '@mantine/core';
import { REG_LOG_TABS_TYPES } from '../../../assets/constants/reglog.constant';
import { observer } from 'mobx-react-lite';
import UserStore from '../../../mobx/stores/user.store';

const SignInTab: FC<IAuthTab> = observer(({handleChangeModalOpenedType, handleCloseModal}) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }, [email])

  const handleChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [password])

  const handleSubmit = useCallback(async () => {
    await UserStore.login({
      email,
      password
    })
    if (UserStore.user) {
      handleCloseModal()
      setEmail('')
      setPassword('')
    }
  }, [email, password])

  return (
    <>
      <Input
        placeholder="Your email"
        onChange={handleChangeEmail}
      />
      <PasswordInput
        placeholder="Password"
        description="Password must include at least one letter, number and special character"
        required
        onChange={handleChangePassword}
      />

      <Button onClick={handleSubmit}>Sign In</Button>

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