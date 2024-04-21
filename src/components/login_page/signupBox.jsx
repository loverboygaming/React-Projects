import React from 'react'

export const SignupBox = () => {
  return (
    <div className="signup_container">
        <form>
          <h5>If you new please Enter your details host will accept your request
          </h5>
            <input type="text" required placeholder="Enter your name"/><br></br>
            <input type="password" required placeholder="Enter your password"/><br></br>
            <input type="submit" value="send request"/><br></br>
        </form>
    </div>
  )
}
export default SignupBox;