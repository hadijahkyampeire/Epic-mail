import React from 'react';
import { Cancel, Delete } from 'components/icons';
import './__styles__/addEmail.scss';

const AddEmailModal = () => (
  <div id="open-modal" class="modal-window">
    <div className="email-modal">
      <div className="email-header">
        <p>New Message</p>
        <a href="#!" title="Close" className="modal-close">
          <Cancel />
        </a>
      </div>
      <div className="email-body">
      <input type="email" name="emailaddress" placeholder="To" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea type="text" placeholder="type your message here..." className="text-body" />
      </div>
      <div className="email-footer">
        <button className="send-button">Send</button>
        <a href="#delete" className="delete-button">
          <Delete />
        </a>
      </div>
    </div>
  </div>
);
export { AddEmailModal };
