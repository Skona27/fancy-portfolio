import React from "react";
import Head from "next/head";

class Error extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>
            Coś poszło nie tak | Jakub Skoneczny - Javascript Developer
          </title>
        </Head>

        <main>
          <h1>Uuups! Chyba coś poszło nie tak...</h1>
          <p>
            Podana strona nie istnieje, albo wystąpił błąd na serwerze. Spróbuj
            odświeżyć stronę za kilka sekund lub upewnij się, że wpisany przez
            Ciebie adres jest prawidłowy.
          </p>
          <p>
            Jeżeli błąd nadal występuje, skontaktuj się ze mną drogą mailową.
          </p>
        </main>
      </>
    );
  }
}

export default Error;
