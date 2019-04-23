import * as React from 'react';

export const Navigation = React.memo(() => {
  const liStyle = {
    fontWeight: 500,
    fontSize: "1.2rem",
    textTransform: "lowercase",
    letterSpacing: 2,
    padding: "0 2px",
    borderBottom: "3px solid transparent",
    cursor: "pointer",
    transition: "border-color .15s ease-in",
    "&:not(:first-of-type)": {
      marginLeft: "2.5rem"
    },
    "&:hover": {
      borderColor: "#555"
    }
  };

  return (
    <header>

      <div css={{ display: "flex", alignItems: "center", height: "5rem" }}>
        <img src={"https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/49800228_2432794613457256_8343369272679989248_n.jpg?_nc_cat=111&_nc_ht=scontent.fwaw3-1.fna&oh=a05039e963661dc3304dd0ecbf66ab28&oe=5D3D86D8"}
          css={{ borderRadius: "50%", height: "100%", transform: "translateX(-40%)" }}
        />

        <h1 css={{ lineHeight: 1.2, fontSize: "1rem", letterSpacing: 1, fontWeight: 700 }}>
          <span>Jakub Skoneczny</span>
          <br/>
          <span>javascript developer</span>
        </h1>

        <div css={{marginLeft: "auto"}}>
          TOGGLE
        </div>
      </div>

      <nav css={{ display: "flex", alignItems: "center", marginTop: "4rem" }}>
        <ul css={{ listStyle: "none", display: "flex" }}>
          <li css={liStyle}>About</li>
          <li css={liStyle}>Commercial work</li>
          <li css={liStyle}>Projects</li>
          <li css={liStyle}>Blog</li>
        </ul>
      </nav>
    </header>
  )
});

Navigation.displayName = "Navigation";