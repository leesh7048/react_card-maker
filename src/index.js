import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import CardRepository from "./service/card_repository";

import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
ReactDOM.render(
  <React.StrictMode>
    <App
      cardRepository={cardRepository}
      authService={authService}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
