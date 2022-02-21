import {React} from 'react';

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
         
          <div style={{ padding: '34px 0px' }}>
            <h1>Log In</h1>
            <div>
              <input className="input-login" type="text" placeholder="Username" />
            </div>
            <div className="second-input">
              <input className="input-login" type="password" placeholder="Password" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
