import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Label from "./Label";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "../styles/IssueItem.css";
import Assignee from "./Assignee";
const IssueItem = ({ item }) => {
  const date=item.created_at.slice(8,10)
  const curDate=new Date();
  const curDay=curDate.getDate();
  const days=Number(curDay)-Number(date)
  

  return (
    <div className='util-2'
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        marginLeft: "150px",
        border: "0.1px solid #cfcfcf",
        padding: "10px",
        
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="util-1">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="checkbox" />
            <ErrorOutlineIcon
              style={{
                color: "green",
                fontWeight: "lighter",
                fontSize: "18px",
                padding: "0px 5px",
              }}
            />
          </div>
          <div style={{ display: "flex",flexDirection:'column',alignItems:'flex-start'}}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: "550" }}>
             <a href={item.html_url} className="util-3"> {item.title}</a>
            </span>
            {item.labels.map((labelItem) => (
              <Label labels={labelItem} />
            ))}
          </div>
          <span style={{color:'#807c7c',paddingTop:'9px',fontSize:'13px'}}>#{item.number} opened {days} days ago by {item.user.login}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Assignee assignees={item.assignees} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "80px",
            }}
          >
            <ChatBubbleOutlineIcon style={{ marginRight: "7px",color:'#666363',fontSize:'20px' }} />
            <span style={{color:'#807c7c',fontSize:'13px',fontWeight:'500' }}>{item.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueItem;
