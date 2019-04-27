import * as React from 'react';
import {NavLink} from "./NavLink";
import {NavIcon} from "./NavIcon";
import {ThemeSwitch} from "./ThemeSwitch";
import {navigationMock} from "./mock";
import {useTheme} from "../../hooks/Theme";

export const Navigation = React.memo(() => {
  const {bp} = useTheme();

  return (
    <header css={{ marginBottom: "3.5rem" }}>
      <div css={{
        display: "flex",
        alignItems: "center",
        height: "5rem"
      }}>
        <img
          src={navigationMock.imageURL}
          alt="Moje zdjęcie profilowe"
          css={{
            borderRadius: "50%",
            height: "100%",
            [bp.fromDesktop]: {
              transform: "translateX(-40%)"
            }
          }}
        />

        <h1 css={{
          lineHeight: 1.2,
          fontSize: "1rem",
          letterSpacing: 1,
          fontWeight: 700,
          marginLeft: 16,
          [bp.fromDesktop]: {
            marginLeft: 0
          }
        }}>
          <span>{navigationMock.title}</span>
          <br/>
          <span>{navigationMock.subtitle}</span>
        </h1>

        <nav css={{marginLeft: "auto"}}>
          <ul css={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "7rem",
            fontSize: "1.3rem"
          }}>
            <NavIcon href="https://github.com/Skona27" target="_blank"
               aria-label="Profil Github" rel="noreferrer">
              <i className="fab fa-github"></i>
            </NavIcon>
            <NavIcon href="https://www.linkedin.com/in/jskoneczny/" target="_blank"
               aria-label="Profil LinkedIn" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </NavIcon>
            <NavIcon href="mailto:skoneczny.j@gmail.com" aria-label="Skontaktuj się ze mną">
              <i className="far fa-envelope"></i>
            </NavIcon>
          </ul>
        </nav>
      </div>

      <nav css={{
        display: "flex",
        alignItems: "center",
        marginTop: "2.5rem",
        [bp.fromDesktop]: {
          marginTop: "4rem",
        }
      }}>
        <ul css={{
          listStyle: "none",
          display: "flex"
        }}>
          {navigationMock.links.map(link =>
            <NavLink href={link.href} active={link.href === navigationMock.activePage} key={link.href}>
              {link.title}
            </NavLink>
          )}
        </ul>
      </nav>

      <ThemeSwitch/>
    </header>
  )
});

Navigation.displayName = "Navigation";