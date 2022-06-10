import styled from "@emotion/styled";
import { logoType } from "./index";

export const Logo = styled.div<logoType>`
  background: ${(props) => {
    switch (props.variant) {
      case "vertical":
        return "/public/vertical-logo.png";
      case "horizontal":
        return "/public/horizontal-logo.png";
      case "icon":
        return "/public/icon-logo.png";
      default:
        "/public/icon-logo.png";
    }
  }};
  width: 100%;
  height: 100%;
`;
