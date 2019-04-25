import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import {useTheme} from "../../hooks/Theme";

export const Navigation = React.memo(() => {
  const {colors, bp, dispatch} = useTheme();
  const [isChecked, setIsChecked] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsChecked(!isChecked);

    if (isChecked) {
      dispatch({type: "setLightTheme"});
    }
    if (!isChecked) {
      dispatch({type: "setDarkTheme"});
    }
  }, [isChecked]);

  const liStyle = {
    fontWeight: 500,
    fontSize: "1.2rem",
    letterSpacing: 2,
    padding: "0 2px",
    borderBottom: "3px solid transparent",
    cursor: "pointer",
    transition: "border-color .15s ease-in",
    "&:not(:first-of-type)": {
      marginLeft: "2.5rem"
    },
    "&:hover": {
      borderColor: colors.pink
    }
  };

  const aStyle = {
    color: colors.pink
  };

  return (
    <header>
      <div css={{
        display: "flex",
        alignItems: "center",
        height: "5rem"
      }}>
        <img
          src={"https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/49800228_2432794613457256_8343369272679989248_n.jpg?_nc_cat=111&_nc_ht=scontent.fwaw3-1.fna&oh=a05039e963661dc3304dd0ecbf66ab28&oe=5D3D86D8"}
          css={{
            borderRadius: "50%",
            height: "100%",
            transform: "translateX(-40%)"
          }}
        />

        <h1 css={{
          lineHeight: 1.2,
          fontSize: "1rem",
          letterSpacing: 1,
          fontWeight: 700
        }}>
          <span>Jakub Skoneczny</span>
          <br/>
          <span>javascript developer</span>
        </h1>

        <nav css={{marginLeft: "auto"}}>
          <ul css={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "7rem",
            fontSize: "1.3rem"
          }}>
            <li><a href="#" css={aStyle}><i className="fab fa-github"></i></a></li>
            <li><a href="#" css={aStyle}><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#" css={aStyle}><i className="far fa-envelope"></i></a></li>
          </ul>
        </nav>

      </div>

      <nav css={{
        display: "flex",
        alignItems: "center",
        marginTop: "4rem"
      }}>
        <ul css={{
          listStyle: "none",
          display: "flex"
        }}>
          <li css={liStyle}>o mnie</li>
          <li css={liStyle}>realizacje</li>
          <li css={liStyle}>projekty</li>
          <li css={liStyle}>blog</li>
        </ul>
      </nav>

      <div css={{
        position: "absolute",
        top: "0",
        right: 0,
        padding: "1.75rem 3rem",
        [bp.fromTablet]: {
          padding: "1.5rem 3rem",
        },
        [bp.fromDesktop]: {
          position: "fixed"
        }
      }}>
        <Switch
          checked={isChecked}
          onChange={toggle}
          css={{
            transform: "translate(50%)",
            "span": {
              color: colors.pink
            },
            [bp.fromDesktop]: {
              transform: "translate(25%)",
            }
          }}
        />
      </div>
    </header>
  )
});

Navigation.displayName = "Navigation";