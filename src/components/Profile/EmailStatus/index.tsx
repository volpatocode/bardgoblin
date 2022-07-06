import React from "react";

import {
  EmailStatus,
  Verified,
  VerifiedIcon,
  NotVerified,
  NotVerifiedIcon,
} from "./styles";

export type logoType = {
  status: boolean;
};

export default function index({ status }: logoType) {
  if (status === true) {
    return (
      <EmailStatus>
        <Verified>
          <VerifiedIcon /> Verified
        </Verified>
      </EmailStatus>
    );
  } else {
    return (
      <EmailStatus>
        <NotVerified>
          <NotVerifiedIcon /> Not Verified
        </NotVerified>
      </EmailStatus>
    );
  }
}
