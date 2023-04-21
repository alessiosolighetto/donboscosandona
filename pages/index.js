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
            
           
            <br/>
            <br/>
            <br/>
            <Products
                title="Tour Dell'isola"
                x description="Ecco i modi con cui puoi fare un tour dell'isola"
                cardWidth={6}
                products={tour}
            />
            <Typography  variant='h2'>
                fare una parte dove si spiegano le varie attrazioni del parco ed inserirla qui
            </Typography> 
            <Container sx={{
                marginTop: "60px",
                marginBottom: "100px",
            }}>
                
                <Products
                    title="Scegli dove alloggiare durante la visita del Parco"
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
                
            </Container>
            <Container sx={{display:"flex"}}>
                <Typography sx={{paddingTop:"5px"}}>
                    Clicca per andare alla pagina: info e prenotazioni
                </Typography>
                <Button href='info'>
                    info
                </Button> 
                <Typography sx={{paddingTop:"5px"}}>
                    e
                </Typography>
                <Button href='paginaprenotazione'>
                    prenotazioni
                </Button>
            </Container>

            <Footer
                imageUrl="https://immagine di sfondo"
                color="#777"
                opacity={1}
                title1="Sviluppatori"
                description1="Solighetto Alessio - Solighetto Daniel - Barbaric Elia - Alberti Lorenzo"
                title2="I nostri Social"
                socials={socials}
                
                
                menu={menu}
                copyright="Copyright (C) 2023 9dreams Agency."
            />
            </div>

        </Layout>
    )
}
