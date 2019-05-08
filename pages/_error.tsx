import React from "react";

class Error extends React.Component {
  render() {
    return (
      <>
        <h1>Uuups! Chyba coś poszło nie tak...</h1>
        <p>
          Podana strona nie istnieje, albo wystąpił błąd na serwerze. Spróbuj
          odświeżyć stronę za kilka sekund lub upewnij się, że wpisany przez
          Ciebie adres jest prawidłowy.
        </p>
        <p>Jeżeli błąd nadal występuje, skontaktuj się ze mną drogą mailową.</p>
      </>
    );
  }
}

export default Error;
