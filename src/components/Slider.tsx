import React, { ReactNode } from "react";
import ReactSlick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { css } from "@emotion/react";

const ArrowButton = styled.button<{ pos?: "left" | "right" }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background: #fff;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0px;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 0px;
          transform: translate(50%, -50%);
        `};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  ),
};

interface Props {
  settings?: Settings;
  children?: ReactNode | ReactNode[];
}

export default function Slider({
  settings = DEFAULT_SETTINGS,
  children,
}: Props) {
  return <ReactSlick {...settings}>{children}</ReactSlick>;
}
