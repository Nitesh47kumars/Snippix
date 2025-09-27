import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <label className="switch-button" htmlFor="switch">
        <div className="switch-outer">
          <input id="switch" type="checkbox" />
          <div className="button">
            <span className="button-toggle" />
            <span className="button-indicator" />
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 25.3px;
  }

  .switch-button .switch-outer {
    height: 100%;
    width: 50px;
    background: #252532;
    border-radius: 9999px;
    box-shadow: inset 0px 2px 4px 0px #16151c, 0px 1px 2px -1px #403f4e;
    border: 1px solid #32303e;
    padding: 3px;
    box-sizing: border-box;
    cursor: pointer;
    tap-highlight-color: transparent;
    position: relative;
  }

  .switch-button .switch-outer input[type="checkbox"] {
    opacity: 0;
    appearance: none;
    position: absolute;
  }

  .switch-button .switch-outer .button-toggle {
    height: 18px;
    width: 18px;
    background: linear-gradient(#3b3a4e, #272733);
    border-radius: 50%;
    box-shadow: inset 0px 2px 2px 0px #424151, 0px 2px 4px 0px #0f0e17;
    position: relative;
    z-index: 2;
    transition: left 0.3s ease-in;
    left: 0;
  }

  .switch-button .switch-outer .button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .switch-button .switch-outer .button-indicator {
    height: 12px;
    width: 12px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2px solid #ef565f;
    box-sizing: border-box;
    right: 1px;
    position: relative;
  }

  .switch-button
    .switch-outer
    input[type="checkbox"]:checked
    + .button
    .button-toggle {
    left: 24px; /* 50 - toggle width - padding = ~26 */
  }

  .switch-button
    .switch-outer
    input[type="checkbox"]:checked
    + .button
    .button-indicator {
    animation: indicator 0.5s forwards;
  }

  @keyframes indicator {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      border: 2px solid #60d480;
      left: -29px;
    }
  }
`;


export default Switch;
