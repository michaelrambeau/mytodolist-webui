import React from "react";
import vagueTime from "vague-time";

/*
 Function equivalent to moment(<stringDate>).fromNow()
but `vague-time` module is lighter than Moment!
*/
function formatDate(strDate) {
  try {
    return vagueTime.get({
      to: new Date(strDate)
    });
  } catch (e) {
    // avoid throwing "Invalid date" errors
    return "?";
  }
}

const DateFromNow = ({ date }) => <span>{formatDate(date)}</span>;

export default DateFromNow;
