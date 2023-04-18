import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Image from 'next/image'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Navbar from "@/components/NavBar"
import MyCarousel from "@/components/Carousel"
import { margin } from "@mui/system"


let slides = [
    {
        titolo: 'Prenota Una Camera',
        descrizione: 'Prenota una camera in una di questi Luxury Resort',
        immagine: '/images/maldive1.jpg'
    },
    {
        titolo: 'Attività Serali',
        descrizione: "Compreso con il prezzo della prenotazione, ci sono delle attività Serali",
        immagine: '/images/maldive2.jpg'
    },
    {
        titolo: 'Servizi di Trasporto',
        descrizione: 'Scopri i nostri servizi luossosi per il traposto da terra',
        immagine: '/images/maldive3.jpg'

    },
]

let settori = [
    {
        title: "Elicottero",
        category: "Spostati in elicottero",
        description: "Se vuoi raggiungere l'isola in grande stile, l'elicottero è la scelta ideale. Potrai ammirare dall'alto la bellezza della natura che circonda l'isola e atterrare direttamente nel cuore del resort. Un modo unico per iniziare la tua vacanza di lusso.",
        immagineUrl: "https://static.s123-cdn-static-d.com/uploads/5401154/2000_61f8023c2375d.png",
        url: "/elicottero"
    },
    {
        title: "Yatch",
        category: "Spostati con lo yatch",
        description: "Arrivare sull'isola in yacht è un'esperienza indimenticabile: le acque cristalline e le spiagge di sabbia bianca si susseguono lungo la costa, regalando panorami mozzafiato. Una volta ormeggiato, potrai godere di tutti i servizi esclusivi che l'isola offre ai suoi ospiti.",
        immagineUrl: "https://img.nauticexpo.it/images_ne/photo-g/20579-15190421.jpg",
        url: "/yatch"
    },
    {
        title: "Idrovolante",
        category: "Spostati con un Idrovolante",
        description: "L'arrivo in idrovolante è un'esperienza avventurosa e suggestiva. Mentre voli sopra le acque cristalline del mare, potrai ammirare l'isola dall'alto e coglierne la bellezza selvaggia. Una volta atterrati, sarete accolti da uno staff attento ad ogni vostra esigenza.",
        immagineUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a4/b3/7c/as-vietnam-s-only-seaplane.jpg?w=1200&h=-1&s=1",
        url: "/idrovolante"
    },
   
]

let camere = [
    {
        title: "Suite",
        category: "descrizione",
        description: "Se stai cercando un'esperienza di soggiorno di lusso, le suite potrebbero essere la scelta ideale per te. Ho avuto la fortuna di soggiornare in diverse tipologie di suite in diverse strutture e posso condividere con te la mia esperienza.",
        immagineUrl: "https://image-tc.galaxy.tf/wijpeg-jjss2bb72zvvnz67xbgl8dbm/falkensteiner-jesolo-apartement-1200-0390.jpg?width=800",
        url: "/"
        
    },
    {
        title: "Suite Luxury",
        category: "descrizione",
        description: "Se invece sei alla ricerca di un'esperienza di lusso ancora più esclusiva, allora dovresti optare per una suite luxury. In queste suite, troverai servizi extra come una Jacuzzi privata, una cucina completamente attrezzata, un soggiorno più grande e lussuoso e servizi di concierge dedicati. In una suite luxury, potrai godere di un'esperienza di soggiorno davvero unica, con tutti i comfort che potresti desiderare.",
        immagineUrl: "https://www.bauhaus.ch/dam/jcr:c71d0b43-822d-4838-b38e-75da134b8fac/teaser-garten-freizeit-ratgeber-whirlpool-im-garten-frau-im-whirlpool-800x800.jpg",
        url: "/"
        
    },
   
    {
        title: "Suite Premium",
        category: "descrizione",
        description: "Passiamo ora alla suite premium, che offre un'esperienza di soggiorno ancora più esclusiva e di lusso. Questa tipologia di suite di solito include ancora più servizi, come una piscina privata o una sauna, una zona living più ampia e lussuosa e una vista panoramica mozzafiato sulla città o sul mare. Se stai cercando un'esperienza di soggiorno di lusso e vuoi godere di servizi ancora più esclusivi, allora la suite premium potrebbe essere la scelta perfetta.",
        immagineUrl: "https://media.z-suite.it/sardinia360.it/public/crop/Falkensteiner-Resort-Capo-Boi--capoboiarchitekturimage-gross145_ret-800x800.jpg?v=1",
        url: "/"
        
    }, {
        title: "Suite Best",
        category: "descrizione",
        description: "Infine, la suite best rappresenta il massimo della lussuosità e dell'eccellenza. Queste suite sono pensate per soddisfare i gusti più esigenti, offrendo un'esperienza di soggiorno personalizzata e dedicata ai dettagli. Qui troverai servizi e comfort davvero unici, come una terrazza privata con piscina, una zona pranzo elegante e sofisticata, un bagno di marmo con una vasca da bagno in stile spa, e molto altro ancora. Se vuoi godere di un'esperienza di soggiorno di lusso assoluto, allora la suite best è sicuramente ciò che stai cercando.",
        immagineUrl: "https://image-tc.galaxy.tf/wijpeg-51efj89s0ex6vfknn6xaw65um/suite-experience-highlight-2.jpg?width=800",
        url: "/"
        
    },
]
export default function Home() {
    return (
        <Layout>

            <Navbar
                title="Dream Island"
                btnprenotazioni="Prenotazioni"
                btncamere="Camere"
                btnservizi="Servizi"
            />
            <MyCarousel slides={slides} />
            <Products
                title="Trasporti"
                description="Scegli come arrivare sull'isola"
                cardWidth={4}
                products={settori}
            />
            <Container sx={{
                marginTop:"60px",
                marginBottom:"100px",
            }}>
                <Products 
                title="Le Nostre Camere"
                description="SCEGLI LA CAMERA CHE TI PIACE DI PIU' E PRENOTA ORA"
                cardWidth={6}
                products={camere}
                />
            <Typography variant="body2" color="rgba(70, 70, 70, 1)" margin={5}> 
            In conclusione, se sei alla ricerca di un'esperienza di soggiorno di lusso, le suite sono sicuramente la scelta giusta per te. A seconda del livello di esclusività che cerchi, puoi optare per una suite standard, luxury, premium o best. Qualunque sia la tua scelta, sono sicuro che non rimarrai deluso dalla tua esperienza di soggiorno di lusso.
            </Typography>
            </Container>

        </Layout>
    )
}





