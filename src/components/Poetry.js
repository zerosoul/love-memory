import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
const StyledWrapper = styled.div`
  box-shadow: 0 0 8px 2px black;
  background-color: #a98175;
  min-height: 300px;
  font-family: 'FZ Spec';
`;
let TypedObj = null;
export default function Poetry({ id, currStep, content = '', ...rest }) {
  useEffect(() => {
    if (currStep == id && !TypedObj) {
      TypedObj = new Typed(`#${id}`, {
        strings: [`${content}`],
        startDelay: 30,
        typeSpeed: 100
      });
    }
  }, [content, currStep, id]);
  return <StyledWrapper id={id} className="step slide" {...rest}></StyledWrapper>;
}
