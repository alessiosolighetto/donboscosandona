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

const styles = {
    backgroundImage: "url('/images/sfondo1.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

let settori = [
    {
        title: "Sauna",
        category: "Prova la nostra sauna",
        description: "La sauna è aperta 24/7 con servizio bar disponibile a tutti gli orari. E' disponibile la sauna 'leggera' che raggiunge i 100 °C, la sauna 'pesante' che raggiunge i 150 gradi e la sauna e la criosauna che raggiunge i -130 °C.",
        immagineUrl: "/images/sauna.jpg",
        url: "/sauna"
    },
    {
        title: "Moto d'acqua",
        category: "Prova la nostra super esperienza con la moto d'acqua",
        description: "E' possibile affitare le moto d'acqua ad un prezzo di 50€ l'ora con la possibilità di viaggiare in piena tranquillità a largo del nostro mare e la possibilità di prenotare un insegnante per imparare a guidarla nei migliori dei modi ad un prezzo di soli 100€ l'ora. ",
        immagineUrl: "/images/motod'acqua.jpg",
        url: "/moto d'acqua"
    },
    {
        title: "Snorkeling",
        category: "Prova una super eperienza adrenalinica nutando con i pesci del nostro mare",
        description: "Se da sempre vuoi provare un esperienza piena di adrenalina e divertimento devi assolutamente provare la nostra attività di snorkelign che ti da la possibilità di nuotare liberamente insieme alla nostra fauna acquifera.",
        immagineUrl: "/images/snorkeling.jpg",
        url: "/snorkeling"
    },
    {
        title: "Canoa",
        category: "Prova il nostro servizio canoa",
        description: "Il nostro servio noleggio canoa è aperto dalle 13:00 alle 18:30 hai la possibilità di visitare posti fantastici come la 'Dream Waterfall' a soli 40 minuti dal residence al prezzo di 40€ l'ora",
        immagineUrl: "/images/canoa.jpg",
        url: "/canoa"
    },
    {
        title: "Massaggi",
        category: "Prova il nostro servizio massaggi",
        description: "Durante una giornata di relax puoi usufruire del nostro salone massaggi con vista sul mare al prezzo di 80€ l'ora con servizio bar incluso.",
        immagineUrl: "/images/massaggi.jpg",
        url: "/massaggi"
    },
    {
        title: "Parasailing",
        category: "Prova ora la super esperienza di Parasailing",
        description: "Hai la possibilità di noleggiare per un'ora il nostro servizio di Parasailing al prezzo di 30€ l'ora",
        immagineUrl: "/images/mongolfiera.jpg",
        url: "/mongolfiera"
    },
    {
        title: "Yacht",
        category: "Visita la nostra isola con il nostro fantastico Yacht",
        description: "Hai la possibilità di noleggiare i nostri Yacht al prezzo di 300€ l'ora oppure a 2000€ per 24h",
        immagineUrl: "/images/mongolfiera.jpg",
        url: "/mongolfiera"
    },

    {
        title: "Motoscafo",
        category: "Visita la nostra isola con il nostro fantastico Yacht",
        description: "Hai la possibilità di noleggiare i nostri magnifici motoscafi e incluso nel prezzo che è 100€ l'ora c'è un autista privato che ti porterà nei migliori posti visitabili",
        immagineUrl: "/images/mongolfiera.jpg",
        url: "/mongolfiera"
    },

    {
        title: "Idrovolante",
        category: "Visita la nostra isola con il nostro fantastico Yacht",
        description: "Hai la possibilità di noleggiare i nostri Yacht al prezzo di 300€ l'ora oppure a 2000€ per 24h",
        immagineUrl: "/images/mongolfiera.jpg",
        url: "/mongolfiera"
    },

]


export default function Home() {
    return (
        <Layout>
            <div style={styles}>
            <Navbar
                title="Dream Island"
                btnprenotazioni="Prenotazioni"
                btncamere="Camere"
                btnservizi="Servizi"
            />
           
            <Products
                title="Le nostre attività"
                description="Grazie alle nostre attività vivi a pieno l'esperienza del nostro hotel"
                cardWidth={4}
                products={settori}
            />
            <Container sx={{
                marginTop: "60px",
                marginBottom: "100px",
            }}>
                
                
            </Container>
          </div>
          
        </Layout>
    )
}

