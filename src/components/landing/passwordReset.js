import React from 'react';
import { toast } from 'react-toastify';
import { Cancel } from 'components/icons';
import './__styles__/passwordReset.css';

const ResetPassword = () => (
  <div id="password-modal" className="password-modal-window">
    <div className="password-modal">
      <div className="password-header">
        <p>Reset Password</p>
        <a href="#!" title="Close" className="modal-close">
          <Cancel />
        </a>
      </div>
      <form className="reset-password">
        <div className="form-body" style={{ marginTop: '5rem' }}>
          <label>Enter Email</label>
          <input type="email" name="emailaddress" placeholder="Email here..." required />
        </div>
        <div className="reset-footer">
          <em>A reset password link will be sent to the entered email</em>
          <br />

          <button
            className="reset-button"
            onClick={() =>
              toast.success('Reset link sent successfully', {
                position: toast.POSITION.TOP_CENTER
              })
            }
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
);
export { ResetPassword };
