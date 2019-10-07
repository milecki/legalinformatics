import React from "react"
import styled from "styled-components"

import Container from "../globals/container"
import Accordion from "../globals/accordion"
import SectionHeading from "../globals/sectionHeading"

import wsKonferencje from "../../images/ws-konferencje-i-szkolenia.png"
import wsSystemy from "../../images/ws-systemy-teleinformatyczne.png"
import wsWarsztaty from "../../images/ws-warsztaty.png"
import szKonferencje from "../../images/sz-konferencje-i-szkolenia.png"
import szSystemy from "../../images/sz-systemy-teleinformatyczne.png"
import szUslugi from "../../images/sz-uslugi-wydawnicze.png"
import bInformatyka from "../../images/b-informatyka-prawnicza.png"
import bSystemy from "../../images/b-systemy-teleinformatyczne.png"
import bDepozyt from "../../images/b-depozyt-kodu-zrodlowego.png"
import bKonferencje from "../../images/b-konferencje-i-szkolenia.png"
import apEadministracja from "../../images/ap-eadministracja.png"
import apKonferencje from "../../images/ap-konferencje-i-szkolenia.png"
import apSystemy from "../../images/ap-systemy-teleinformatyczne.png"

const OfferSection = styled.section`
  padding: 80px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CategoryTitle = styled.h3`
  color: #1e7cc1;
  font-size: 32px;
  padding: 40px 120px 0;
  text-align: center;
  width: 100%;
`

const Category = styled.div`
  padding: 0 0 30px;

  &:last-of-type {
    padding: 0;
  }
`

const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 100px;
  padding-right: 100px;
`

const Service = styled.div``

const ServiceDescription = styled.div`
  font-size: 16px;
  margin: -2px 0 10px;
  padding: 0 0 10px;
`

const DescriptionParagraph = styled.p`
  margin-top: 10px;
`

const DescriptionListIntro = styled.p`
  margin-top: 20px;
`

const DescriptionList = styled.ul``

const DescriptionListItem = styled.li`
  margin-top: 10px;
  list-style-type: disc;
`

function OfferCategories() {
  return (
    <>
      <CategoryTitle>Wymiar sprawiedliwości</CategoryTitle>
      <Category>
        <ServiceList>
          <Accordion allowMultipleOpen>
            <Service
              imgSrc={wsSystemy}
              label="Systemy teleinformatyczne"
              isOpen
            >
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Legal Informatics projektuje i dostarcza systemy
                    teleinformatyczne dla instytucji publicznych oraz biznesu.
                    Oferujemy pionierskie rozwiązania technologiczne służące
                    poprawie efektywności i rozwiązywaniu problemów z zakresu
                    obsługi prawnej i administracyjnej danego podmiotu.
                    Współpracujący z nami specjaliści z branży IT mają
                    wieloletnie doświadczenie pracy w dużych firmach
                    informatycznych o charakterze międzynarodowym.
                  </DescriptionParagraph>

                  <DescriptionListIntro>
                    Funkcje dostarczanych przez nas systemów to m.in.:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Anonimizacja danych wrażliwych Digitalizacja i
                      archiwizacja dokumentów
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Przeszukiwanie pełnotesktowe oraz kontekstowe zasobów baz
                      danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Tworzenie specjalistycznych - prawniczych baz danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Eksperckie analizy oraz opinie prawne.
                    </DescriptionListItem>
                  </DescriptionList>

                  <DescriptionListIntro>
                    Jakie mamy doświadczenie?
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Stworzenie reguł anonimizacyjnych, wykorzystanych w
                      Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów
                      powszechnych dostępnej w Internecie.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Stworzenie serwisu prawnego dla przedsiębiorstwa
                      wchodzącego w skład indeksu WIG20, służącego wspieraniu
                      procesów decyzyjnych w sferze obługi prawnej.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zaprojektowanie oraz stworzenie systemu
                      teleinformatycznego dla organów samorządów zawodowych.
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={wsWarsztaty} label="Warsztaty">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Legal Informatics ma w swojej ofercie również interaktywne
                    warsztaty stanowiskowe, odbywające się przy użyciu sprzętu
                    komputerowego bądź tabletów, przygotowanych do pracy i
                    podłączonych do Internetu. Warsztaty odbywają się pod okiem
                    wykwalifikowanego trenera, z instruktażem na poziomie
                    dostosowanym do grupy uczestników, oraz z możliwością
                    przećwiczenia funkcji programu bądź aplikacji będącej
                    przedmiotem szkolenia.
                  </DescriptionParagraph>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={wsKonferencje} label="Konferencje i szkolenia">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Organizujemy interdyscyplinarne konferencje, które służą
                    wymianie wiedzy i doświadczenia specjalistów i praktyków z
                    różnych obszarów prawa oraz technologii informatycznych.
                    Prowadzimy również szkolenia, które łączą najwyższy poziom
                    merytoryczny oraz praktyczną wymowę poruszanych zagadnień.
                    Ich zakres i tematykę przygotowujemy w odpowiedzi na
                    potrzeby klientów.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Przykładowe tematy szkoleń dla przedstawicieli wymiaru
                    sprawiedliwości:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      E-PUAP - prawa i obowiązki
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Ochrona danych osobowych - prawa i obowiązki
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Praktyczne aspekty udzielania zamówień publicznych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Ochrona danych osobowych a dostęp do informacji publicznej
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
          </Accordion>
        </ServiceList>
      </Category>

      <CategoryTitle>Samorządy zawodowe</CategoryTitle>
      <Category>
        <ServiceList>
          <Accordion allowMultipleOpen>
            <Service imgSrc={szUslugi} label="Usługi wydawnicze">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Legal Informatics zapewnia realizację całego procesu
                    wydawniczego, od przygotowania tekstu (korekta, redakcja i
                    skład), poprzez projekt okładki, nadanie numeru ISBN, aż do
                    druku.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Wydajemy czasopisma i publikacje książkowe:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      monografie naukowe
                    </DescriptionListItem>
                    <DescriptionListItem>komentarze</DescriptionListItem>
                    <DescriptionListItem>
                      podręczniki akademickie
                    </DescriptionListItem>
                    <DescriptionListItem>
                      publikacje pokonferencyjne
                    </DescriptionListItem>
                  </DescriptionList>
                  <DescriptionParagraph>
                    Współpracujemy z wydawnictwem Oficyna Prawnicza.
                  </DescriptionParagraph>
                </ServiceDescription>
              </div>
            </Service>
            <Service label="Konferencje i szkolenia" imgSrc={szKonferencje}>
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Organizujemy interdyscyplinarne konferencje, które służą
                    wymianie wiedzy i doświadczenia specjalistów i praktyków z
                    różnych obszarów prawa oraz technologii informatycznych.
                    Prowadzimy również szkolenia, które łączą najwyższy poziom
                    merytoryczny oraz praktyczną wymowę poruszanych zagadnień.
                    Ich zakres i tematykę przygotowujemy w odpowiedzi na
                    potrzeby klientów.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Przykładowe tematy szkoleń dla przedstawicieli samorządów
                    zawodowych:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Postępowanie dyscyplinarne w praktyce
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Ochrona danych osobowych - prawa i obowiązki
                    </DescriptionListItem>
                    <DescriptionListItem>
                      IT a prawo własności intelektualnej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Prawo podatkowe w praktyce
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zasady odpowiedzialności w prawie cywilnym
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zmiany w prawie pracy w 2015 roku
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Gwarancja i rękojmia
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={szSystemy} label="Systemy teleinformatyczne">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Legal Informatics projektuje i dostarcza systemy
                    teleinformatyczne dla instytucji publicznych oraz biznesu.
                    Oferujemy pionierskie rozwiązania technologiczne służące
                    poprawie efektywności i rozwiązywaniu problemów z zakresu
                    obsługi prawnej i administracyjnej danego podmiotu.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Współpracujący z nami specjaliści z branży IT mają
                    wieloletnie doświadczenie pracy w dużych firmach
                    informatycznych o charakterze międzynarodowym.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Funkcje dostarczanych przez nas systemów to m.in.:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Anonimizacja danych wrażliwych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Digitalizacja i archiwizacja dokumentów
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Przeszukiwanie pełnotesktowe oraz kontekstowe zasobów baz
                      danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Tworzenie specjalistycznych - prawniczych baz danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Eksperckie analizy oraz opinie prawne
                    </DescriptionListItem>
                  </DescriptionList>

                  <DescriptionListIntro>
                    Jakie mamy doświadczenie?
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Zaprojektowanie oraz stworzenie systemu
                      teleinformatycznego dla organów samorządów zawodowych.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Stworzenie serwisu prawnego dla przedsiębiorstwa
                      wchodzącego w skład indeksu WIG20, służącego wspieraniu
                      procesów decyzyjnych w sferze obługi prawnej.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Stworzenie reguł anonimizacyjnych, wykorzystanych w
                      Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów
                      powszechnych dostępnej w Internecie.
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
          </Accordion>
        </ServiceList>
      </Category>

      <CategoryTitle>Biznes</CategoryTitle>
      <Category>
        <ServiceList>
          <Accordion allowMultipleOpen>
            <Service imgSrc={bInformatyka} label="Informatyka prawnicza">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Informatyka prawnicza to stosunkowo młoda (narodziła się w
                    latach 60. XX w.), ale prężnie rozwijana dziedzina nauki,
                    która bada procesy gromadzenia, systematyzowania,
                    przetwarzania i wyszukiwania informacji o prawie przy pomocy
                    komputera. Eksperci Legal Informatics aktywnie współtworzą
                    tę dyscyplinę na gruncie teorii (publikacje naukowe, udział
                    w konferencjach i artykuły w prasie) oraz praktyki -
                    pomagając firmom i instytucjom publicznym w implementacji
                    jej ustaleń.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    W obszarze naszych zainteresowań mieszczą się m.in.:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      przepisy o ochronie danych osobowych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      przepisy o ochronie programów komputerowych (prawo
                      autorskie i prawa pokrewne)
                    </DescriptionListItem>
                    <DescriptionListItem>
                      badanie możliwości stworzenia programów do automatycznego
                      rozstrzygania
                    </DescriptionListItem>
                    <DescriptionListItem>
                      informacyjny aspekt zasad redagowania i ogłaszania aktów
                      prawnych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      systemy eksperckie i programy do wyszukiwania informacji
                      prawnej
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={bSystemy} label="Systemy teleinformatyczne">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Legal Informatics projektuje i dostarcza systemy
                    teleinformatyczne dla instytucji publicznych oraz biznesu.
                    Oferujemy pionierskie rozwiązania technologiczne służące
                    poprawie efektywności i rozwiązywaniu problemów z zakresu
                    obsługi prawnej i administracyjnej danego podmiotu.
                    Współpracujący z nami specjaliści z branży IT mają
                    wieloletnie doświadczenie pracy w dużych firmach
                    informatycznych o charakterze międzynarodowym.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Funkcje dostarczanych przez nas systemów to m.in.:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Anonimizacja danych wrażliwych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Digitalizacja i archiwizacja dokumentów
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Przeszukiwanie pełnotekstowe oraz kontekstowe zasobów baz
                      danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Tworzenie specjalistycznych - prawniczych baz danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Eksperckie analizy oraz opinie prawne
                    </DescriptionListItem>
                  </DescriptionList>

                  <DescriptionListIntro>
                    Jakie mamy doświadczenie?
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Stworzenie serwisu prawnego dla przedsiębiorstwa
                      wchodzącego w skład indeksu WIG20, służącego wspieraniu
                      procesów decyzyjnych w sferze obsługi prawnej.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zaprojektowanie oraz stworzenie systemu
                      teleinformatycznego dla organów samorządów zawodowych.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Stworzenie reguł anonimizacyjnych, wykorzystanych w
                      Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów
                      powszechnych dostępnej w Internecie.
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={bDepozyt} label="Depozyt Kodu Źródłowego">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Depozyt Kodu Źródłowego stanowi ochronę przed skutkami
                    upadłości producenta oprogramowania. To praktyka stosowana
                    już na całym świecie, która jest nieuchronną przyszłością
                    również dla polskiej branży IT. Legal Informatics oferuje
                    obsługę techniczną oraz prawną całego procesu we współpracy
                    z najlepszymi kancelariami notarialnymi w kraju.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Na czym to polega? Licencjodawca składa kody źródłowe u
                    depozytariusza, jednocześnie upoważniając licencjobiorcę do
                    wydobycia i dalszego wykorzystania kodów źródłowych w
                    przypadkach, które określa umowa. Owe przypadki to m.in.
                    zaprzestanie rozwoju aplikacji przez licencjodawcę, a także
                    upadłość, likwidacja bądź wrogie przejęcie producenta
                    oprogramowania przez inny podmiot.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Depozytariuszem jest kancelaria notarialna współpracująca z
                    ekspertami Legal Informatics. Dzięki temu połączeniu
                    licencjodawca składający kody źródłowe ma gwarancję
                    bezpieczeństwa swojego depozytu, a licencjobiorca jest pewny
                    tego, że nośnik danych rzeczywiście zawiera to, co było
                    przedmiotem umowy.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    W celu zwiększenia bezpieczeństwa procedury, oprogramowanie
                    zapisane na nośniku jest dodatkowo szyfrowane. Klucz posiada
                    jedynie notariusz. Wydanie oprogramowania wraz z kluczem
                    następuje w przypadkach określonych postanowieniami umowy.
                  </DescriptionParagraph>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={bKonferencje} label="Konferencje i szkolenia">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Organizujemy interdyscyplinarne konferencje, które służą
                    wymianie wiedzy i doświadczenia specjalistów i praktyków z
                    różnych obszarów prawa oraz technologii informatycznych.
                    Prowadzimy również szkolenia, które łączą najwyższy poziom
                    merytoryczny oraz praktyczną wymowę poruszanych zagadnień.
                    Ich zakres i tematykę przygotowujemy w odpowiedzi na
                    potrzeby klientów.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Przykładowe tematy szkoleń dla przedstawicieli biznesu:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Ochrona danych osobowych - prawa i obowiązki
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Przestępczość teleinformatyczna. Cyberatak - profilaktyka
                      i obrona
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Wykorzystanie IT w dziedzinach uregulowanych przez prawo
                      cywilne
                    </DescriptionListItem>
                    <DescriptionListItem>
                      IT a prawo własności intelektualnej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Prawo bankowe w dobie informatyzacji
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Prawo konsumenta w obliczu zmian w 2015 roku
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Prawo górnicze i geologiczne - aspekty prawne
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
          </Accordion>
        </ServiceList>
      </Category>

      <CategoryTitle>Administracja publiczna</CategoryTitle>
      <Category>
        <ServiceList>
          <Accordion allowMultipleOpen>
            <Service imgSrc={apEadministracja} label="e-Administracja">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    e-Administracja to proces modernizacji administracji
                    publicznej oraz standaryzacji systemów teleinformatycznych w
                    ramach państw UE. Zakłada zmiany organizacyjne i
                    optymalizację procesów administracyjnych, których celem jest
                    poprawa dostępności i jakości usług publicznych.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Efektywne zastosowanie technologii informatycznych i
                    telekomunikacyjnych otwiera obywatelom dostęp do informacji,
                    a dzięki temu buduje zaufanie społeczne oraz wspiera rozwój
                    społeczeństwa informacyjnego.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Wdrożenie e-Administracji w organach administracji
                    publicznej wiąże się jednak z koniecznością wykonywania
                    obowiązków prawnych związanych z postępowaniem
                    administracyjnym przyjmującym formę elektroniczną.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Legal Informatics wspiera organy administracji rządowej oraz
                    jednostki samorządu terytorialnego w procesie wdrażania
                    e-Administracji.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Usługi świadczone przez Legal Informatics obejmują m.in.:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      tworzenie audytów bezpieczeństwa systemów
                      teleinformatycznych stosowanych przez badane podmioty
                    </DescriptionListItem>
                    <DescriptionListItem>
                      raporty opisujące stan realizacji obowiązków prawnych w
                      zakresie nowych instytucji prawa, kreujących sferę
                      e-Administracji
                    </DescriptionListItem>
                    <DescriptionListItem>
                      opinie o wdrożonych w podmiotach narzędziach
                      informatycznych (systemach, aplikacjach, rozwiązaniach
                      sprzętowych) wspierających funkcjonowanie e-Administracji
                    </DescriptionListItem>
                    <DescriptionListItem>
                      porady oraz zalecenia poświęcone funkcjonowaniu
                      e-Administracji w badanym podmiocie
                    </DescriptionListItem>
                    <DescriptionListItem>
                      testy sprawdzające funkcjonalność systemów
                      teleinformatycznych stosowanych w celu realizowania zadań
                      publicznych przez badany podmiot
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={apSystemy} label="Systemy teleinformatyczne">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Legal Informatics projektuje i dostarcza systemy
                    teleinformatyczne dla instytucji publicznych oraz biznesu.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Oferujemy pionierskie rozwiązania technologiczne służące
                    poprawie efektywności i rozwiązywaniu problemów z zakresu
                    obsługi prawnej i administracyjnej danego podmiotu.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Współpracujący z nami specjaliści z branży IT mają
                    wieloletnie doświadczenie pracy w dużych firmach
                    informatycznych o charakterze międzynarodowym.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Funkcje dostarczanych przez nas systemów to m.in.:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Anonimizacja danych wrażliwych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Digitalizacja i archiwizacja dokumentów
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Przeszukiwanie pełnotesktowe oraz kontekstowe zasobów baz
                      danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Tworzenie specjalistycznych - prawniczych baz danych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Eksperckie analizy oraz opinie prawne
                    </DescriptionListItem>
                  </DescriptionList>

                  <DescriptionListIntro>
                    Jakie mamy doświadczenie?
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      Stworzenie serwisu prawnego dla przedsiębiorstwa
                      wchodzącego w skład indeksu WIG20, służącego wspieraniu
                      procesów decyzyjnych w sferze obługi prawnej.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zaprojektowanie oraz stworzenie systemu
                      teleinformatycznego dla organów samorządów zawodowych.
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Stworzenie reguł anonimizacyjnych, wykorzystanych w
                      Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów
                      powszechnych dostępnej w Internecie.
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
            <Service imgSrc={apKonferencje} label="Konferencje i szkolenia">
              <div>
                <ServiceDescription>
                  <DescriptionParagraph>
                    Organizujemy interdyscyplinarne konferencje, które służą
                    wymianie wiedzy i doświadczenia specjalistów i praktyków z
                    różnych obszarów prawa oraz technologii informatycznych.
                  </DescriptionParagraph>
                  <DescriptionParagraph>
                    Prowadzimy również szkolenia, które łączą najwyższy poziom
                    merytoryczny oraz praktyczną wymowę poruszanych zagadnień.
                    Ich zakres i tematykę przygotowujemy w odpowiedzi na
                    potrzeby klientów.
                  </DescriptionParagraph>
                  <DescriptionListIntro>
                    Przykładowe tematy szkoleń dla przedstawicieli administracji
                    publicznej:
                  </DescriptionListIntro>
                  <DescriptionList>
                    <DescriptionListItem>
                      e-Administracja. Problemy prawne i wyzwania technologiczne
                      informatyzacji administracji publicznej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Ochrona danych osobowych a dostęp do informacji publicznej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Przestępczość teleinformatyczna. Cyberatak - profilaktyka
                      i obrona
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Wykorzystanie IT w dziedzinach uregulowanych przez prawo
                      cywilne
                    </DescriptionListItem>
                    <DescriptionListItem>
                      IT a prawo własności intelektualnej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      ABC zamówień publicznych po nowelizacji z 2014 roku
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Praktyczne aspekty udzielania zamówień publicznych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zmiany w prawie pracy w 2015 roku
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Gospodarka odpadami w 2015 roku – wymagane decyzje,
                      ewidencja i sprawozdawczość
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Skargi i wnioski w postępowaniu administracyjnym
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Rodzaje umów cywilnoprawnych w urzędzie - klasyfikacja i
                      zastosowanie
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Kodeks Postępowania Administracyjnego w praktyce – KPA
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Postępowanie administracyjne prowadzone za pośrednictwem
                      komunikacji elektronicznej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Dyscyplina finansów publicznych w kontekście
                      gospodarowania środkami unijnymi oraz przy zamówieniach
                      publicznych
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Budżetowanie zadaniowe w administracji publicznej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Prawo prasowe i system licencjonowania praw autorskich
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zasady udostępniania, odmowy udostępniania oraz ponownego
                      wykorzystania informacji publicznej
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Rachunkowość i sprawozdawczość finansowa jednostek
                      gospodarczych oraz jednostek sektora finansów publicznych
                      posiadających osobowość prawną
                    </DescriptionListItem>
                    <DescriptionListItem>
                      Zasady tworzenia aktów wewnętrznych z elementami techniki
                      legislacyjnej
                    </DescriptionListItem>
                  </DescriptionList>
                </ServiceDescription>
              </div>
            </Service>
          </Accordion>
        </ServiceList>
      </Category>
    </>
  )
}

export default function offer() {
  return (
    <Container>
      <OfferSection id="offer">
        <SectionHeading>Oferta</SectionHeading>
        <OfferCategories />
      </OfferSection>
    </Container>
  )
}
