import React from "react";

import Logo from "../../components/Logo";
import { ForgotPasswordImageBox } from "./forgotPasswordStyles";

import {
  EmailSent,
  EmailSentBox,
  BoxLogo,
  BoxContent,
  BoxInfo,
  InfoSubtitle,
  BoxButtons,
  EmailButton,
  SkipButton,
  BoxFooter,
  FooterInfo,
  InfoAnchor,
} from "./emailsentstyles";

export default function index() {
  return (
    <EmailSent>
      <EmailSentBox>
        <BoxLogo>
          <Logo variant="horizontal" />
        </BoxLogo>
        <BoxContent>
          <BoxInfo>
            <InfoSubtitle>
              We have sent a password recover instructions to your email.
            </InfoSubtitle>
          </BoxInfo>
          <BoxButtons>
            <EmailButton href="https://mail.google.com/mail/u/0/">
              Open email
            </EmailButton>
            <SkipButton href="/">Skip, I'll confirm later</SkipButton>
          </BoxButtons>
        </BoxContent>
        <BoxFooter>
          <FooterInfo>
            Did not receive the email? Check your spam filter, or{" "}
            <InfoAnchor href="/help/forgotpassword">
              try another email adress
            </InfoAnchor>
          </FooterInfo>
        </BoxFooter>
      </EmailSentBox>
      <ForgotPasswordImageBox />
    </EmailSent>
  );
}
