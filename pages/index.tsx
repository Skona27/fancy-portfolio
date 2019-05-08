import * as React from "react";

const Home = React.memo(() => {
  return (
    <>
      <h1>Kilka słów o mnie</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. <strong>Aliquam suscipit</strong> neque vel lobortis aliquet.
        Sed ac sem vitae mauris volutpat viverra. Vestibulum vestibulum quam
        quis dolor blandit, sed scelerisque dui dictum. Donec hendrerit tellus
        enim, in luctus nibh iaculis vel. Quisque sed justo eu elit vulputate
        porta vitae rutrum nulla. Vestibulum laoreet mi eu leo euismod
        efficitur. <em>Pellentesque nunc massa</em>, sollicitudin sed euismod
        at, consectetur eget sem.
      </p>

      <h2>Moje umiejętności</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.{" "}
        <a href="#">Github</a>
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>

      <h3>W jaki sposób programuję?</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>

      <pre>
        <span className="selector">code</span>
        <span className="selector">code</span>
        <span className="selector">code</span>
      </pre>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>

      <h2>Doświadczenie</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
        diam, consequat sit amet lectus eget, tincidunt tempor massa. Sed non
        nunc nisl. Aliquam suscipit neque vel lobortis aliquet. Sed ac sem vitae
        mauris volutpat viverra. Vestibulum vestibulum quam quis dolor blandit,
        sed scelerisque dui dictum. Donec hendrerit tellus enim, in luctus nibh
        iaculis vel. Quisque sed justo eu elit vulputate porta vitae rutrum
        nulla. Vestibulum laoreet mi eu leo euismod efficitur. Pellentesque nunc
        massa, sollicitudin sed euismod at, consectetur eget sem.
      </p>
    </>
  );
});

Home.displayName = "Home";
export default Home;
