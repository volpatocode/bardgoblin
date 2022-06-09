import styled from "@emotion/styled";
import { logoType } from "./index";

export const Logo = styled.div<logoType>`
  background: ${(props) => {
    switch (props.variant) {
      case "vertical":
        return "/public/images/vertical-logo 1.png";
      case "horizontal":
        return "/public/images/horizontal-logo 2.png";
      case "icon":
        return "/public/images/icon-logo.png";
      default:
        "/public/images/icon-logo.png";
    }
  }};
`;
