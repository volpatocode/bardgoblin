import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  UserWrapper,
  UserContent,
  UserPainel,
  UserImage,
  InfoInputWrapper,
  InfoInput,
  UserPainelFooter,
} from "./styles";

export default function index() {
  return (
    <>
      <UserWrapper>
        <Navbar />
        <UserContent>
          <UserPainel>
            <UserImage
              src="https://avatars.githubusercontent.com/u/102267019?v=4"
              alt="Usuário"
            />
            <InfoInputWrapper>
              <InfoInput type="text" placeholder="Email" />
            </InfoInputWrapper>
            <InfoInputWrapper>
              <InfoInput type="text" placeholder="Password" />
            </InfoInputWrapper>
            <UserPainelFooter>
              
            </UserPainelFooter>
          </UserPainel>
        </UserContent>
      </UserWrapper>
      <Footer />
    </>
  );
}
