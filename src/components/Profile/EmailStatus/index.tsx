import React from "react";
import Link from "next/link";
import {
  EmailStatus,
  Verified,
  VerifiedIcon,
  NotVerified,
  NotVerifiedIcon,
  Pending,
  PendingIcon,
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
  }
  if (status === false) {
    return (
      <EmailStatus>
        <NotVerified>
          <NotVerifiedIcon /> Not Verified
        </NotVerified>
      </EmailStatus>
    );
  } else {
    return (
      <EmailStatus>
        <Pending>
          <PendingIcon /> Pending
        </Pending>
      </EmailStatus>
    );
  }
}
