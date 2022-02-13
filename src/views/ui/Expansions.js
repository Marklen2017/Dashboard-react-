import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";

const Expansions = (props) => {
    const navigate = useNavigate();
    return (
        <div className="tweet-page">
            <div className="tweet-title">
                <h3>Expansions Objects</h3>
            </div>
            <div className="exp-check" style={{ padding: '50px 0px' }}>
                <label style={{ fontSize: '24px', color: '#697184' }} className="label-2">author_id
                    <div className="exp-first-right-flex"><div className="no-check">Yes  No</div><div style={{ display: 'flex' }}><input style={{ height: '28px' }} className="checkbox-3" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-3" type="checkbox" /></div></div>
                </label>
                <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >geo.place_id
                    <div style={{ padding: '0px 0px 0px 324px' }} className="right-flex-1"><div style={{ display: 'flex' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
                </label>
                <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >entities.mentions.username
                    <div style={{ padding: '0px 0px 0px 163px' }} className="right-flex-1"><div style={{ display: 'flex' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
                </label>
                <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >referenced_tweets.id .author_id
                    <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 86px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
                </label>
                <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >attachments.media_keys
                    <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 233px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
                </label>
            </div>
            <br />
            <div className="btn-flex-tweet">
                <button style={{ width: '126px', height: '48px', fontSize: '24px', margin: '0px 20px 0px 0px', border: '1px solid #A30000', backgroundColor: '#E5E5E5', color: '#A30000' }} onClick={() => navigate(-1)}>Back</button>
                <button style={{ height: '48px' }} className="btn-next" onClick={() => navigate("/expansions")}><span>Test </span></button>
            </div>


        </div>
    );
};

export default Expansions;
