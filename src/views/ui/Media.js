import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";

const Media = (props) => {
    const navigate = useNavigate();
    return (
        <div className="tweet-page">
            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                <div className="media-flex">
                    <div className="tweet-title">
                        <h3>Media.fields</h3>
                    </div>
                    <div className="media-checkbox-flex">
                        <div style={{ padding: '12px 0px' }} className="label">tipe
                            <div className="media-no-flex"><div className="no-check">Request</div><input style={{ height: '28px' }} className="input-checkbox" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">preview_image_url
                            <div className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">url
                            <div style={{ margin: '0px 174px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">duration_ms
                            <div style={{ margin: '0px 69px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">public_metrics
                            <div style={{ margin: '0px 47px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">alt_text
                            <div style={{ margin: '0px 122px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                    </div>
                    <div style={{ fontSize: '24px', color: '#697184', padding: '44px 0px 0px 0px' }}>
                        <p>Default Objects:</p>
                        <li>Media_key</li>
                        <li>tipe</li>
                    </div>
                    <div className="note">
                        <p>Note: Must also include/request Expansion: <br /> attachments.media_keys</p>
                    </div>
                </div>
                <div className="media-flex-1">
                    <div className="tweet-title">
                        <h3>Place.fields</h3>
                    </div>
                    <div className="media-checkbox-flex">
                        <div style={{ padding: '12px 0px' }} className="label">country
                            <div className="media-no-flex"><div className="no-check">Request</div><input style={{ height: '28px' }} className="input-checkbox" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">country_code
                            <div style={{ margin: '0px 10px 0px 100px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">geo
                            <div style={{ margin: '0px 10px 0px 203px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">name
                            <div style={{ margin: '0px 10px 0px 184px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                        <div style={{ padding: '12px 0px' }} className="label">place_type
                            <div style={{ margin: '0px 10px 0px 127px' }} className="media-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        </div>
                    
                    </div>
                    <div style={{ fontSize: '24px', color: '#697184', padding: '104px 0px 0px 0px' }}>
                        <p>Default Objects:</p>
                        <li>ID</li>
                        <li>Full Name</li>
                    </div>
                    <div className="note">
                        <p>Note: Must also include/request Expansion: <br /> expansions=geo.place_id</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="btn-flex-tweet">
                <button style={{ width: '126px', height: '48px', fontSize: '24px', margin: '0px 20px 0px 0px', border: '1px solid #A30000', backgroundColor: '#E5E5E5', color: '#A30000' }} onClick={() => navigate(-1)}>Back</button>
                <button style={{ height: '48px' }} className="btn-next" onClick={() => navigate("/expansions")}><span>Next </span></button>
            </div>


        </div>
    );
};

export default Media;
