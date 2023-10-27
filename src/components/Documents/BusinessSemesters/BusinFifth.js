import React from "react";
import { useState, useEffect } from "react";
import { db, firebaseApp, storage } from "../../../firebase";
import { ref as ref_storage, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "../Comp.css";
import axios from 'axios'
import { ref as ref_database, onValue } from "firebase/database";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import { useHistory } from "react-router-dom";




function BusinFifth() {
  const [imageUpload, setimageUpload] = useState(null);
  const [imageList, setimageList] = useState([]);
  const [uploaded, setuploaded] = useState(null)
  const [userData, setData] = useState({
    title: ""
  });
  const [upData, setupData] = useState([])
  const user = useSelector(selectUser);
  const history = useHistory();


  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({ ...userData, [name]: value });


  }

  const submitData = async (event) => {
    event.preventDefault();
    const { title } = userData;

    const res = await fetch("https://askcui-985f2-default-rtdb.firebaseio.com/userDataRecords37.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title }),
    });

    // console.log(title)

    if (res) {
      swal("IMAGE UPLOADED !!", " ", "warning", {
        timer: 2000,
      });
    }
    else {
      alert("please fill data");
    }
  }


  const imageListRef = ref_storage(storage, "busin/5/");

  const uploadImage = () => {
    if (user === null){
      swal("Login or Signup to upload !!", " ", "warning", {
        timer: 2000,
      });
    history.push("/auth");}
    if (imageUpload == null) return;
    const imageRef = ref_storage(storage, `busin/5/${imageUpload.name + v4()}`);

    axios.post("http://localhost:3000", imageUpload, {
      onUploadProgress: (data) => {
        setuploaded(Math.round((data.loaded / data.total) * 100));
      }
    }).then((success) => {
      alert("submitted Successfully");
    }).catch((err) => {
      console.log("error faced");
    })


    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setimageList((prev) => [...prev, url]);

      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  useEffect(() => {
    const dbref = ref_database(db, "userDataRecords37");
    onValue(dbref, (snapshot) => {
      setupData([]);
      const info = snapshot.val();
      console.log(info);
      if (info !== null) {
        Object.values(info).map((userData) => {
          setupData((oldArray) => [...oldArray, userData]);
          // console.log(data.title);

        });
      }
    });
  }, []);


  console.log(imageList);



  return (
    <>
      <h1 className="Header">This is Business Fifth semester data</h1>
      <form id="form_ID" className="Header" onSubmit={submitData}>
        <h1>Enter Title</h1>
        <input type="text" name="title" placeholder="title" value={userData.title} onChange={postUserData} />
        <br />
        <br />

        <input
          type="file"
          onChange={(event) => {
            setimageUpload(event.target.files[0]);
          }}
        />
        <br />
        {uploaded && (<div className="progress mt-2">
          <div className="progress-bar" role='progressbar' aria-valuenow={uploaded} aria-valuemin='0' aria-valuemax='100' style={{ width: `${uploaded}%` }} >
            {`${uploaded}%`}
          </div>
        </div>)}
        <br />
        <button onClick={uploadImage}>Upload</button>

      </form>

      <section className="main-card--cointainer">
        {upData.map((data, index = 0) => {
          var url = imageList[index]
          return <div className="card-container">
            <h2 className="card-title">
              {data.title}

            </h2>

            <div className="card"><img src={url} alt={url} />
              <a href={url} download="download">Download</a>
              <div style={{ display: "none" }}>
                {index = index + 1}

              </div>
            </div>
          </div>
        })}

      </section>
    </>
  );
}

export default BusinFifth;

