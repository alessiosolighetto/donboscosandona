import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import Layout from "/components/Layout"
import LandingHero from "/components/LandingHero2.js"
import Features from "/components/Features"
import Carousel from "/components/Carousel"
import Products from "/components/Products"
import Testimonials from "/components/Testimonials"
import Team from "/components/Team"
import Post from "/components/Post"
import Certifications from "@/components/Certifications"
import Maps from "/components/Maps"
import Paragraph from "components/Paragraph"
import Table from 'components/Table'

import { getDatiArticoli } from "/lib/articoli"

// I punti di forza
const features = [
  {
    title: "Una proposta cristiana",
    imageUrl: "/images/home/proposta_cristiana.png",
    description:
      "Un progetto chiaro e affidabile per far crescere e diventare uomini. ",
  },
  {
    title: "Divertendosi insieme",
    imageUrl: "/images/home/divertendosi.png",
    description:
      "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.",
  },
  {
    title: "Mettendo a frutto la creatività",
    imageUrl: "/images/home/creativa.png",
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: "Esplorando il mondo",
    imageUrl: "/images/home/esplorando.png",
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
  },
];

// slides per il carousel
let serate = [
  {
    titolo: "Serata 1",
    descrizione:
      "Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine: "https://source.unsplash.com/random",
  },
  {
    titolo: "Serata 2",
    descrizione:
      "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    colore: "#22aa22",
  },
];

let gite = [
  {
    titolo: "Gita a Noale",
    descrizione:
      "22 Giugno e 11 Luglio - Scopri tutti i segreti del nostro Centro con il tour virtuale!",
    immagine: "/images/gite/aquaestate.webp",
  },
  {
    titolo: "Gita in Val di Gares",
    descrizione:
      "27 Giugno - A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: "/images/gite/val_gares.jpeg",
  },
  {
    titolo: "Gita al Parco Sigurtà",
    descrizione:
      "4 Luglio - A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: "/images/gite/parco_sigurta.jpeg",
  },
];

// Il nostro team
let members = [
  {
    name: "Segreteria PER",
    role: "Iscrizioni e informazioni generali",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "per@donboscosandona.it",
    phone: "0421 3388949874950",
  },
  {
    name: "don Michele Bortolato",
    role: "Responsabile della Proposta Estate",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "don Nicola Munari",
    role: "Direttore dell'Opera",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Cinema don Bosco",
    role: "Orari e biglietti",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "cinema@donboscosandona.it",
    phone: "346 960 5687",
  },
];

let in_evidenza = [
  {
    title: "Iscrizioni",
    description: "Tutto quello che devi sapere per iscriverti alla #PER23",
    immagineUrl: "/images/home/iscrizioni.png",
    url: "/iscrizioni",
  },
  {
    title: "Calendario",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: "/calendario",
  },
  {
    title: "Tema formativo",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/tema.png",
    url: "/tema",
  },
];

let laboratori = [
  {
    title: "Espressivi",
    description: "Tutto quello che devi sapere per iscriverti alla #PER23",
    immagineUrl: "/images/home/laboratori_espressivi.png",
    url: "/laboratori_espressivi",
  },
  {
    title: "Sportivi",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/laboratori_artistici.png",
    url: "/laboratori_sportivi",
  },
  {
    title: "Artistici",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/laboratori_artistici.png",
    url: "/laboratori_artistici",
  },
  {
    title: "Novità 2023",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/laboratori_new.png",
    url: "/laboratori_new",
  },
];

let altri_link = [
  {
    title: "Regolamento",
    description: "Tutto quello che devi sapere per iscriverti alla #PER23",
    immagineUrl: "/images/home/regolamento.png",
    url: "/regolamento",
  },
  {
    title: "Servizio autobus",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/autobus.png",
    url: "/autobus",
  },
  {
    title: "Momenti di preghiera e riflessione",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl:
      "https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png",
    url: "/preghiera",
  },
  {
    title: "Gruppo Special",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/special.png",
    url: "/special",
  },
  {
    title: "Spazio animatori",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/animatori.png",
    url: "/animatori",
  },
  {
    title: "Spazio genitori",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/genitori.png",
    url: "/genitori",
  },
  {
    title: "Dopo la Campanella Summer Edition",
    description: "Scopri la #PER23 giorno per giorno",
    immagineUrl: "/images/home/dlc.png",
    url: "/dlc",
  },
];

const testimonials = [
  {
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Michela B.",
    text: "Grazie mille per tutte le infinite emozioni che ci avete regalato, non solo nella serata finale ma in ogni occasione come alla sfilata, alle gite, ai momenti di condivisione, alle cene all'aperto e ai cori delle squadre o alle canzoni cantate e ballate che si sentivano fino a fuori dell'oratorio... per noi è stata la prima esperienza ipergalattica, ma la cosa più bella è che questa PER ha fatto scoprire nuove passioni grazie ai laboratori... Non resta che ringraziare tutti, dal primo all'ultimo e dirvi di continuare così, perchè come alla PER non ci di diverte!!!",
    social: "@giovane iscritta",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Samuele D.",
    text: "E' stato il mio primo anno alla PER. Il prossimo sarò ancora con voi perchè l'UNIONE, la CONDIVISIONE e l'AMICIZIA che si creano all'oratorio don Bosco sono... wow!!! Mi sono divertito un mondo!!! Grazie di tutto!! Alla prossima!!!",
    social: "@animatore",
  },
  {
    name: "Loredana Z.",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "A chi dice che i giovani non hanno voglia di fare nulla, io li inviterei in oratorio durante la PER. Che vedano gli animatori e il lavoro che dedicano per allietare bambini e bambine e la gioia che trasmettono. Quando ragazzi e bambini trovano un senso, sono i primi a buttarsi. Ma la PER non è solo gioco e svago. E' un'esperienza che aiuta i più piccoli ad esprimere i loro talenti, a condividere lo stile e il carisma salesiano, a vivere in una comunità che è fortemente educante e gioiosa. Un grazie di cuore all'Oratorio don Bosco!!!",
    social: "@mamma",
  },
];

let serate_cinema = [
  {
    title: "TRANSFORMERS: IL RISVEGLIO",
    description: "Lunedì 19 Giugno ore 20:45",
    immagineUrl:
      "https://image.tmdb.org/t/p/original/aY2hzOLuHTxKev5bWnC05ZjxtrB.jpg",
  },
  {
    title: "ELEMENTAL",
    description: "Lunedì 26 Giugno ore 20.45",
    immagineUrl:
      "https://image.tmdb.org/t/p/original//v9dZ3MnuSOU5C0ma21HP30zVGI.jpg",
  },
  {
    title: "GUARDIANI DELLA GALASSIA 3 ",
    description: "Lunedì 3 Luglio ore 20.45",
    immagineUrl:
      "https://image.tmdb.org/t/p/original/d8blPzI36RKZzARwyXtT5KMpSkF.jpg",
  },
  {
    title: " INDIANA JONES E IL QUADRANTE DEL DESTINO ",
    description: "Lunedì 10 Luglio ore 20.45",
    immagineUrl:
      "https://image.tmdb.org/t/p/original/y4MBS0SKE0pHR57vfYBxGhrkfcv.jpg",
  },

  {
    title: "MISSION IMPOSSIBLE 7",
    description: "Lunedì 17 Luglio ore 20.45",
    immagineUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f452aa2c-0c64-4bbf-b065-942b8dbda8bb/deybcgp-36da842e-b54d-40f9-8929-a13b60a21d47.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0NTJhYTJjLTBjNjQtNGJiZi1iMDY1LTk0MmI4ZGJkYThiYlwvZGV5YmNncC0zNmRhODQyZS1iNTRkLTQwZjktODkyOS1hMTNiNjBhMjFkNDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HK_zjbw8uSR8rWKubPz6HyjMLnm6_qnLH9G7j-zpI8k",
  },
];

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Proposta Estate Ragazzi 2023"
        description="Il sito della PER 23"
        buttonUrl="j"
        buttonText="Guarda il video"
        imageUrl="https://www.saledellacomunita.it/wp-content/uploads/2022/12/Guillermo-del-Toro-parla-di-3-film-di-Pinocchio-in.jpg"
      />
      <Paragraph
        title="Perché il tempo spensierato non sia tempo perso"
        subtitle="Saluto del Direttore, don Nicola Munari"
        avatarImageUrl="https://i.postimg.cc/L8LTXskg/Screenshot-2023-04-15-alle-17-23-23.png"
        columnCount={2}
      >
        <p>
          Quando finalmente suona l’ultima campanella dell’anno scolastico
          inizia quel periodo tanto atteso dove finalmente si può fare ciò che
          si vuole, senza troppi vincoli o regole, sveglie troppo mattiniere,
          insegnanti esigenti e compiti che preoccupano. Spensieratezza! Questa
          l’attesa più grande durante l’ultima parte dell’anno scolastico.
          Purtroppo tanto è grande l’attesa delle vacanze, tanto è veloce il
          tempo in cui la spensieratezza diventa noia, la libertà diventa ozio e
          pigrizia e il tempo libero rischia di diventare tempo perso.
        <br />
          La Proposta Estate Ragazzi, da più di 40 anni, è un’occasione per
          vivere un’Estate davvero ricca: di incontri, attività molteplici,
          gite, escursioni, serate con le famiglie… il tutto vissuto in un clima
          di amicizia, festa e grinta che contagiano e coinvolgono tutti.
        <br />
          Se mi domandassero perché venire alla P.E.R. 2023 direi solo questo. È
          un’esperienza per vivere alla grande e non vivacchiare. A noi piace
          vivere così: ogni giornata è densa perché piena di cose belle, vissute
          con grinta ed entusiasmo. Questo l’augurio per ogni genitore, ogni
          ragazzo e ogni educatore che vivrà questa proposta: “Che ogni giorno
          ci veda andare a letto stanchi ma felici per gli incontri, per la
          gioia condivisa e le esperienze arricchenti che potremo fare
          insieme”. Buona P.E.R. 2023!
        </p>
      </Paragraph>
      <Features
        title="La #per dell'Oratorio don Bosco è..."
        description=""
        features={features}
        cardWidth={3}
      />
      <Table
        title="Orario della Giornata"
        backgroundImageUrl="http://www.inoratorio.it/img/column/fefafd65dff6ae8d5816a76b10eda7d57d3bdfb2.jpg?1536915917"
        backgroundColor="#c23616"
        opacity={0.8}
        color="white"
        rows={[
          ["Mattino", "", "Pomeriggio", ""],
          ['8.30', 'Accoglienza informale', '14.30', 'Riapertura cancelli'],
          ['8.34', 'Preghiera e avvisi', '15.00', 'Inizio pomeriggio: tornei, giochi al parco, spettacoli, ecc.'],
          ['9.30', 'Momento di preghiera ragazzi', '17.45', 'Concludiamo insieme la giornata'],
          ['10.00', 'Prima ora di attività', '18.00', 'Termine attività pomeridiane'],
          ['10.50', 'Ricreazione', '18.30', 'Santa Messa (per chi lo desidera)'],
          ['11.10', 'Seconda ora di attività', '', ''],
          ['12.00', 'A casa... buon pranzo!', '', ''],
        ]}
      />

      <Products
        cardWidth={4}
        products={in_evidenza}
        borderRadius="50%"
      />
      <Carousel slides={gite} height={70} />
      <Products
        title="I laboratori"
        description="Stare insieme..."
        cardWidth={3}
        products={laboratori}
        borderRadius="2rem"
      />
      <Carousel slides={serate} height={70} />
      <Products
        title="Serate Cinema"
        description="Ogni settimana uno splendido film da gustare in compagnia degli amici della PER!"
        cardWidth={3}
        products={serate_cinema}
        borderRadius="5px"
      />
      <Paragraph title="Stay tuned">...</Paragraph>
      <Testimonials
        testimonials={testimonials}
        cardWidth={4}
        imageUrl="/images/home/sfondo_giostra.jpeg"
      />
      <Products cardWidth={3} products={altri_link} borderRadius="50%" />
      <Paragraph title="La Segreteria">...</Paragraph>
      <Team
        title="Contatti"
        description="Hai dei dubbi? Contattaci pure (preferibilmente via email) e ti risponderemo il prima possibile."
        members={members}
        cardWidth={3}
      />
      <Maps
        maxWidth="100%"
        maxHeight="550px"
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5580.05343317009!2d12.5710658!3d45.6301996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477956fe076b4157%3A0x29fb231d47465883!2sCnos%20Fap%20Don%20Bosco!5e0!3m2!1sit!2sit!4v1680507660807!5m2!1sit!2sit"
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli();
  return {
    props: {
      datiArticoli,
    },
  };
}
