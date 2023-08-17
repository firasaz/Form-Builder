import React from 'react'

export default function SendOTP() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: {
            "lang": "xxx",
            "userName":"xxxxxx",
            "number": "966533609625",
            "userSender":"xxxxxx",
            "apiKey":"xxxxxx",
        }
      }

      const sendOTP = () => {
      fetch('https://www.msegat.com/gw/sendsms.php', requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      }
  return (
    <div>
        <button onClick={sendOTP}>Send OTP</button>
    </div>
  )
}
