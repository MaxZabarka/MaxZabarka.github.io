import React, { useState } from "react";
import "./Form.scss";
import Input from "./Input/Input";
import emailjs from "emailjs-com";
import sendIcon from "../../../assets/Icons/send.png";
import spinnerIcon from "../../../assets/Icons/spinner.svg";

const Form = () => {
  // 0 = not sent
  // 1 = sending
  // 2 successfully sent
  const [sendState, setSendState] = useState(0);

  return (
    <div
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        setSendState(1);
        emailjs
          .sendForm(
            "service_e8cneih",
            "template_6q4axyq",
            e.target,
            "user_wgEfOov1MSiidC5c9ccon"
          )
          .then(
            () => {
              setSendState(2);
            },
            (error) => {
              alert(
                "Oh no! The contact form has failed. Try again or send me an email at maxim.zabarka@gmail.com"
              );
            }
          );
      }}
    >
      <form>
        <Input name="from_name" type="text" placeholder="Name" />
        <Input name="reply_to" type="email" placeholder="Email" />
        <Input name="company" type="text" placeholder="Company" />
        <Input name="message" textArea={true} placeholder="Message" />
        <button type="submit" disabled={sendState === 2 }>
          {sendState === 2 ? "Sent!" : "Send"}

          {sendState === 2 ? null : sendState === 0 ? (
            <img
              style={{
                width: "1.5rem",
                filter: "invert(1)",
                transform: "translateY(0.2rem) ",
                marginLeft: "0.6rem",
              }}
              alt=""
              src={sendIcon}
            />
          ) : (
            <img
              style={{
                width: "1rem",
                transform: "translateY(0.1rem) scale(2)",
                marginLeft: "0.6rem",
              }}
              alt=""
              src={spinnerIcon}
            />
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
