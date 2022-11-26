import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { DialogContent, DialogContentText } from "@material-ui/core";

export default function Navbar() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  function finc1() {
    setIsOpen3(false);
    setIsOpen2(false);
    setIsOpen1(!isOpen1);
  }
  function finc2() {
    setIsOpen3(false);
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
  }
  function finc3() {
    setIsOpen2(false);
    setIsOpen1(false);
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="nav-div">
        <div className="photos">
          <div className="photos">
            <h3
              className="nav-right"
              style={{ marginTop: "0px", fontSize: "23px" }}
            >
              Biteable
            </h3>
            <div className="nav-right" onClick={finc1}>
              <b>Create</b>
              {isOpen1 ? (
                <KeyboardArrowUpIcon className="social-media" />
              ) : (
                <KeyboardArrowDownIcon className="social-media" />
              )}
              {isOpen1 ? (
                <DialogContent className="card">
                  <DialogContentText className="photos">
                    <div>
                      <p>Advertising </p>
                      <p>Business </p>
                      <p>Corporate </p>
                    </div>
                    <div>
                      <p>Enterprise </p>
                      <p>Business </p>
                      <p>HR </p>
                    </div>
                    <div>
                      <p>Linkedin </p>
                      <p>Marketing </p>
                      <p>Presentations </p>
                    </div>
                    <div>
                      <p>Sales </p>
                      <p>Training </p>
                    </div>
                  </DialogContentText>
                </DialogContent>
              ) : null}
            </div>

            <div className="nav-right" onClick={finc2}>
              <b>Resources</b>{" "}
              {isOpen2 ? (
                <KeyboardArrowUpIcon className="social-media" />
              ) : (
                <KeyboardArrowDownIcon className="social-media" />
              )}
              {/* <KeyboardArrowDownIcon className="social-media" /> */}
              {isOpen2 ? (
                <DialogContent className="card">
                  <DialogContentText className="photos">
                    <div>
                      <p>Blog </p>
                      <p>Comunity </p>
                      <p>Help Center </p>
                    </div>
                  </DialogContentText>
                </DialogContent>
              ) : null}
            </div>
            <div className="nav-right" onClick={finc3}>
              <b>Teams</b>
              {isOpen3 ? (
                <KeyboardArrowUpIcon className="social-media" />
              ) : (
                <KeyboardArrowDownIcon className="social-media" />
              )}
              {/* <KeyboardArrowDownIcon className="social-media" /> */}
              {isOpen3 ? (
                <DialogContent className="card">
                  <DialogContentText className="photos">
                    <div>
                      <p>Biteable Teams </p>
                      <p>Internal communication </p>
                      <p>Sales enablement </p>
                      <p>Templates </p>
                    </div>
                  </DialogContentText>
                </DialogContent>
              ) : null}
            </div>
            <div className="nav-right nav-items">
              <b>Pricing</b>
            </div>
          </div>
          <div className="photos nav-items">
            <div className="nav-right">
              <b>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://app.biteable.com/login"
                >
                  {" "}
                  Log In
                </a>
              </b>
            </div>
            <div>
              <b>Get Started</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
