import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import Select from "react-select";
// import Select from "../../components/Select"
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import useCheckboxYesNo from "../../hooks/useCheckboxYesNo";
import useCheckboxOne from "../../hooks/useCheckboxOne";
import { Input } from "reactstrap";

import { UserProvider, useUserContext } from "../../context/user_context";
// import Expansions from "./Expansions";

const Search = (props) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchState, setSearchState] = useState(true);
  const [tweetState, setTweetState] = useState(false);
  const [mediaState, setMediaState] = useState(false);
  const [expansionsState, setExpansionsState] = useState(false);

  const checkRetWeet = useCheckboxYesNo();

  console.log(checkRetWeet, "checkRetWeet");
  const checkReply = useCheckboxYesNo();
  const checkQuote = useCheckboxYesNo();
  const checkVerified = useCheckboxYesNo();

  const checkMentions = useCheckboxYesNo();
  const checkProfile = useCheckboxYesNo();
  const checkLinks = useCheckboxYesNo();
  const checkHashtags = useCheckboxYesNo();
  const checkMedia = useCheckboxYesNo();
  const checkImages = useCheckboxYesNo();
  const checkVideo = useCheckboxYesNo();

  const checkAuthor = useCheckboxYesNo();
  const checkPlace = useCheckboxYesNo();
  const checkEntities = useCheckboxYesNo();
  const checkReferenced = useCheckboxYesNo();
  const checkKeys = useCheckboxYesNo();

  // Media Field Place.fields
  const checkCountry = useCheckboxOne();
  console.log(checkCountry);

  const checkCountryCode = useCheckboxOne();
  console.log(checkCountryCode);

  const checkGeo = useCheckboxOne();
  console.log(checkGeo);

  const checkName = useCheckboxOne();
  console.log(checkName);

  const checkPlaceType = useCheckboxOne();
  console.log(checkPlaceType);

  const checkTipe = useCheckboxOne();
  console.log(checkTipe);

  const checkPreview = useCheckboxOne();
  console.log(checkPreview);

  const checkUrl = useCheckboxOne();
  console.log(checkUrl);

  const checkDuration = useCheckboxOne();
  console.log(checkDuration);

  const checkPublic = useCheckboxOne();
  console.log(checkPublic);

  const checkAlt = useCheckboxOne();
  console.log(checkAlt);

  const searchNext = () => {
    setSearchState(false);
    setTweetState(true);
  };
  const tweetNext = () => {
    setTweetState(false);
    setMediaState(true);
  };
  const expansionsNext = () => {
    setMediaState(false);
    setExpansionsState(true);
  };

  const options = [
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "germany", label: "Germany" },
  ];
  const optionsLanguage = [
    { value: "english", label: "English" },
    { value: "franch", label: "Franch" },
    { value: "german", label: "German" },
  ];

  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  const [errorForm, setErrorForm] = useState(false);

  const { handlerShowSidebar } = useUserContext();
  const fetchData = async (data) => {
    try {
      const response = await fetch(
        "https://twitter-api-2406.herokuapp.com/query/search/",
        {
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken":
              "Qvf4HXAJtcgqQMMtZBtQYEbspi1hTHqms4Th4SaUiAF2be6CEy0mqU1acB30Etq3",
          },
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      localStorage.setItem("user", JSON.stringify(json.tokens));
      reset();
      setErrorForm(false);
      handlerShowSidebar(true);
      navigate("/search", { replace: true });
    } catch (error) {
      setErrorForm(true);
      console.log("error", error);
    }
  };
  const onSubmit = (data) => {
    const checkedValue = {
      "is_retweet":checkRetWeet.checkedName,
      "is_reply":checkReply.checkedName,
      "is_quote":checkQuote.checkedName,
      "is_verified":checkVerified.checkedName,
      "has_mentions":checkMentions.checkedName,
      "has_profile_geo":checkGeo.checkedName,
      "has_links":checkLinks.checkedName,
      "has_hashtags":checkHashtags.checkedName,
      "has_images":checkImages.checkedName,
      "has_video":checkVideo.checkedName,
      "tweet_author_id":checkAuthor.checkedName,
      // "conversation_id":checkConversation.checkedName,

    }
  
    console.log(data);
    // fetchData(data);
  };

  function Select({ options, name, ...rest }) {
    return (
      <select {...register(name)} {...rest} className="select-country">
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    );
  }
  // function DatePicker({ options, name, ...rest }) {
  //   return (
  //     <select {...register(name)} {...rest} className="select-language">
  //       {options.map((value) => (
  //         <option value={value}>{value}</option>
  //       ))}
  //     </select>
  //   );
  // }
  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex-conversation"
        style={
          searchState
            ? { display: "flex", flexWrap: "wrap" }
            : { display: "none" }
        }
      >
        <div style={{ display: "flex" }}>
          <div className="forms">
            <div className="search-title">
              <h3>Search Query</h3>
            </div>
            <div className="mbsc-row">
              <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                Twitter Query
                <input
                  type="text"
                  className="input-search"
                  // label="text"
                  // inputStyle="box"
                  // labelStyle="floating"
                  {...register("twitter_query")}
                />
              </div>
              <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                Context ID
                <input
                  className="input-search"
                  label="text"
                  inputStyle="box"
                  labelStyle="floating"
                  // passwordToggle="true"
                  {...register("context-id")}
                />
              </div>
              <div className="formlik mbsc-col-12 mbsc-col-lg-6">
                Exact Phrase
                <input
                  className="input-search"
                  label="text"
                  inputStyle="box"
                  labelStyle="floating"
                  {...register("exact_phrase")}
                />
              </div>
              <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                Hashtag -#
                <input
                  className="input-search"
                  label="Town"
                  inputStyle="box"
                  labelStyle="floating"
                  {...register("hashtag")}
                />
              </div>
              <div className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                URL Contains
                <input
                  className="input-search"
                  label="State"
                  inputStyle="box"
                  labelStyle="floating"
                  {...register("contains")}
                />
              </div>
            </div>

            <div className="select-flex">
              <div
                style={{
                  color: "#697184",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Profile Country
                <Select
                  name="profile_country"
                  style={{
                    color: "#697184",
                    backgroundColor: "#E5E5E5",
                    border: "1px solid rgb(105, 113, 132)",
                    height: "48px",
                  }}
                  options={["usa", "spain", "germany"]}
                />
              </div>
              <div
                style={{
                  color: "#697184",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Language
                <Select
                  name="profile-country"
                  style={{
                    color: "#697184",
                    backgroundColor: "#E5E5E5",
                    display: "flex",
                    border: "1px solid rgb(105, 113, 132)",
                    height: "48px",
                    flexDirection: "column",
                  }}
                  options={["English", "Frach", "German"]}
                />
              </div>
              {/* <div style={{ color: "#697184" }}>
            </div> */}
            </div>
            <div className="date">
              <div className="start-date-div">
                Start Date
                <input className="date-end" type="date" id="start"  {...register("start_date")}/>
               
              </div>
              <div className="end-date-div">
                End Date
                 <input className="date-end" type="date"   {...register("end_date")}/>
              </div>
            </div>
            <div className="max">
              Max Results
              <div className="flex">
                <input
                  className="input-max"
                  label="number"
                  inputStyle="box"
                  labelStyle="floating"
                  type="text"
                  {...register("max_results")}
                />
              </div>
            </div>
          </div>
          <div className="search-part-right">
            <div
              style={{ fontSize: "24px", color: "#697184" }}
              className="label-2"
            >
              is:retweet
              <div className="search-first-right-flex">
                <div className="no-check">Yes No</div>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-3"
                    type="checkbox"
                    name="Yes"
                    checked={checkRetWeet.checked === "Yes"}
                    onChange={(event) => checkRetWeet.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-3"
                    type="checkbox"
                    name="No"
                    checked={checkRetWeet.checked === "No"}
                    onChange={(event) => checkRetWeet.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "14px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              is:reply
              <div
                style={{ padding: "0px 0px 0px 136px" }}
                className="right-flex-1"
              >
                <div style={{ display: "flex" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkReply.checked === "Yes"}
                    onChange={(event) => checkReply.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkReply.checked === "No"}
                    onChange={(event) => checkReply.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "14px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              is:quote
              <div
                style={{ padding: "0px 0px 0px 122px" }}
                className="right-flex-1"
              >
                <div style={{ display: "flex" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkQuote.checked === "Yes"}
                    onChange={(event) => checkQuote.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkQuote.checked === "No"}
                    onChange={(event) => checkQuote.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "14px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              is:verified
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 86px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkVerified.checked === "Yes"}
                    onChange={(event) => checkVerified.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkVerified.checked === "No"}
                    onChange={(event) => checkVerified.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "50px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:mentions
              <div className="search-right-flex">
                <div className="no-check">Yes No</div>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkMentions.checked === "Yes"}
                    onChange={(event) => checkMentions.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-3"
                    type="checkbox"
                    name="No"
                    checked={checkMentions.checked === "No"}
                    onChange={(event) => checkMentions.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "12px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:profile
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 68px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkProfile.checked === "Yes"}
                    onChange={(event) => checkProfile.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkProfile.checked === "No"}
                    onChange={(event) => checkProfile.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "12px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:links
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 104px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkLinks.checked === "Yes"}
                    onChange={(event) => checkLinks.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkLinks.checked === "No"}
                    onChange={(event) => checkLinks.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "12px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:hashtags
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 16px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkHashtags.checked === "Yes"}
                    onChange={(event) => checkHashtags.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkHashtags.checked === "No"}
                    onChange={(event) => checkHashtags.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "12px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:media
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 70px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkMedia.checked === "Yes"}
                    onChange={(event) => checkMedia.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkMedia.checked === "No"}
                    onChange={(event) => checkMedia.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "12px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:images
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 46px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkImages.checked === "Yes"}
                    onChange={(event) => checkImages.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkImages.checked === "No"}
                    onChange={(event) => checkImages.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "12px 0px 0px",
                fontSize: "24px",
                color: "#697184",
              }}
              className="label-2"
            >
              has:video
              <div className="right-flex-1">
                <div style={{ display: "flex", padding: "0px 0px 0px 82px" }}>
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="Yes"
                    checked={checkVideo.checked === "Yes"}
                    onChange={(event) => checkVideo.handlerCheck(event)}
                  />
                  <input
                    style={{ height: "28px", cursor: "pointer" }}
                    className="checkbox-4"
                    type="checkbox"
                    name="No"
                    checked={checkVideo.checked === "No"}
                    onChange={(event) => checkVideo.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="btn-flex-search">
            <button
              style={{ height: "48px" }}
              className="btn-next"
              onClick={() => searchNext()}
            >
              <span>Next </span>
            </button>
          </div>
      </div>

      <div className="tweet-page" style={tweetState ? {} : { display: "none" }}>
        <div className="tweet-title">
          <h3>Tweet Fields</h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              fontSize: "24px",
              color: "#697184",
              padding: "44px 0px 0px 0px",
            }}
          >
            <p>Default Objects</p>
            <li>ID</li>
            <li>Text</li>
          </div>
          <div className="tweet-checkbox-flex">
            <div className="label">
              author_id
              <div className="tweet1-no-flex">
                <div className="no-check">No</div>
                <input
                  style={{ height: "28px" }}
                  className="input-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="text-check">
                Default is to Request All of these.
                <br /> Check ‘No’ to not request this object
              </div>
            </div>
            <div className="label-1">
              conversation_id
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              entities
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              context_annotation
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label">
              attachments
              <div className="tweet-no-flex-1">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
              <div className="tweet-text-check">
                Requires user context authentication?
              </div>
            </div>
            <div className="label-1">
              referenced_tweets
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              public_metrics
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              organic_metrics
              <div className="tweet-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              geo
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              source
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              created_at
              <div className="tweet1-no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="btn-flex-tweet">
          <button
            style={{
              width: "126px",
              height: "48px",
              fontSize: "24px",
              margin: "0px 20px 0px 0px",
              border: "1px solid #A30000",
              borderRadius: "10px",
              backgroundColor: "#E5E5E5",
              color: "#A30000",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            style={{ height: "48px" }}
            className="btn-next"
            onClick={() => tweetNext()}
          >
            <span>Next </span>
          </button>
        </div>
      </div>

      <div className="tweet-page" style={mediaState ? {} : { display: "none" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="media-flex">
            <div className="tweet-title">
              <h3>Media.fields</h3>
            </div>
            <div className="media-checkbox-flex">
              <div style={{ padding: "12px 0px" }} className="label">
                tipe
                <div className="media-no-flex">
                  <div className="no-check">Request</div>
                  <input
                    style={{ height: "28px" }}
                    className="input-checkbox"
                    type="checkbox"
                    checked={checkTipe.checked}
                    onChange={(event) => checkTipe.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                preview_image_url
                <div className="media-no-flex-1">
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkPreview.checked}
                    onChange={(event) => checkPreview.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                url
                <div
                  style={{ margin: "0px 174px" }}
                  className="media-no-flex-1"
                >
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkUrl.checked}
                    onChange={(event) => checkUrl.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                duration_ms
                <div style={{ margin: "0px 69px" }} className="media-no-flex-1">
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkDuration.checked}
                    onChange={(event) => checkDuration.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                public_metrics
                <div style={{ margin: "0px 47px" }} className="media-no-flex-1">
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkPublic.checked}
                    onChange={(event) => checkPublic.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                alt_text
                <div
                  style={{ margin: "0px 122px" }}
                  className="media-no-flex-1"
                >
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkAlt.checked}
                    onChange={(event) => checkAlt.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "24px",
                color: "#697184",
                padding: "44px 0px 0px 0px",
              }}
            >
              <p>Default Objects:</p>
              <li>Media_key</li>
              <li>tipe</li>
            </div>
            <div className="note">
              <p>
                Note: Must also include/request Expansion: <br />{" "}
                attachments.media_keys
              </p>
            </div>
          </div>
          <div className="media-flex-1">
            <div className="tweet-title">
              <h3>Place.fields</h3>
            </div>
            <div className="media-checkbox-flex">
              <div style={{ padding: "12px 0px" }} className="label">
                country
                <div className="media-no-flex">
                  <div className="no-check">Request</div>
                  <input
                    style={{ height: "28px" }}
                    className="input-checkbox"
                    type="checkbox"
                    checked={checkCountry.checked}
                    onChange={(event) => checkCountry.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                country_code
                <div
                  style={{ margin: "0px 10px 0px 100px" }}
                  className="media-no-flex-1"
                >
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkCountryCode.checked}
                    onChange={(event) => checkCountryCode.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                geo
                <div
                  style={{ margin: "0px 10px 0px 203px" }}
                  className="media-no-flex-1"
                >
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkGeo.checked}
                    onChange={(event) => checkGeo.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                name
                <div
                  style={{ margin: "0px 10px 0px 184px" }}
                  className="media-no-flex-1"
                >
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkName.checked}
                    onChange={(event) => checkName.handlerCheck(event)}
                  />
                </div>
              </div>
              <div style={{ padding: "12px 0px" }} className="label">
                place_type
                <div
                  style={{ margin: "0px 10px 0px 127px" }}
                  className="media-no-flex-1"
                >
                  <input
                    style={{ height: "28px" }}
                    className="checkbox-2"
                    type="checkbox"
                    checked={checkPlaceType.checked}
                    onChange={(event) => checkPlaceType.handlerCheck(event)}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "24px",
                color: "#697184",
                padding: "104px 0px 0px 0px",
              }}
            >
              <p>Default Objects:</p>
              <li>ID</li>
              <li>Full Name</li>
            </div>
            <div className="note">
              <p>
                Note: Must also include/request Expansion: <br />{" "}
                expansions=geo.place_id
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="btn-flex-tweet">
          <button
            style={{
              width: "126px",
              height: "48px",
              fontSize: "24px",
              margin: "0px 20px 0px 0px",
              border: "1px solid #A30000",
              backgroundColor: "#E5E5E5",
              borderRadius: "10px",
              color: "#A30000",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            style={{ height: "48px" }}
            className="btn-next"
            onClick={() => expansionsNext()}
          >
            <span>Next </span>
          </button>
        </div>
      </div>

      <div
        className="tweet-page"
        style={expansionsState ? {} : { display: "none" }}
      >
        <div className="tweet-title">
          <h3>Expansions Objects</h3>
        </div>
        <div className="exp-check" style={{ padding: "50px 0px" }}>
          <div
            style={{ fontSize: "24px", color: "#697184" }}
            className="label-2"
          >
            author_id
            <div className="exp-first-right-flex">
              <div className="no-check">Yes No</div>
              <div style={{ display: "flex" }}>
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-3"
                  type="checkbox"
                  name="Yes"
                  checked={checkAuthor.checked === "Yes"}
                  onChange={(event) => checkAuthor.handlerCheck(event)}
                />
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-3"
                  type="checkbox"
                  name="No"
                  checked={checkAuthor.checked === "No"}
                  onChange={(event) => checkAuthor.handlerCheck(event)}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "14px 0px 0px",
              fontSize: "24px",
              color: "#697184",
            }}
            className="label-2"
          >
            geo.place_id
            <div
              style={{ padding: "0px 0px 0px 324px" }}
              className="right-flex-1"
            >
              <div style={{ display: "flex" }}>
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="Yes"
                  checked={checkPlace.checked === "Yes"}
                  onChange={(event) => checkPlace.handlerCheck(event)}
                />
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="No"
                  checked={checkPlace.checked === "No"}
                  onChange={(event) => checkPlace.handlerCheck(event)}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "14px 0px 0px",
              fontSize: "24px",
              color: "#697184",
            }}
            className="label-2"
          >
            entities.mentions.username
            <div
              style={{ padding: "0px 0px 0px 163px" }}
              className="right-flex-1"
            >
              <div style={{ display: "flex" }}>
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="Yes"
                  checked={checkEntities.checked === "Yes"}
                  onChange={(event) => checkEntities.handlerCheck(event)}
                />
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="No"
                  checked={checkEntities.checked === "No"}
                  onChange={(event) => checkEntities.handlerCheck(event)}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "14px 0px 0px",
              fontSize: "24px",
              color: "#697184",
            }}
            className="label-2"
          >
            referenced_tweets.id .author_id
            <div className="right-flex-1">
              <div style={{ display: "flex", padding: "0px 0px 0px 86px" }}>
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="Yes"
                  checked={checkReferenced.checked === "Yes"}
                  onChange={(event) => checkReferenced.handlerCheck(event)}
                />
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="No"
                  checked={checkReferenced.checked === "No"}
                  onChange={(event) => checkReferenced.handlerCheck(event)}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              margin: "14px 0px 0px",
              fontSize: "24px",
              color: "#697184",
            }}
            className="label-2"
          >
            attachments.media_keys
            <div className="right-flex-1">
              <div style={{ display: "flex", padding: "0px 0px 0px 233px" }}>
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="Yes"
                  checked={checkKeys.checked === "Yes"}
                  onChange={(event) => checkKeys.handlerCheck(event)}
                />
                <input
                  style={{ height: "28px", cursor: "pointer" }}
                  className="checkbox-4"
                  type="checkbox"
                  name="No"
                  checked={checkKeys.checked === "No"}
                  onChange={(event) => checkKeys.handlerCheck(event)}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="btn-flex-tweet">
          <button
            style={{
              width: "126px",
              height: "48px",
              fontSize: "24px",
              margin: "0px 20px 0px 0px",
              border: "1px solid #A30000",
              backgroundColor: "#E5E5E5",
              color: "#A30000",
              borderRadius: "10px",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button type="submit" style={{ height: "48px" }} className="btn-next">
            <span>Test </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
