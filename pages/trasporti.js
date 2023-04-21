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





let trasporti = [
    {
        title: "Elicottero",
        category: "Spostati in elicottero",
        description: "Se vuoi raggiungere l'isola in grande stile, l'elicottero è la scelta ideale. Potrai ammirare dall'alto la bellezza della natura che circonda l'isola e atterrare direttamente nel cuore del resort. Un modo unico per iniziare la tua vacanza di lusso.",
        immagineUrl: "/images/elicottero.jpg",
        url: "/elicottero"
    },
    {
        title: "Yatch",
        category: "Spostati con lo yatch",
        description: "Arrivare sull'isola in yacht è un'esperienza indimenticabile: le acque cristalline e le spiagge di sabbia bianca si susseguono lungo la costa, regalando panorami mozzafiato. Una volta ormeggiato, potrai godere di tutti i servizi esclusivi che l'isola offre ai suoi ospiti.",
        immagineUrl: "/images/yatch.jpg",
        url: "/yatch"
    },
    {
        title: "Idrovolante",
        category: "Spostati con un Idrovolante",
        description: "L'arrivo in idrovolante è un'esperienza avventurosa e suggestiva. Mentre voli sopra le acque cristalline del mare, potrai ammirare l'isola dall'alto e coglierne la bellezza selvaggia. Una volta atterrati, sarete accolti da uno staff attento ad ogni vostra esigenza.",
        immagineUrl: "/images/idrovolante.jpg",
        url: "/idrovolante"
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
                title="Trasporti"
                description="Scegli come arrivare sull'isola"
                cardWidth={4}
                products={trasporti}
            />
            <Container sx={{
                marginTop:"60px",
                marginBottom:"100px",
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
