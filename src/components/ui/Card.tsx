import { Theme } from "@/theme/theme";
import React from "react";
import styled from "styled-components";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <StyledCard {...rest} className={`h-16 lg:h-20 ${rest.className}`}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div<{
  theme: Theme;
}>`
  background: ${({ theme }) => theme.color.background};
  box-shadow: 0px 16px 40px rgba(143, 160, 193, 0.14);
  border-radius: 0.75rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
`;

export default Card;
