import React from "react";
import ReactDOM from "react-dom";
import comprendreSonOeuf from './img/comprendre-son-oeuf.jpg'; 

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
      <>
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <img src={comprendreSonOeuf} />
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1040;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .modal-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1050;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            outline: 0;
            display: flex;
            align-items: center;
          }

          .modal {
            z-index: 100;
            background: #e7decd;
            position: relative;
            margin: auto;
            border-radius: 5px;
            max-width: 500px;
            width: 90%;
            padding: 1rem;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .modal-close-button {
            font-size: 1.8rem;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
            border-radius: 20px;
            width: 40px;
            height: 40px;
            background: #8F675D;
          }
          img {
            width: 80%;
          }
        `}</style>
      </>,
      document.body
    )
    : null;

export default Modal;