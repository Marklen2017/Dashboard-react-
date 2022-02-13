import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select';


import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import { Input } from "reactstrap";

const Search = (props) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const options = [
    { value: 'usa', label: 'USA' },
    { value: 'spain', label: 'Spain' },
    { value: 'germany', label: 'Germany' }
  ]
  const optionsLanguage = [
    { value: 'english', label: 'English' },
    { value: 'franch', label: 'Franch' },
    { value: 'german', label: 'German' }
  ]
  // function ckChange(el) {
  //   const ckName = document.getElementsByName(el.name);
  //   for (var i = 0, c; c = ckName[i]; i++) {
  //    c.disabled = !(!el.checked || c === el);
  //   }
  // }

  return (
    <div className="flex-conversation" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="forms">
        <div className="search-title">
          <h3>Search Query</h3>
        </div>
        <div className="mbsc-row">
          <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">Twitter Query
            <Input className="input-search" label="text" inputStyle="box" labelStyle="floating" />
          </div>
          <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">Context ID
            <Input className="input-search" label="text" inputStyle="box" labelStyle="floating" passwordToggle="true" />
          </div>
          <div className="formlik mbsc-col-12 mbsc-col-lg-6">Exact Phrase
            <Input className="input-search" label="text" inputStyle="box" labelStyle="floating" />
          </div>
          <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">Hashtag -#
            <Input className="input-search" label="Town" inputStyle="box" labelStyle="floating" />
          </div>
          <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">URL Contains
            <Input className="input-search" label="State" inputStyle="box" labelStyle="floating" />
          </div>
        </div>


        <div className="select-flex">
          <label style={{ color: '#697184' }}>Profile Country
            <Select className="select-country" placeholder="" options={options} />
          </label>
          <label style={{ color: '#697184' }}>Language
            <Select className="select-country" placeholder="English" options={optionsLanguage} />
          </label>
        </div>
        <div className="date">
          <div className="start-date-div">Start Date
            <DatePicker className="date-start" dateFormat="dd/MM/yyyy" selected={startDate}  placeholderText="dd/mm/yy" onChange={(date) => setStartDate(date)} />
          </div>
          <div className="end-date-div">End Date
            <DatePicker className="date-end" selected={endDate}  dateFormat="dd/MM/yyyy" placeholderText="dd/mm/yy" onChange={(date) => setEndDate(date)} />
          </div>
        </div>
        <div className="max">Max Results
          <div className="flex">
            <Input className="input-max" label="number" inputStyle="box" labelStyle="floating" />
          </div>
        </div>
      </div>
      <div className="search-part-right">
        <label style={{ fontSize: '24px', color: '#697184' }} className="label-2">is:retweet
          <div className="search-first-right-flex"><div className="no-check">Yes  No</div><div style={{ display: 'flex' }}><input style={{ height: '28px' }} className="checkbox-3" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-3" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >is:reply
          <div style={{ padding: '0px 0px 0px 136px' }} className="right-flex-1"><div style={{ display: 'flex' }}><input style={{ height: '28px' }} onClick="ckChange(this)" value="1" className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >is:quote
          <div style={{ padding: '0px 0px 0px 122px' }} className="right-flex-1"><div style={{ display: 'flex' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '14px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2" >is:verified
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 86px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '50px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:mentions
          <div className="search-right-flex"><div className="no-check">Yes  No</div><div style={{ display: 'flex' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-3" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '12px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:profile
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 68px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '12px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:links
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 104px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '12px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:hashtags
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 16px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '12px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:media
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 70px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '12px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:images
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 46px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
        <label style={{ margin: '12px 0px 0px', fontSize: '24px', color: '#697184' }} className="label-2">has:video
          <div className="right-flex-1"><div style={{ display: 'flex', padding: '0px 0px 0px 82px' }}><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /><input style={{ height: '28px' }} className="checkbox-4" type="checkbox" /></div></div>
        </label>
      </div>

      <div className="btn-flex-search">
        <button style={{ height: '48px' }} className="btn-next" onClick={() => navigate("/tweet")}><span>Next </span></button>
      </div>
    </div>



  );
};

export default Search;
