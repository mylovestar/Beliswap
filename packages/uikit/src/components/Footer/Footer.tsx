import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "30px 40px 0px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[1, null, 2]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
          // borderBottom="1px solid #707477"
        >
          {/* {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))} */}
          <StyledSocialLinks order={[1]} pb={["0px", null, "0px"]} mb={["0", null, "0px"]} />

          {/* <Box display={["none", null, "block"]}>
            <LogoWithTextIcon isDark width="160px" />
          </Box> */}
          <Flex order={[1, null, 2]} alignItems="center" style={{marginTop: "-15px"}}>
            {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center" style={{marginTop: "-8px"}}>
            <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box>
            <Button
              as="a"
              href="https://beta.uniramp.com/"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
              className="visabutton"
            >
              {buyCakeLabel}
              <img src="/images/visa.png" width="40px" style={{ marginLeft: "5px" }}></img>
            </Button>
          </Flex>
        </Flex>
        {/* <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >

        </StyledToolsContainer> */}
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
