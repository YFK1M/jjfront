import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react'
import { IAuthTab } from './RegLogModal'
import { Button, Input, PasswordInput, Text } from '@mantine/core'
import { REG_LOG_TABS_TYPES } from '../../../assets/constants/reglog.constant'
import { observer } from 'mobx-react-lite'
import UserStore from '../../../mobx/stores/user.store'

const SignUpTab: FC<IAuthTab> = observer(({handleChangeModalOpenedType, handleCloseModal}) => {

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    const handleChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }, [name])

    const handleChangeSurname = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSurname(event.target.value)
    }, [surname])

    const handleChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }, [email])

    const handleChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [password])

    const handleChangeRepeatPassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value)
    }, [repeatPassword])

    const handleSubmit = useCallback(async () => {
        await UserStore.createUser({
            name,
            surname,
            email,
            password
        })
        await UserStore.login({
            email,
            password
        })
        if (UserStore.user) {
            handleCloseModal()
            setName('')
            setSurname('')
            setEmail('')
            setPassword('')
            setRepeatPassword('')
        }
    }, [name, surname, email, password])

    return (
        <>
            <Input
                placeholder="Your name"
                onChange={handleChangeName}
                value={name}
                required
            />
            <Input
                placeholder="Your surname"
                onChange={handleChangeSurname}
                value={surname}
                required
            />
            <Input
                placeholder="Your email"
                onChange={handleChangeEmail}
                value={email}
                required
            />
            <PasswordInput
                placeholder="Password"
                description="Password must include at least one letter, number and special character"
                required
                value={password}
                onChange={handleChangePassword}
            />
            <PasswordInput
                value={repeatPassword}
                placeholder="Repeat password"
                onChange={handleChangeRepeatPassword}
                required
            />
            <Button onClick={handleSubmit}>Sign Up</Button>

            <div style={{display: 'flex'}}>
                <Text size="sm">Already have account?</Text>
                <Text
                    size="sm"
                    style={{marginLeft: '0.5em', cursor: 'pointer'}}
                    color="blue"
                    onClick={() => handleChangeModalOpenedType(REG_LOG_TABS_TYPES.SIGN_IN)}
                >
          Sign In
                </Text>
            </div>
        </>
    )
})

export default memo(SignUpTab)