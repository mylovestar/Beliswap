import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props} style={{color: "#353547"}}>
      {children}
      <OpenNewIcon color={props.color ? props.color : "tertiary"} ml="4px" />
    </Link>
  );
};

export default LinkExternal;
