import "./App.scss"
import { Button, Input } from "./components"

const App = () => {
  return (
    <>
      <fieldset>
        <legend>Log in</legend>
        <Input
          labelText="Username"
          name="user"
        />
        <Input
          labelText="Password"
          name="password"
        />
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </fieldset>
    </>
  )
}

export { App }
