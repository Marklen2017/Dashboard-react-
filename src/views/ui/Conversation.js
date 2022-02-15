import { Input, CardTitle } from "reactstrap";

const Conversation = () => {
  const shoot = () => {};
  return (
    <div className="container">
      <div>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Conversation Lookup
        </CardTitle>
        <div className="mbsc-row-1">
          <div
            style={{ fontSize: "24px" }}
            className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3"
          >
            Username
            <Input
              className="input-search"
              label="text"
              inputStyle="box"
              labelStyle="floating"
            />
          </div>
          <div
            style={{ fontSize: "24px" }}
            className="formlik mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3"
          >
            Keyword
            <Input
              className="input-search"
              label="text"
              inputStyle="box"
              labelStyle="floating"
            />
          </div>
          <div className="checkbox-flex">
            <div className="label">
              author_id
              <div className="no-flex">
                <div className="no-check">No</div>
                <input
                  style={{ height: "28px" }}
                  className="input-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="text-check">
                Default is to Request All of these. <br /> Check ‘No’ to not
                request this <br /> object
              </div>
            </div>
            <div className="label-1">
              conversation_id
              <div className="no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              created_at
              <div className="no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              in_reply_to_user_id
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "1px",
                  backgroundColor: "#697184",
                }}
              ></div>
              <div className="no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label">
              author_id
              <div className="no-flex-1">
                <input
                  style={{ height: "28px" }}
                  className="input-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="text-check">
                Doubt these work for this query <br /> type - but worth testing
              </div>
            </div>
            <div className="label-1">
              context_annotation
              <div className="no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="label-1">
              attachments
              <div className="no-flex">
                <input
                  style={{ height: "28px" }}
                  className="checkbox-2"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part-right">
        <div style={{ fontSize: "24px", color: "#697184" }} className="label-2">
          is:retweet
          <div className="right-flex">
            <div className="no-check">Exclude</div>
            <input
              style={{ height: "28px" }}
              className="checkbox-3"
              type="checkbox"
            />
          </div>
        </div>
        <div
          style={{
            padding: "26px 0 20px 0px",
            fontSize: "24px",
            color: "#697184",
          }}
          className="label-2"
        >
          is:quote
          <div style={{ padding: "0px 0px 0px 44px" }} className="right-flex-1">
            <input
              style={{ height: "28px" }}
              className="checkbox-4"
              type="checkbox"
            />
          </div>
        </div>
      </div>
      <div className="btn-flex">
        <button className="btn-next" onClick={shoot}>
          <span>Test </span>
        </button>
      </div>
    </div>
  );
};

export default Conversation;
