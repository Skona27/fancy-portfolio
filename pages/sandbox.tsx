import * as React from 'react';

const Sandbox = React.memo(() => {
  return (
    <main>
      <article>
        <h1>Kilka słów o RESTful API i HATEOAS</h1>

        <h2>Czym tak na prawdę jest REST i jakie korzyści płyną z implementacji HATEOAS?</h2>
        <p>API, czyli interfejs programowania aplikacji, to podstawowy sposób komunikacji pomiędzy dwiema osobnymi
          aplikacjami internetowymi. Aplikacja udostępniająca swoje API daje możliwość innym aplikacjom na korzystanie
          ze
          swoich zasobów lub funkcjonalności.</p>

        <p>Interfejsy programistyczne w pewnym czasie stały się na tyle popularne, że istotne było wprowadzenie pewnej
          standaryzacji w ich tworzeniu. Taka standaryzacja miała ułatwić innym deweloperom korzystanie z naszego API, a
          nam
          miała pomóc tworzyć rozbudowane i łatwo skalowalne serwisy. I tak oto powstał REST.</p>

        <h2>Co to jest REST?</h2>
        <p>REST jest jednym z najważniejszych i najbardziej znanych stylów architektonicznych dotyczących interfejsów
          aplikacji. REST składa się z sześciu warunków określających budowę i zachowanie naszego API. Są one
          następujące:</p>

        <ul>
          <li>
            <h3>Podział aplikacji na role Klient i Serwer:</h3>

            <p>Wymagany jest podział ról w taki sposób, by każda aplikacja odpowiadała za pewną część całej
              funkcjonalności.
              Serwer manipuluje zapytaniami i przerzuca dane, natomiast Klient wysyła zapytania i przetwarza
              odpowiedzi.</p>
          </li>

          <li>
            <h3>Bezstanowość serwera:</h3>

            <p>Oznacza to, iż każde zapytanie HTTP powinno zawierać szereg informacji potrzebnych do wykonania założonej
              akcji.
              Żadne inne dodatkowe parametry nie mogą być zapisane na serwerze, np. w sesji.</p>
          </li>

          <li>
            <h3>Cache:</h3>

            <p>Odpowiedzi na zapytania HTTP mogą zostać zapisane w pamięci podręcznej aplikacji klienta. Odpowiedź
              serwera
              powinna opisywać siebie samą jako możliwą do umieszczenia w pamięci podręcznej, lub też nie.</p>
          </li>

          <li>
            <h3>Jednolity interfejs:</h3>

            <p>Identyfikacja zasobów odbywa się poprzez jasno określone URI, manipulacja zasobami jest możliwa poprzez
              odpowiednie metody protokołu HTTP, w odpowiedzi na zapytanie klient otrzymuje linki do dalszych możliwych
              akcji
              (HATEOAS)</p>
          </li>

          <li>
            <h3>Podział na warstwy:</h3>

            <p>Podobne do podziału ról. Chodzi o to, by aplikacja kliencka nie była bezpośrednio powiązana z serwerem
              (kwestia
              skalowalności i load-balancingu).</p>
          </li>

          <li>
            <h3>Code-on-demand</h3>

            <p>Serwer jest w stanie tymczasowo zwiększyć możliwości aplikacji klienckiej.</p>
          </li>
        </ul>

        <figure>
          <img src="https://martinfowler.com/articles/images/richardsonMaturityModel/overview.png" alt="#"/>
          <figcaption>Richardson Maturity Model</figcaption>
        </figure>

        <p> Często można usłyszeć termin REST API w odniesieniu do aplikacji, która implementuje tylko część powyższych
          wymagań. Najczęściej implementowane wymagania to: podział ról i podział na warstwy, bezstanowość oraz
          jednolity
          interfejs poprzez implementacje URI i różnych metod HTTP. Najrzadziej: HATEOAS i Code-on-demand.</p>

        <h2>Czym dokładnie jest HATEOAS?</h2>
        <p>Hypermedia As The Engine Of Application State to podejście architektoniczne, które umożliwia odbiorcom
          łatwiejsze
          poruszanie się po naszym API, oraz które zwalnia aplikacje klienckie z części logiki dotyczącej sprawdzania
          uprawnień lub zasobów.</p>

        <p>Upraszczając powyższe, w każdej odpowiedzi na jakiekolwiek zapytanie do serwera znajdzie się pole
          zawierające
          linki do dalszych akcji, które są możliwe do wykonania.</p>

        <p>Przykład z życia. Tworzymy API, które ma zaimplementowaną opcję paginacji dostępną przy wyświetlaniu
          wszystkich
          zasobów. W odpowiedzi na zapytanie GET, w polu links otrzymujemy linki do dalszej, lub poprzedniej strony,
          o ile
          takie istnieją. W przypadku pisania aplikacji klienckiej jesteśmy w pewien sposób zwolnieni z obowiązku
          sprawdzenia, czy następna lub poprzednia strona istnieją – po prostu, jeśli w odpowiedzi otrzymamy link
          rel=next,
          pokażemy przycisk do następnej strony. Proste, prawda?

          Przykładowa odpowiedź z serwera w JSONnie:</p>

        <pre>
        code code
      </pre>

        <p>Jak widać, w odpowiedzi serwera na nasze zapytanie otrzymaliśmy dwa pola, z czego jedno z nich zawiera
          link do
          dalszej strony.</p>

        <p>Teraz inny przykład z życia, jak wykorzystać HATEOAS. Wyobraźmy sobie, że nasze API dopuszcza do
          edytowania lub
          usuwania zasobów tylko przez użytkownika, który je stworzył (autoryzacja odbywa się poprzez tokeny JWT).
          Cofnijmy
          się krok w tył do momentu, w którym użytkownik wybiera jeden z zasobów, na którym dopiero planuje wykonać
          jakąś
          akcję. Użytkownik taki wysyła żądanie typu GET pod pewien adres URI, w nagłówku umieszcza swój token. Jaką
          dostanie odpowiedź z serwera, a dokładniej co znajdzie się w polu links? Jeśli jest uprawniony do
          wykonania
          edycji
          lub usunięcia zasobu, w polu links otrzyma łącza do tych właśnie akcji. W przypadku, gdy użytkownik nie ma
          uprawnień do modyfikacji, pole links będzie puste.</p>

        <p>Na aplikacji klienckiej piszemy prostą pętlę, która iteruje przez wszystkie elementy tablicy pola links.
          Następnie
          w zależności od atrybutu rel, nasza aplikacja pokaże odpowiedni przycisk prowadzący do akcji na podany
          adres URI
          zdefiniowany w polu href.</p>


        <p>Prawda, że proste? W taki oto sposób jesteśmy w stanie pozbyć się brzydkiego kodu po stronie klienckiej,
          który
          odpowiadał za sprawdzenie uprawnień użytkownika do wykonania odpowiedniej akcji. Co za tym wynika,
          jesteśmy w
          stanie ograniczyć liczbę zapytań do serwera, co pomyślnie wypłynie na wydajność naszego API.</p>

        <p>Przykład przykładem, pokaż jakąś implementację
          Obecnie jestem na etapie tworzenia prostej aplikacji React.js, która opiera się właśnie na API z
          zaimplementowanym
          HATEOAS. API zostało napisane z wykorzystaniem frameworka Express w Node i bazą danych MySQL. Aplikacja
          będzie
          prezentowała dane na temat filmów – będzie można dodawać i usuwać filmy, będzie można przeszukiwać nasze
          API,
          sortować i paginować wyniki. Całość API jest już napisana, jednak aplikacja kliencka jest jeszcze na
          etapie
          prac.
          Po jej ukończeniu z pewnością przedstawię projekt w osobnym wpisie.</p>

        <a href="#">Github</a>


        <h2>Podsumowanie</h2>
        <p>HATEOAS potrafi usunąć wiele logiki biznesowej, lecz tylko takiej, która była powielona po stronie
          klienckiej.
          Nie
          muszę wspominać, że powinniśmy zawsze wprowadzić odpowiednią logikę i walidację po stronie serwera
          sprawdzającą,
          czy dana akcja jest dopuszczalna.</p>

        <p>Próbę nieautoryzowanego wykonania zapytania możemy zablokować np. poprzez inną konwencję adresów URI w
          naszej
          aplikacji klienckiej niż na serwerze – nie będzie wtedy wiadomo pod jaki adres zostaje wysłane faktyczne
          zapytanie.</p>
      </article>
    </main>
  )
});

Sandbox.displayName = "Sandbox";
export default Sandbox
