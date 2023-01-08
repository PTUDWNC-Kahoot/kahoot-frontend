//These are the two hooks we use the most of through this Chat
import React, { useState, useEffect} from 'react';
import './ChatBox.css'
//This is a hook I created to reduce some of the bloat we get with watching inputs for changes.
import useInput from './useInput.js';
//Lets us import PubNub for our chat infrastructure capabailites.
// import PubNub from 'pubnub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons";
//Material UI Components
import {Card, CardActions, CardContent,List, ListItem,Button,Typography,Input} from '@mui/material';

export default function ChatBox() {
  
  function handleExitSlideShow () {
       
  }

  //This returns how our page will look, including a couple
  // components into the heirarchy to help organize our page. We can also pass information down
  //to our children through props.
    return(
        <Card className='chatBoxView' >
        <CardContent>
          <div className="chatBox__header">
            <p className='chatBox_name' >
              My chat
            </p>
            <button className="exitbutton" onClick={handleExitSlideShow}>
                    <FontAwesomeIcon className='icon__exit' icon={faX} size="lg"  /> 
            </button>
            {/* <Input
            //   style={{width:'50px'}}
              className="channel"
              id="channelInput"
              onKeyDown={handleKeyDown}
              placeholder ={channel}
              onChange = {tempChannel.onChange}
              value={tempChannel.value}
            /> */}
          </div>
          {/* <div >
            <Log messages={messages}/>
          </div> */}
        </CardContent>
        <CardActions>
          {/* <Input
            placeholder="Enter a message"
            fullWidth={true}
            id="messageInput"
            value={tempMessage.value}
            onChange={tempMessage.onChange}
            onKeyDown={handleKeyDown}
            inputProps={{'aria-label': 'Message Field',}}
            autoFocus={true}
          /> */}
          {/* <Button
            size="small"
            color="primary"
            onClick={publishMessage}
            >
            Submit
          </Button> */}
        </CardActions>
      </Card>
    
    )
}



 

//Log functional component that is the list of messages
function Log(props) {

  return(
    <List component="nav">
      <ListItem>
      <Typography component="div">
        { props.messages.map((item, index)=>(
          <Message key={index} uuid={item.uuid} text={item.text}/>
        )) }
      </Typography>
      </ListItem>
    </List>
  )
};

//Our message functional component that formats each message.
function Message(props){
  return (
    <div >
      { props.uuid }: { props.text }
    </div>
  );
}

