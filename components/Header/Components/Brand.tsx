import React from "react";
import {useTheme} from "../../../hooks/Theme";

interface IProps {
  title: string;
  subtitle: string;
  image: {
    url: string;
    alt: string;
  };
}

export const Brand: React.FC<IProps> = React.memo(({title, subtitle, image}) => {
  const {bp} = useTheme();

  return (
    <>
      <img
        src={image.url}
        alt={image.alt}
        css={{
          borderRadius: "50%",
          height: "100%",
          width: "auto",
          [bp.fromDesktop]: {
            transform: "translateX(-40%)"
          }
        }}
      />

      <p css={{
        lineHeight: 1.2,
        fontSize: "1rem",
        letterSpacing: 1,
        fontWeight: 700,
        marginLeft: 16,
        [bp.max380]: {
          maxWidth: 100
        },
        [bp.fromDesktop]: {
          marginLeft: 0
        }
      }}>
        <span>{title}</span>

        <br/>

        <span css={{
          [bp.max380]: {
            display: "none"
          },
        }}>
        {subtitle}
      </span>
      </p>
    </>
  )
});

Brand.displayName = "Brand";
