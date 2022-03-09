import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";

const Tweet = (props) => {
    const navigate = useNavigate();
    return (
        <div className="tweet-page">
            <div className="tweet-title">
                <h3>Tweet Fields</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '24px', color: '#697184', padding: '44px 0px 0px 0px' }}>
                    <p>Default Objects</p>
                    <li>ID</li>
                    <li>Text</li>
                </div>
                <div className="tweet-checkbox-flex">
                    <div className="label">author_id
                        <div className="tweet1-no-flex"><div className="no-check">No</div><input style={{ height: '28px' }} className="input-checkbox" type="checkbox"  /></div>
                        <div className="text-check">Default is to Request All of these.<br /> Check ‘No’ to not  request this object</div>
                    </div>
                    <div className="label-1">conversation_id
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">entities
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">context_annotation
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label">attachments
                        <div className="tweet-no-flex-1"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                        <div className="tweet-text-check">Requires user context authentication?</div>

                    </div>
                    <div className="label-1">referenced_tweets
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">public_metrics
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">organic_metrics
                        <div className="tweet-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">geo
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">source
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                    <div className="label-1">created_at
                        <div className="tweet1-no-flex"><input style={{ height: '28px' }} className="checkbox-2" type="checkbox" /></div>
                    </div>
                </div>
            </div>
            <br />
            <div className="btn-flex-tweet">
                <button style={{ width: '126px', height: '48px', fontSize: '24px', margin: '0px 20px 0px 0px', border: '1px solid #A30000', borderRadius: '10px', backgroundColor: '#E5E5E5', color: '#A30000' }} onClick={() => navigate(-1)}>Back</button>
                <button style={{ height: '48px' }} className="btn-next" onClick={() => navigate("/media")}><span>Next </span></button>
            </div>

        </div>
    );
};

export default Tweet;
