import React from "react";

import Logo from "../../components/Logo";
import { ResetPasswordImageBox } from "./resetpasswordstyles";

import {
  EmailSent,
  EmailSentBoxWrapper,
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
      <EmailSentBoxWrapper>
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
            <InfoAnchor href="/help/resetpassword">
              try another email adress
            </InfoAnchor>
          </FooterInfo>
        </BoxFooter>
      </EmailSentBoxWrapper>
      <ResetPasswordImageBox />
    </EmailSent>
  );
}
