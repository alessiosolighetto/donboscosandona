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




let settori = [
    {
        title: "Sauna",
        category: "Prova ora la nostra sauna",
        description: "La sauna è aperta 24/7 con servizio bar disponibile a tutti gli orari. E' disponibile la sauna 'leggera' che raggiunge i 100 °C, la sauna 'pesante' che raggiunge i 150 gradi e la sauna e la criosauna che raggiunge i -130 °C.",
        immagineUrl: "/images/sauna.jpg",
        url: "/sauna"
    },
    {
        title: "Moto d'acqua",
        category: "Prova la nostra super esperienza adrenalinica con la moto d'acqua",
        description: "E' possibile affitare le moto d'acqua ad un prezzo di 50€ l'ora con la possibilità di viaggiare in piena tranquillità a largo del nostro mare e la possibilità di prenotare un insegnante per imparare a guidarla nei migliori dei modi ad un prezzo di soli 100€ l'ora. ",
        immagineUrl: "/images/motod'acqua.jpg",
        url: "/moto d'acqua"
    },
    {
        title: "Snorkeling",
        category: "Prova una super eperienza tra le acque dei nostri mari",
        description: "Se da sempre vuoi provare un esperienza piena di adrenalina e divertimento devi assolutamente provare la nostra attività di snorkelign che ti da la possibilità di nuotare liberamente insieme alla nostra fauna acquifera.",
        immagineUrl: "/images/snorkeling.jpg",
        url: "/snorkeling"
    },
    {
        title: "Canoa",
        category: "Prova una super eperienza tra le acque dei nostri mari",
        description: "L'arrivo in idrovolante è un'esperienza avventurosa e suggestiva. Mentre voli sopra le acque cristalline del mare, potrai ammirare l'isola dall'alto e coglierne la bellezza selvaggia. Una volta atterrati, sarete accolti da uno staff attento ad ogni vostra esigenza.",
        immagineUrl: "/images/canoa.jpg",
        url: "/canoa"
    },
    {
        title: "Masssaggi",
        category: "Prova una super eperienza tra le acque dei nostri mari",
        description: "L'arrivo in idrovolante è un'esperienza avventurosa e suggestiva. Mentre voli sopra le acque cristalline del mare, potrai ammirare l'isola dall'alto e coglierne la bellezza selvaggia. Una volta atterrati, sarete accolti da uno staff attento ad ogni vostra esigenza.",
        immagineUrl: "/images/massaggi.jpg",
        url: "/massaggi"
    },
    {
        title: "Mongolfiera",
        category: "Prova una super eperienza tra le acque dei nostri mari",
        description: "L'arrivo in idrovolante è un'esperienza avventurosa e suggestiva. Mentre voli sopra le acque cristalline del mare, potrai ammirare l'isola dall'alto e coglierne la bellezza selvaggia. Una volta atterrati, sarete accolti da uno staff attento ad ogni vostra esigenza.",
        immagineUrl: "/images/mongolfiera.jpg",
        url: "/mongolfiera"
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
           
            <Products
                title="I nostri servizi"
                description="Grazie ai nostri servizi vivi a pieno l'esperienza del nostro hotel"
                cardWidth={4}
                products={settori}
            />
            <Container sx={{
                marginTop: "60px",
                marginBottom: "100px",
            }}>

                <Typography variant="body2" color="rgba(70, 70, 70, 1)" margin={5}>
                    In conclusione, se sei alla ricerca di un'esperienza di soggiorno di lusso, le suite sono sicuramente la scelta giusta per te. A seconda del livello di esclusività che cerchi, puoi optare per una suite standard, luxury, premium o best. Qualunque sia la tua scelta, sono sicuro che non rimarrai deluso dalla tua esperienza di soggiorno di lusso.
                </Typography>
            </Container>
          
          
        </Layout>
    )
}

