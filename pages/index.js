import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
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
import googleFonts from 'google-fonts'


let slides = [
    {
        titolo: 'Dreams Island',
        description:'ciao',
        immagine: '/images/maldive1.jpg'
    },
    {
        titolo: 'Dreams Island',
        immagine: '/images/maldive2.jpg'
    },
    {
        titolo: 'Dreams Island',
        immagine: '/images/maldive3.jpg'
    },
]

let settori = [
    {
        title: "Elicottero",
        category: "Spostati in elicottero",
        immagineUrl: "/images/elicottero.jpg",
        url: "/elicottero"
    },
    {
        title: "Yatch",
        category: "Spostati con lo yatch",
        immagineUrl: "/images/yatch.jpg",
        url: "/yatch"
    },
    {
        title: "Idrovolante",
        category: "Spostati con un Idrovolante",
        immagineUrl: "/images/idrovolante.jpg",
        url: "/idrovolante"
    },

]

let camere = [
    {
        title: "Suite",
        immagineUrl: "/images/suite.jpg",
        url: "/"

    },
    {
        title: "Suite Luxury",
        immagineUrl: "/images/suite-luxury.jpg",
        url: "/"

    },

    {
        title: "Suite Premium",
        immagineUrl: "/images/suite-premium.jpg",
        url: "/"

    }, {
        title: "Suite Best",
        immagineUrl: "/images/suite-best.jpg",
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
x                description="Scegli come arrivare sull'isola"
                cardWidth={4}
                products={settori}
            />

            <Container sx={{
                marginTop: "60px",
                marginBottom: "100px",
            }}>
                <Products
                    title="Le Nostre Camere"
                    description="SCEGLI LA CAMERA CHE TI PIACE DI PIU' E PRENOTA ORA"
                    cardWidth={3}
                    products={camere}
                />

                <Typography variant="body2" color="rgba(70, 70, 70, 1)" margin={3}>
                    In conclusione, se sei alla ricerca di un'esperienza di soggiorno di lusso, le suite sono sicuramente la scelta giusta per te. A seconda del livello di esclusività che cerchi, puoi optare per una suite standard, luxury, premium o best. Qualunque sia la tua scelta, sono sicuro che non rimarrai deluso dalla tua esperienza di soggiorno di lusso.
                </Typography>
            </Container>
            <Container>


            </Container>


        </Layout>
    )
}