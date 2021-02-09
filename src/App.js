import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'
import { useState, useRef, useCallback, useEffect } from 'react';
import React from "react";
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState([]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({ width: 280, height: 180 });
    setImgSrc([...imgSrc, imageSrc]);
  });

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-primary" onClick={capture}>Capture photo</button>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-wrap">
          <div className="card">
            <div className="card-body">
              {/* This is some text within a card body. */}
              {imgSrc && (
                imgSrc.map((data, index) => {
                  return <img key={index} src={data} />
                })
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;



// // https://www.npmjs.com/package/react-webcam

// import useLongPress from "./useLongPress";
// import { useState, useRef, useCallback, useEffect } from 'react';
// import Webcam from "react-webcam";

// export default function App() {
//   const webcamRef = useRef(null);
//   const [imgSrc, setImgSrc] = useState([]);

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImgSrc([...imgSrc, imageSrc]);
//   });
//   const onLongPress = () => {
//     console.log('long is triggered')
//   };

//   const onClick = () => {
//     console.log('click is triggered')
//   }

//   const defaultOptions = {
//     shouldPreventDefault: true,
//     delay: 500,
//   };
//   const longPressEvent = useLongPress(onLongPress, onClick, capture, defaultOptions);
//   return (
//     <div className="App">
//       <Webcam
//         height={10}
//         width={10}
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//       />
//       <button {...longPressEvent}>use  Loooong  Press</button>
//       {imgSrc && (
//         imgSrc.map((data, index) => {
//           return <img key={index} src={data} />
//         })
//       )}
//     </div>
//   );
// }

