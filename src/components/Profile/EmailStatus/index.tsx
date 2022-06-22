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
  status: "verified" | "notverified" | "pending";
};

export default function index({ status }: logoType) {
  if (status === "verified") {
    return (
      <EmailStatus>
        <Verified>
          <VerifiedIcon /> Verified
        </Verified>
      </EmailStatus>
    );
  }
  if (status === "notverified") {
    return (
      <EmailStatus>
        <NotVerified>
          <NotVerifiedIcon /> Not Verified
        </NotVerified>
      </EmailStatus>
    );
  }
  if (status === "pending") {
    return (
      <EmailStatus>
        <Pending>
          <PendingIcon /> Pending
        </Pending>
      </EmailStatus>
    );
  }
}
