import React from "react";
import { Input, CardTitle } from "reactstrap";


const User = () => {
  const shoot = () => {
  }
  return (
    <div className="container">
      <div>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          User Lookup
        </CardTitle>
        <div className="mbsc-row-1">
          <div style={{ fontSize: '24px' }} className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">Username
            <Input className="input-search" label="text" inputStyle="box" labelStyle="floating" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="user-checkbox-flex">
              <div>
                <h3 style={{ color: '#697184' }}>User Lookup</h3>
              </div>
              <label className="label">created_at
                <div className="no-flex"><div className="no-check">Yes</div><input style={{ height: '28px' }} className="input-checkbox" type="checkbox" /></div>
                <div className="user-text-check">Date account was created</div>
              </label>
              <label className="label-1">description
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Users bio text</p></div>
              </label>
              <label className="label-1">entities
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Details about text in a users description</p></div>
              </label>
              <label className="label-1">Location (Long/Lat)
                <div className="no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /></div>
              </label>
              <label className="label">profile_image_url
                <div className="user-no-flex-1"><input style={{ height: '28px' }} className="input-checkbox" type="checkbox" /></div>
              </label>
              <label className="label-1">protected
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Info if users tweets are private</p></div>
              </label>
              <label className="label-1">public_metrics
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Contains details about activity for this users.</p></div>
              </label>
              <label className="label-1">verified
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Is users verified</p></div>
              </label>
              <label className="label-1">pinned_tweet_id
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Tweet id of users pinned tweet</p></div>
              </label>
              <label className="label-1">url
                <div style={{ display: 'flex' }} className="user-no-flex"><input style={{ height: '28px' }} className="checkbox-user" type="checkbox" /><p>Users profile URL</p></div>
              </label>

            </div>
            <div className="user-part-right">
              <h4 style={{ fontSize: '24px', color: '#697184' }}>Default Objects:</h4>
              <li style={{ fontSize: '24px', color: '#697184' }}>ID</li>
              <li style={{ fontSize: '24px', color: '#697184' }}>Name</li>
              <li style={{ fontSize: '24px', color: '#697184' }}>User Name</li>
            </div>
          </div>
          <div className="btn-flex">
            <button className="btn-next" onClick={shoot}><span>Test </span></button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default User;
