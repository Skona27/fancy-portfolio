import * as React from "react";
import { SkillsSection } from "../components/Skills/SkillsSection";
import { useTheme } from "../hooks/Theme";
import { skillsSections } from "../data/skills";

const Home = React.memo(() => {
  const { colors } = useTheme();
  return (
    <>
      <h1>Kilka słów o mnie</h1>

      <p>
        Cześć! Nazywam się <strong>Jakub Skoneczny</strong> i jestem{" "}
        <em>Javascript Developerem!</em>
        <i
          css={{ color: colors.pink, marginLeft: 7, marginRight: 10 }}
          className="fas fa-heart"
        />
        Programowaniem zajmuję się od dawien dawna i jest to moje hobby co
        sprawia, że praca to dla mnie czysta przyjemność. W wolnym czasie gram
        na gitarze i czytam ciekawostki o kosmosie i gwiazdach. Czasami zdarza
        mi się zagrać w pokera lub gry planszowe ze znajomymi.
      </p>

      <h2>Moje umiejętności</h2>
      <p>
        Poniżej znajduje się lista zdobytych przeze mnie umiejętności wraz z
        krótkim opisem prezentującym moje rozeznanie w danej technologii.{" "}
      </p>

      {skillsSections.map((section, index) => (
        <SkillsSection {...section} key={"skillSection-" + index} />
      ))}

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
