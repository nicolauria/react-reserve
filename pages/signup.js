import React from 'react'
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react'
import Link from 'next/link'
import catchErrors from '../utils/catchErrors'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import { handleLogin } from '../utils/auth'

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
}

function Signup() {
  const [user, setUser] = React.useState(INITIAL_USER)
  const [disabled, setDisabled] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])
  
  function handleChange(event) {
    const { name, value } = event.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }
  
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setError('')
      setLoading(true)
      const url = `${baseUrl}/api/signup`
      const payload = { ...user }
      const response = await axios.post(url, payload)
      handleLogin(response)
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }
  
  return <>
    <Message attached icon="settings" header="Get Started!" content="Create a new account" color="teal" />
    <Form error={Boolean(error)} onSubmit={handleSubmit} loading={loading}>
      <Message error header="Oops!" content={error} />
      <Segment>
        <Form.Input fluid onChange={handleChange} value={user.name} icon="user" iconPosition="left" label="Name" placeholder="Name" name="name" />
        <Form.Input fluid onChange={handleChange} value={user.email} icon="envelope" iconPosition="left" label="Email" placeholder="Email" name="email" type="email" />
        <Form.Input fluid onChange={handleChange} value={user.password} icon="lock" iconPosition="left" label="Password" placeholder="Password" name="password" type="password" />
        <Button disabled={loading || disabled} icon="signup" type="submit" color="orange" content="Signup" />
      </Segment>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help" />
      Existing user?{" "}
      <Link href="/login">
        <a>Log in here</a>
      </Link>{" "}instead.
    </Message>
  </>;
}

export default Signup;
