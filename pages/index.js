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
        titolo: 'Concorso nazionale settore elettrico',
        descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
        immagine: '/images/maldive3.jpg'
    
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
           
            <MyCarousel  slides={slides}/>




        </Layout>
    )
}

















