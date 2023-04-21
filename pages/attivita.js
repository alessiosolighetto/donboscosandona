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
import Footer from '/components/Footer'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Navbar from "@/components/NavBar"
import MyCarousel from "@/components/Carousel"
import { margin } from "@mui/system"


let socials = [
    { title: 'Facebook', imageUrl: 'https://i.ibb.co/jw7JjHZ/facebook.png', url: '...' },
    { title: 'Instagram', imageUrl: 'https://i.ibb.co/kQ3DfnF/instagram.png', url: '...' },
    { title: 'Youtube', imageUrl: 'https://i.ibb.co/5Y0WfM1/youtube.png'},
    { title: 'Linkedin', imageUrl: 'https://i.ibb.co/YQkmRZ1/linkedin.png', url: '...' },
]

let images = [
    { title: 'Servizi', imageUrl: 'https...', url: '...' },
    { title: 'Camere', imageUrl: 'https...', url: '/camere' },
    { title: 'Servizi', imageUrl: '', url: '/servizi' },
]

let menu = [
    { title: 'ACCOUNT', url: '/account' },
    { title: 'PRESENTATION', url: '/energie' },
    { title: 'DISCOVER', url: '/elettrico' },
    { title: 'PAYMENT', url: '/meccanico' },
    { title: 'CONTACT US', url: '/motoristico' },
]


let settori = [
    {
        title: "Sauna",
        category: "Prova la nostra sauna",
        description: "La sauna è aperta 24/7 con servizio bar disponibile a tutti gli orari. E' disponibile la sauna 'leggera' che raggiunge i 100 °C, la sauna 'pesante' che raggiunge i 150 gradi e la sauna e la criosauna che raggiunge i -130 °C.",
        immagineUrl: "/images/sauna.jpg",
        url: "/"
    },
    {
        title: "Moto d'acqua",
        category: "Prova la nostra super esperienza con la moto d'acqua",
        description: "E' possibile affitare le moto d'acqua ad un prezzo di 50€ l'ora con la possibilità di viaggiare in piena tranquillità a largo del nostro mare e la possibilità di prenotare un insegnante per imparare a guidarla nei migliori dei modi ad un prezzo di soli 100€ l'ora. ",
        immagineUrl: "/images/motod'acqua.jpg",
        url: "/"
    },
    {
        title: "Snorkeling",
        category: "Prova una super eperienza adrenalinica nutando con i pesci del nostro mare",
        description: "Se da sempre vuoi provare un esperienza piena di adrenalina e divertimento devi assolutamente provare la nostra attività di snorkelign che ti da la possibilità di nuotare liberamente insieme alla nostra fauna acquifera.",
        immagineUrl: "/images/snorkeling.jpg",
        url: "/"
    },
    {
        title: "Canoa",
        category: "Prova il nostro servizio canoa",
        description: "Il nostro servio noleggio canoa è aperto dalle 13:00 alle 18:30 hai la possibilità di visitare posti fantastici come la 'Dream Waterfall' a soli 40 minuti dal residence al prezzo di 40€ l'ora",
        immagineUrl: "/images/canoa.jpg",
        url: "/"
    },
    {
        title: "Massaggi",
        category: "Prova il nostro servizio massaggi",
        description: "Durante una giornata di relax puoi usufruire del nostro salone massaggi con vista sul mare al prezzo di 80€ l'ora con servizio bar incluso.",
        immagineUrl: "/images/massaggi.jpg",
        url: "/"
    },
    {
        title: "Parasailing",
        category: "Prova ora la super esperienza di Parasailing",
        description: "Hai la possibilità di noleggiare per un'ora il nostro servizio di Parasailing al prezzo di 30€ l'ora",
        immagineUrl: "/images/mongolfiera.jpg",
        url: "/"
    },
    {
        title: "Yacht",
        category: "Visita la nostra isola con il nostro fantastico Yacht",
        description: "Hai la possibilità di noleggiare i nostri Yacht al prezzo di 300€ l'ora oppure a 2000€ per 24h",
        immagineUrl: "/images/yatch2.jpg",
        url: "/"
    },

    {
        title: "Motoscafo",
        category: "Visita la nostra isola con il nostro fantastico Yacht",
        description: "Hai la possibilità di noleggiare i nostri magnifici motoscafi e incluso nel prezzo che è 100€ l'ora c'è un autista privato che ti porterà nei migliori posti visitabili",
        immagineUrl: "/images/motoscafo.jpg",
        url: "/"
    },

    {
        title: "Idrovolante",
        category: "Visita la nostra isola con il nostro fantastico Yacht",
        description: "Hai la possibilità di noleggiare i nostri super idrovolanti per 170€ l'ora c'è un autista privato che ti porterà nei migliori posti visitabili",
        immagineUrl: "/images/idrovolante.jpg",
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
           
            <Products
                title="Le nostre attività"
                description="Grazie alle nostre attività vivi a pieno l'esperienza del nostro hotel"
                cardWidth={4}
                products={settori}
            />
            <Container sx={{
                marginTop: "60px",
                marginBottom: "0px",
            }}>
                
                
            </Container>
          

          <Footer
                imageUrl="https://immagine di sfondo"
                color="#777"
                opacity={1}
                title1="Sviluppatori"
                description1="Solighetto Alessio - Solighetto Daniel - Barbaric Elia - Alberti Lorenzo"
                title2="Social Feed"
                socials={socials}
                title3="I Settori"
                images={images}
                menu={menu}
                copyright="Copyright (C) 2023 9dreams Agency."
            />
          
        </Layout>
    )
}

