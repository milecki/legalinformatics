import React from "react"
import styled from "styled-components"
import Container from "../globals/container"
import AccordionSection from "../globals/accordionSection"
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

const categories = [
  {
    categoryName: "Wymiar sprawiedliwości",
    services: [
      {
        name: "Systemy teleinformatyczne",
        id: 1,
        isOpen: true,
        imgSrc: wsSystemy,
        paragraphs: [
          "Legal Informatics projektuje i dostarcza systemy teleinformatyczne dla instytucji publicznych oraz biznesu. Oferujemy pionierskie rozwiązania technologiczne służące poprawie efektywności i rozwiązywaniu problemów z zakresu obsługi prawnej i administracyjnej danego podmiotu. Współpracujący z nami specjaliści z branży IT mają wieloletnie doświadczenie pracy w dużych firmach informatycznych o charakterze międzynarodowym.",
        ],
        lists: [
          {
            intro: "Funkcje dostarczanych przez nas systemów to m.in.:",
            items: [
              "Anonimizacja danych wrażliwych Digitalizacja i archiwizacja dokumentów",
              "Przeszukiwanie pełnotesktowe oraz kontekstowe zasobów baz danych",
              "Tworzenie specjalistycznych - prawniczych baz danych",
              "Eksperckie analizy oraz opinie prawne.",
            ],
          },
          {
            intro: "Jakie mamy doświadczenie?",
            items: [
              "Stworzenie reguł anonimizacyjnych, wykorzystanych w Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów powszechnych dostępnej w Internecie.",
              "Stworzenie serwisu prawnego dla przedsiębiorstwa wchodzącego w skład indeksu WIG20, służącego wspieraniu procesów decyzyjnych w sferze obługi prawnej.",
              "Zaprojektowanie oraz stworzenie systemu teleinformatycznego dla organów samorządów zawodowych.",
            ],
          },
        ],
      },
      {
        name: "Warsztaty",
        id: 2,
        isOpen: false,
        imgSrc: wsWarsztaty,
        paragraphs: [
          "Legal Informatics ma w swojej ofercie również interaktywne warsztaty stanowiskowe, odbywające się przy użyciu sprzętu komputerowego bądź tabletów, przygotowanych do pracy i podłączonych do Internetu.Warsztaty odbywają się pod okiem wykwalifikowanego trenera, z instruktażem na poziomie dostosowanym do grupy uczestników, oraz z możliwością przećwiczenia funkcji programu bądź aplikacji będącej przedmiotem szkolenia.",
        ],
      },
      {
        name: "Konferencje i szkolenia",
        id: 3,
        isOpen: false,
        imgSrc: wsKonferencje,
        paragraphs: [
          "Organizujemy interdyscyplinarne konferencje, które służą wymianie wiedzy i doświadczenia specjalistów i praktyków z różnych obszarów prawa oraz technologii informatycznych. Prowadzimy również szkolenia, które łączą najwyższy poziom merytoryczny oraz praktyczną wymowę poruszanych zagadnień. Ich zakres i tematykę przygotowujemy w odpowiedzi na potrzeby klientów.",
        ],
        lists: [
          {
            intro:
              "Przykładowe tematy szkoleń dla przedstawicieli wymiaru sprawiedliwości:",
            items: [
              "E-PUAP - prawa i obowiązki",
              "Ochrona danych osobowych - prawa i obowiązki",
              "Praktyczne aspekty udzielania zamówień publicznych",
              "Ochrona danych osobowych a dostęp do informacji publicznej",
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: "Samorządy zawodowe",
    services: [
      {
        name: "Usługi wydawnicze",
        id: 4,
        isOpen: false,
        imgSrc: szUslugi,
        paragraphs: [
          "Legal Informatics zapewnia realizację całego procesu wydawniczego, od przygotowania tekstu (korekta, redakcja i skład), poprzez projekt okładki, nadanie numeru ISBN, aż do druku.",
          "Współpracujemy z wydawnictwem Oficyna Prawnicza.",
        ],
        lists: [
          {
            intro: "Wydajemy czasopisma i publikacje książkowe:",
            items: [
              "monografie naukowe",
              "komentarze",
              "podręczniki akademickie",
              "publikacje pokonferencyjne",
            ],
          },
        ],
      },
      {
        name: "Konferencje i szkolenia",
        id: 5,
        isOpen: false,
        imgSrc: szKonferencje,
        paragraphs: [
          "Organizujemy interdyscyplinarne konferencje, które służą wymianie wiedzy i doświadczenia specjalistów i praktyków z różnych obszarów prawa oraz technologii informatycznych. Prowadzimy również szkolenia, które łączą najwyższy poziom merytoryczny oraz praktyczną wymowę poruszanych zagadnień. Ich zakres i tematykę przygotowujemy w odpowiedzi na potrzeby klientów.",
        ],
        lists: [
          {
            intro:
              "Przykładowe tematy szkoleń dla przedstawicieli samorządów zawodowych:",
            items: [
              "Postępowanie dyscyplinarne w praktyce",
              "Ochrona danych osobowych - prawa i obowiązki",
              "IT a prawo własności intelektualnej",
              "Prawo podatkowe w praktyce",
              "Zasady odpowiedzialności w prawie cywilnym",
              "Zmiany w prawie pracy w 2015 roku",
              "Gwarancja i rękojmia",
            ],
          },
        ],
      },
      {
        name: "Systemy teleinformatyczne",
        id: 6,
        isOpen: false,
        imgSrc: szSystemy,
        paragraphs: [
          "Legal Informatics projektuje i dostarcza systemy teleinformatyczne dla instytucji publicznych oraz biznesu. Oferujemy pionierskie rozwiązania technologiczne służące poprawie efektywności i rozwiązywaniu problemów z zakresu obsługi prawnej i administracyjnej danego podmiotu.",
          "Współpracujący z nami specjaliści z branży IT mają wieloletnie doświadczenie pracy w dużych firmach informatycznych o charakterze międzynarodowym.",
        ],
        lists: [
          {
            intro: "Funkcje dostarczanych przez nas systemów to m.in.:",
            items: [
              "Anonimizacja danych wrażliwych",
              "Digitalizacja i archiwizacja dokumentów",
              "Przeszukiwanie pełnotesktowe oraz kontekstowe zasobów baz danych",
              "Tworzenie specjalistycznych - prawniczych baz danych",
              "Eksperckie analizy oraz opinie prawne",
            ],
          },
          {
            intro: "Jakie mamy doświadczenie?",
            items: [
              "Zaprojektowanie oraz stworzenie systemu teleinformatycznego dla organów samorządów zawodowych.",
              "Stworzenie serwisu prawnego dla przedsiębiorstwa wchodzącego w skład indeksu WIG20, służącego wspieraniu procesów decyzyjnych w sferze obługi prawnej.",
              "Stworzenie reguł anonimizacyjnych, wykorzystanych w Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów powszechnych dostępnej w Internecie.",
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: "Biznes",
    services: [
      {
        name: "Informatyka prawnicza",
        id: 7,
        isOpen: false,
        imgSrc: bInformatyka,
        paragraphs: [
          "Informatyka prawnicza to stosunkowo młoda (narodziła się w latach 60. XX w.), ale prężnie rozwijana dziedzina nauki, która bada procesy gromadzenia, systematyzowania, przetwarzania i wyszukiwania informacji o prawie przy pomocy komputera. Eksperci Legal Informatics aktywnie współtworzą tę dyscyplinę na gruncie teorii (publikacje naukowe, udział w konferencjach i artykuły w prasie) oraz praktyki - pomagając firmom i instytucjom publicznym w implementacji jej ustaleń.",
        ],
        lists: [
          {
            intro: "W obszarze naszych zainteresowań mieszczą się m.in.:",
            items: [
              "przepisy o ochronie danych osobowych",
              "przepisy o ochronie programów komputerowych (prawo autorskie i prawa pokrewne)",
              "badanie możliwości stworzenia programów do automatycznego rozstrzygania",
              "informacyjny aspekt zasad redagowania i ogłaszania aktów prawnych",
              "systemy eksperckie i programy do wyszukiwania informacji prawnej",
            ],
          },
        ],
      },
      {
        name: "Systemy teleinformatyczne",
        id: 8,
        isOpen: false,
        imgSrc: bSystemy,
        paragraphs: [
          "Legal Informatics projektuje i dostarcza systemy teleinformatyczne dla instytucji publicznych oraz biznesu. Oferujemy pionierskie rozwiązania technologiczne służące poprawie efektywności i rozwiązywaniu problemów z zakresu obsługi prawnej i administracyjnej danego podmiotu. Współpracujący z nami specjaliści z branży IT mają wieloletnie doświadczenie pracy w dużych firmach informatycznych o charakterze międzynarodowym.",
        ],
        lists: [
          {
            intro: "Funkcje dostarczanych przez nas systemów to m.in.:",
            items: [
              "Anonimizacja danych wrażliwych",
              "Digitalizacja i archiwizacja dokumentów",
              "Przeszukiwanie pełnotekstowe oraz kontekstowe zasobów baz danych",
              "Tworzenie specjalistycznych - prawniczych baz danych",
              "Eksperckie analizy oraz opinie prawne",
            ],
          },
          {
            intro: "Jakie mamy doświadczenie?",
            items: [
              "Stworzenie serwisu prawnego dla przedsiębiorstwa wchodzącego w skład indeksu WIG20, służącego wspieraniu procesów decyzyjnych w sferze obsługi prawnej.",
              "Zaprojektowanie oraz stworzenie systemu teleinformatycznego dla organów samorządów zawodowych.",
              "Stworzenie reguł anonimizacyjnych, wykorzystanych w Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów powszechnych dostępnej w Internecie.",
            ],
          },
        ],
      },
      {
        name: "Depozyt Kodu Źródłowego",
        id: 9,
        isOpen: false,
        imgSrc: bDepozyt,
        paragraphs: [
          "Depozyt Kodu Źródłowego stanowi ochronę przed skutkami upadłości producenta oprogramowania. To praktyka stosowana już na całym świecie, która jest nieuchronną przyszłością również dla polskiej branży IT. Legal Informatics oferuje obsługę techniczną oraz prawną całego procesu we współpracy z najlepszymi kancelariami notarialnymi w kraju.",
          "Na czym to polega? Licencjodawca składa kody źródłowe u depozytariusza, jednocześnie upoważniając licencjobiorcę do wydobycia i dalszego wykorzystania kodów źródłowych w przypadkach, które określa umowa. Owe przypadki to m.in. zaprzestanie rozwoju aplikacji przez licencjodawcę, a także upadłość, likwidacja bądź wrogie przejęcie producenta oprogramowania przez inny podmiot.",
          "Depozytariuszem jest kancelaria notarialna współpracująca z ekspertami Legal Informatics. Dzięki temu połączeniu licencjodawca składający kody źródłowe ma gwarancję bezpieczeństwa swojego depozytu, a licencjobiorca jest pewny tego, że nośnik danych rzeczywiście zawiera to, co było przedmiotem umowy.",
          "W celu zwiększenia bezpieczeństwa procedury, oprogramowanie zapisane na nośniku jest dodatkowo szyfrowane. Klucz posiada jedynie notariusz. Wydanie oprogramowania wraz z kluczem następuje w przypadkach określonych postanowieniami umowy.",
        ],
      },
      {
        name: "Konferencje i szkolenia",
        id: 10,
        isOpen: false,
        imgSrc: bKonferencje,
        paragraphs: [
          "Organizujemy interdyscyplinarne konferencje, które służą wymianie wiedzy i doświadczenia specjalistów i praktyków z różnych obszarów prawa oraz technologii informatycznych. Prowadzimy również szkolenia, które łączą najwyższy poziom merytoryczny oraz praktyczną wymowę poruszanych zagadnień. Ich zakres i tematykę przygotowujemy w odpowiedzi na potrzeby klientów.",
        ],
        lists: [
          {
            intro: "Przykładowe tematy szkoleń dla przedstawicieli biznesu:",
            items: [
              "Ochrona danych osobowych - prawa i obowiązki",
              "Przestępczość teleinformatyczna. Cyberatak - profilaktyka i obrona",
              "Wykorzystanie IT w dziedzinach uregulowanych przez prawo cywilne",
              "IT a prawo własności intelektualnej",
              "Prawo bankowe w dobie informatyzacji",
              "Prawo konsumenta w obliczu zmian w 2015 roku",
              "Prawo górnicze i geologiczne - aspekty prawne",
            ],
          },
        ],
      },
    ],
  },
  {
    categoryName: "Administracja publiczna",
    services: [
      {
        name: "e-Administracja",
        id: 11,
        isOpen: false,
        imgSrc: apEadministracja,
        paragraphs: [
          "e-Administracja to proces modernizacji administracji publicznej oraz standaryzacji systemów teleinformatycznych w ramach państw UE. Zakłada zmiany organizacyjne i optymalizację procesów administracyjnych, których celem jest poprawa dostępności i jakości usług publicznych.",
          "Efektywne zastosowanie technologii informatycznych i telekomunikacyjnych otwiera obywatelom dostęp do informacji, a dzięki temu buduje zaufanie społeczne oraz wspiera rozwój społeczeństwa informacyjnego.",
          "Wdrożenie e-Administracji w organach administracji publicznej wiąże się jednak z koniecznością wykonywania obowiązków prawnych związanych z postępowaniem administracyjnym przyjmującym formę elektroniczną.",
          "Legal Informatics wspiera organy administracji rządowej oraz jednostki samorządu terytorialnego w procesie wdrażania e-Administracji.",
        ],
        lists: [
          {
            intro: "Usługi świadczone przez Legal Informatics obejmują m.in.:",
            items: [
              "tworzenie audytów bezpieczeństwa systemów teleinformatycznych stosowanych przez badane podmioty",
              "raporty opisujące stan realizacji obowiązków prawnych w zakresie nowych instytucji prawa, kreujących sferę e-Administracji",
              "opinie o wdrożonych w podmiotach narzędziach informatycznych (systemach, aplikacjach, rozwiązaniach sprzętowych) wspierających funkcjonowanie e-Administracji",
              "porady oraz zalecenia poświęcone funkcjonowaniu e-Administracji w badanym podmiocie",
              "testy sprawdzające funkcjonalność systemów teleinformatycznych stosowanych w celu realizowania zadań publicznych przez badany podmiot",
            ],
          },
        ],
      },
      {
        name: "Systemy teleinformatyczne",
        id: 12,
        isOpen: false,
        imgSrc: apSystemy,
        paragraphs: [
          "Legal Informatics projektuje i dostarcza systemy teleinformatyczne dla instytucji publicznych oraz biznesu.",
          "Oferujemy pionierskie rozwiązania technologiczne służące poprawie efektywności i rozwiązywaniu problemów z zakresu obsługi prawnej i administracyjnej danego podmiotu.",
          "Współpracujący z nami specjaliści z branży IT mają wieloletnie doświadczenie pracy w dużych firmach informatycznych o charakterze międzynarodowym.",
        ],
        lists: [
          {
            intro: "Funkcje dostarczanych przez nas systemów to m.in.:",
            items: [
              "Anonimizacja danych wrażliwych",
              "Digitalizacja i archiwizacja dokumentów",
              "Przeszukiwanie pełnotesktowe oraz kontekstowe zasobów baz danych",
              "Tworzenie specjalistycznych - prawniczych baz danych",
              "Eksperckie analizy oraz opinie prawne",
            ],
          },
          {
            intro: "Jakie mamy doświadczenie?",
            items: [
              "Stworzenie serwisu prawnego dla przedsiębiorstwa wchodzącego w skład indeksu WIG20, służącego wspieraniu procesów decyzyjnych w sferze obługi prawnej.",
              "Zaprojektowanie oraz stworzenie systemu teleinformatycznego dla organów samorządów zawodowych.",
              "Stworzenie reguł anonimizacyjnych, wykorzystanych w Portalu Orzeczeń Sądów Powszechnych – bazie orzeczeń sądów powszechnych dostępnej w Internecie.",
            ],
          },
        ],
      },
      {
        name: "Konferencje i szkolenia",
        id: 13,
        isOpen: false,
        imgSrc: apKonferencje,
        paragraphs: [
          "Organizujemy interdyscyplinarne konferencje, które służą wymianie wiedzy i doświadczenia specjalistów i praktyków z różnych obszarów prawa oraz technologii informatycznych.",
          "Prowadzimy również szkolenia, które łączą najwyższy poziom merytoryczny oraz praktyczną wymowę poruszanych zagadnień. Ich zakres i tematykę przygotowujemy w odpowiedzi na potrzeby klientów.",
        ],
        lists: [
          {
            intro:
              "Przykładowe tematy szkoleń dla przedstawicieli administracji publicznej:",
            items: [
              "e-Administracja. Problemy prawne i wyzwania technologiczne informatyzacji administracji publicznej",
              "Ochrona danych osobowych a dostęp do informacji publicznej",
              "Przestępczość teleinformatyczna. Cyberatak - profilaktyka i obrona",
              "Wykorzystanie IT w dziedzinach uregulowanych przez prawo cywilne",
              "IT a prawo własności intelektualnej",
              "ABC zamówień publicznych po nowelizacji z 2014 roku",
              "Praktyczne aspekty udzielania zamówień publicznych",
              "Zmiany w prawie pracy w 2015 roku",
              "Gospodarka odpadami w 2015 roku – wymagane decyzje, ewidencja i sprawozdawczość",
              "Skargi i wnioski w postępowaniu administracyjnym",
              "Rodzaje umów cywilnoprawnych w urzędzie - klasyfikacja i zastosowanie",
              "Kodeks Postępowania Administracyjnego w praktyce – KPA",
              "Postępowanie administracyjne prowadzone za pośrednictwem  komunikacji elektronicznej",
              "Dyscyplina finansów publicznych w kontekście gospodarowania środkami unijnymi oraz przy zamówieniach publicznych",
              "Budżetowanie zadaniowe w administracji publicznej",
              "Prawo prasowe i system licencjonowania praw autorskich",
              "Zasady udostępniania, odmowy udostępniania oraz ponownego wykorzystania informacji publicznej",
              "Rachunkowość i sprawozdawczość finansowa jednostek gospodarczych oraz jednostek sektora finansów publicznych posiadających osobowość prawną",
              "Zasady tworzenia aktów wewnętrznych z elementami techniki legislacyjnej",
            ],
          },
        ],
      },
    ],
  },
]

const OfferSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -3.125em;
  padding: 3.75em 0 3.125em;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 8.125em 0 7.5em;
  }
`
const CategoryWrapper = styled.div`
  width: 100%;
`

const CategoryTitle = styled.h3`
  padding: 1.75em 0 0;
  color: #1e7cc1;
  font-size: 1.5em;
  text-align: center;

  @media (min-width: 768px) {
    padding: 1.25em 4.2857142857em 0;
    font-size: 1.75em;
  }
`

const Category = styled.div``

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  padding: 0 0.9375em;

  @media (min-width: 768px) {
    padding: 0 6.25em;
  }
`

const ServiceOuterDiv = styled.div``

const ServiceInnerDiv = styled.div`
  margin-top: 1.25em;
`

const ServiceDescription = styled.div`
  margin: -0.1428571429em 0 0.7142857143em;
  padding: 0 0 0.7142857143em;
  font-size: 0.875em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`

const DescriptionParagraph = styled.p`
  margin-top: 0.625em;
  line-height: 1.6;
`

const DescriptionListIntro = styled.p`
  margin-top: 1.25em;
`

const DescriptionList = styled.ul`
  line-height: 1.6;
`

const DescriptionListItem = styled.li`
  margin-top: 0.625em;
  list-style-type: disc;
`
function OfferCategories() {
  return (
    <>
      {categories.map(category => {
        return (
          <CategoryWrapper key={category.categoryName}>
            <CategoryTitle>{category.categoryName}</CategoryTitle>
            <Category>
              <ServiceList>
                <AccordionSection allowMultipleOpen>
                  {category.services.map(service => (
                    <ServiceOuterDiv
                      imgSrc={service.imgSrc}
                      label={service.name}
                      isOpen={service.isOpen}
                      key={service.id}
                    >
                      <ServiceInnerDiv>
                        <ServiceDescription>
                          {service.paragraphs &&
                            service.paragraphs.map((paragraph, index) => (
                              <DescriptionParagraph key={index}>
                                {paragraph}
                              </DescriptionParagraph>
                            ))}

                          {service.lists &&
                            service.lists.map((list, index) => (
                              <div key={index}>
                                <DescriptionListIntro>
                                  {list.intro}
                                </DescriptionListIntro>
                                <DescriptionList>
                                  {list.items.map((item, index) => (
                                    <DescriptionListItem key={index}>
                                      {item}
                                    </DescriptionListItem>
                                  ))}
                                </DescriptionList>
                              </div>
                            ))}
                        </ServiceDescription>
                      </ServiceInnerDiv>
                    </ServiceOuterDiv>
                  ))}
                </AccordionSection>
              </ServiceList>
            </Category>
          </CategoryWrapper>
        )
      })}
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
