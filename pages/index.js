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


        </Layout>
    )
}

















