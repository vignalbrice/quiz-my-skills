import { themeSelector } from "@/store/features/app/selectors";
import { useAppSelector } from "@/store/hooks";
import theme, { ThemeType } from "@/theme/theme";
import { DynamicTypography, Tag } from "@/theme/typography";
import React, { CSSProperties } from "react";

type TypgraphyProps = {
  tag: Tag;
  type: "regular" | "bold" | "medium" | "light" | "italic";
  children: React.ReactNode;
  style?: CSSProperties | undefined;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Typography: React.FC<TypgraphyProps> = ({
  children,
  tag,
  type,
  ...rest
}) => {
  const currentTheme = useAppSelector(themeSelector);

  function getCSSPropertyByType(type: string) {
    switch (type) {
      case "bold":
        return {
          fontWeight: 700,
        };
      case "regular":
        return {
          fontWeight: 400,
        };
      case "medium":
        return {
          fontWeight: 600,
        };
      case "light":
        return {
          fontWeight: 100,
        };
      case "italic":
        return {
          fontStyle: "italic",
        };
      default:
        return {
          fontWeight: 400,
        };
    }
  }

  return (
    <DynamicTypography
      tag={tag}
      style={{
        ...rest.style,
        ...getCSSPropertyByType(type),
        color: theme[currentTheme as ThemeType].color.text,
      }}
      {...rest}
    >
      {children}
    </DynamicTypography>
  );
};

export default Typography;
