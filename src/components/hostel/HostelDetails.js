import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./HostelUI.css";
import Collapse from "react-bootstrap/Collapse";

export default function HostelDetails({
  fname,
  lname,
  hostelname,
  address,
  contact,
  facilities,
  rent,
  seats,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mt-5 container"
        style={{
          marginBottom: "10px",
        }}
      >
        <div
          className="card"
          style={{
            marginBottom: "10px",
            marginLeft: "65px",
            width: "115ch",
            background: "rgb(196 226 255)",
          }}
        >
          <div
            className="card-header container-fluid"
            style={{ borderRadius: "5px", cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          >
            <div className="container mt-3">
              <div className="row">
                {/* <p className='col-md-1'><b>{index}</b></p> */}
                <p style={{ fontWeight: "bolder" }} className="col-md-11">
                  Hostel Name
                </p>
                <p className="col-md-11">{hostelname}</p>
                {open ? (
                  <div
                    style={{
                      marginLeft: "600px",
                      marginTop: "-60px",
                      color: "red",
                    }}
                  >
                    "➖"
                  </div>
                ) : (
                  <div style={{ marginLeft: "600px", marginTop: "-60px" }}>
                    "➕"
                  </div>
                )}
              </div>
            </div>
          </div>
          <Collapse in={open}>
            <div className="text-center mt-3">
              <p>
                <b className="mt-5">Owner Name : </b> {fname} {lname}
              </p>
              <p>
                <b className="mt-5">Location : </b> {address}
              </p>
              <p>
                <b className="">Contact : </b> {contact}
              </p>
              <p>
                <b className="">Facilities : </b> {facilities}
              </p>
              <p>
                <b className="">Rent : </b>Rs. {rent}
              </p>
              <p>
                <b className="">Seats : </b> {seats}
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}
