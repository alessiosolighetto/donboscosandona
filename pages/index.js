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
import Footer from '/components/Footer'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Navbar from "@/components/NavBar"
import MyCarousel from "@/components/Carousel"
import { margin } from "@mui/system"
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar';
import { Paper } from '@mui/material';

const styles = {
    backgroundImage: "url('/images/sfondo1.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };


let tour = [
    {
        title: "Yatch",
        category: "Fai il tour dell'isola utilizzando il nostro Yacht",
        immagineUrl: "/images/yatch2.jpg",
        url: "/yatch"
    },
    {
        title: "Motoscafo",
        category: "Fai il tour dell'isola noleggiando il nostro motoscafo",
        immagineUrl: "/images/motoscafo.jpg",
        url: "/motoscafo"
    },
]


let settori = [
    {
        title: "Elicottero 2 Persone",
        category: "Raggiungi la nostra isola utilizzando da solo con la tua metà",
        immagineUrl: "/images/elicottero.jpg",
        url: "/elicottero"
    },
    {
        title: "Elicottero",
        category: "Raggiungi la nostra isola utilizzando il nostro elicottero classico",
        immagineUrl: "/images/elicottero2.jpg",
        url: "/elicottero"
    },
]


let men = [
    {
        title: "Regular",
        description: "Prova il nostro fantastico menù 'Regular'.",
        immagineUrl: "/images/pane1.jpg",
        url: "/pane"
    },
    {
        title: "Large",
        description: "Prova il nostro fantastico menù 'Large'.",
        immagineUrl: "/images/Pane2.jpg",
        url: "/pane"
    },
    {
        title: "The Biggest",
        description: "Prova il nostro fantastico menù 'The Biggest'.",
        immagineUrl: "/images/pane3.jpg",
        url: "/pane"
    },
    {
        title: "Asporto",
        description: "Prova il nostro fantastico menù 'D'asporto'.",
        immagineUrl: "/images/pane4.jpg",
        url: "/pane"
    },
    {
        title: "Vegano",
        description: "Prova il nostro fantastico menù 'Vegano'.",
        immagineUrl: "/images/pane5.jpg",
        url: "/pane"
    },
    {
        title: "Pollo",
        description: "Prova il nostro fantastico menù 'Pollo'.",
        immagineUrl: "/images/pane6.jpg",
        url: "/pane"
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


let immaginiparco = [
    {
        titolo: 'Il nostro parco',
        immagine: '/images/landinghero1.png'
    },
     {
        titolo: 'Piscina per bambini con intrattenimento',
        immagine: '/images/bambini2.jpg'
    },
    {
        titolo: 'Tunnel Panoramico',
        immagine: '/images/tunnel.jpg'
    },
   
   
    
]


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


export default function Home() {
    return (
        <Layout sitetitle="dreams">
            <div style={styles}>
      
    
            <Navbar
                title="Dream Island"
                btnprenotazioni="Prenotazioni"
                btncamere="Camere"
                btnservizi="Servizi"
            />

            <MyCarousel slides={immaginiparco} />
            <Products
                title="Il Nostro Menù"
                description="Scopri cosa mangiare"
                cardWidth={4}
                products={men}
            />
            <center>

            <Paper elevation={10}
            sx={{
                width:"700px",
                borderRadius:"30px"
            }}>
                
                    <Typography variant='h4' fontFamily="monospace">
                        Info per entrare nel parco
                    </Typography>
                
                <hr/>
                
                    <Typography variant='h4' margin={3} fontFamily="monospace">
                       Prezzi:
                    </Typography>
                    <Typography variant='h6' margin={1} fontFamily="monospace">
                       Bambino: 25€
                    </Typography>
                    <Typography variant='h6' margin={1} fontFamily="monospace">
                       Ragazzo: 35€
                    </Typography>
                    <Typography variant='h6' margin={1} fontFamily="monospace">
                       Adulto: 50€
                    </Typography>
                    <Typography variant='h4' margin={3} fontFamily="monospace">
                       Età minima
                    </Typography>
                    <Typography variant='h6' margin={1} fontFamily="monospace">
                       6 anni
                    </Typography>
                    
                
            </Paper>
            </center>
            <br/>
            <br/>
            <br/>
            <Products
                title="Tour Dell'isola"
                x description="Ecco i modi con cui puoi fare un tour dell'isola"
                cardWidth={6}
                products={tour}
            />

            <Container sx={{
                marginTop: "60px",
                marginBottom: "100px",
            }}>
                <Products
                    title="Scopri dove alloggiare durante la visita del Parco"
                    description="SCEGLI LA CAMERA CHE TI PIACE DI PIU' E PRENOTA ORA"
                    cardWidth={3}
                    products={camere}
                />
                <Products
                    title=" Trasporto"
                    x description="Scegli come arrivare sull'isola"
                    cardWidth={6}
                    products={settori}
                />
                <Typography variant="body2" color="rgba(70, 70, 70, 1)" margin={3}>
                    In conclusione, se sei alla ricerca di un'esperienza di soggiorno di lusso, le suite sono sicuramente la scelta giusta per te. A seconda del livello di esclusività che cerchi, puoi optare per una suite standard, luxury, premium o best. Qualunque sia la tua scelta, sono sicuro che non rimarrai deluso dalla tua esperienza di soggiorno di lusso.
                </Typography>
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
            </div>

        </Layout>
    )
}
