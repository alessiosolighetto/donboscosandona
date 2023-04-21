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
import Paper from '@mui/material/Paper'
import { Button } from "@mui/material"


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

export default function Bar() {
    return (
        <Layout>
           <Navbar
                    title="Dream Island"
                    btnprenotazioni="Prenotazioni"
                    btncamere="Camere"
                    btnservizi="Servizi"
                />
            <Typography variant="h3" margin={3}>
                Bar
            </Typography>  
            <Products
                title="Il Nostro Menù"
                description="Scopri cosa mangiare"
                cardWidth={4}
                products={men}
            />
        </Layout>
    )
}