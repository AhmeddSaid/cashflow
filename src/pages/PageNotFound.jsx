import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPageNotFound = styled.h2`
  text-shadow: 0px 0px 8px var(--alt-color);
  color: var(--white-color);
  font-family: "Black Ops One";
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
`;

const StyledLink = styled(Link)`
  height: 60px;
  padding: 20px;
  color: var(--white-color);
  font-size: 3rem;
  text-align: center;
`;

const AnimatedText = styled.div`
  svg {
    font-family: "Black Ops One", sans-serif;
    width: 72rem;
    height: 100%;
    font-size: 8rem;
  }
  svg text {
    animation: stroke 8s infinite alternate;
    stroke-width: 2;
    stroke: var(--alt-color);
  }
  @keyframes stroke {
    0% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba(80, 150, 164, 1);
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba(80, 150, 164, 1);
    }
    80% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba(80, 150, 164, 1);
      stroke-width: 3;
    }
    100% {
      fill: var(--white-color);
      stroke: rgba(80, 150, 164, 0);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <AnimatedText className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            404
          </text>
        </svg>
      </AnimatedText>
      <AnimatedText className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Page Not Found
          </text>
        </svg>
      </AnimatedText>
      <StyledLink to="/">Go Back</StyledLink>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
