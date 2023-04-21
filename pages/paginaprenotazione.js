import * as React from 'react';
import { Button } from '@mui/material';
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
import Footer from '/components/Footer'
import Maps from '/components/Maps'
import Navbar from "@/components/NavBar"
import MyCarousel from "@/components/Carousel"
import { margin } from "@mui/system"
import CheckInOutForm from '@/components/checkinout';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


let socials = [
    { title: 'Facebook', imageUrl: 'https://i.ibb.co/jw7JjHZ/facebook.png', url: '...' },
    { title: 'Instagram', imageUrl: 'https://i.ibb.co/kQ3DfnF/instagram.png', url: '...' },
    { title: 'Youtube', imageUrl: 'https://i.ibb.co/5Y0WfM1/youtube.png' },
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


export default function PaginaPrenotazione() {
    return (
        <Layout>
            <Navbar
                title="Dream Island"
                btnprenotazioni="Prenotazioni"
                btncamere="Camere"
                btnservizi="Servizi"
            />
            <Container maxWidth={false} sx={{ height: "80vh", padding: "50px" }}>
                <Typography>
                    inserire la data di check in
                </Typography>
                <input type="date" />
                <Typography sx={{ marginTop: "50px" }}>
                    inserire la data di check out
                </Typography>
                <input type="date" />
                <Typography sx={{ marginTop: "80px" }}>
                    inserire il numero di adulti 18+
                </Typography>
                <input type="number" />
                <Typography sx={{ marginTop: "20px" }}>
                    inserire il numero di ragazzi 13-18
                </Typography>
                <input type="number" />
                <Typography sx={{ marginTop: "20px" }}>
                    inserire il numero di bambini 0-13
                </Typography>
                <input type="number" /> <br />
                <FormControl sx={{marginTop:"70px"}}>
                    <FormLabel id="demo-radio-buttons-group-label">Mezzo di trasporto</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="elicottero2"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="elicottero2" control={<Radio />} label="Elicottero 2" />
                        <FormControlLabel value="elicotterolux" control={<Radio />} label="Elicottero " />
                        
                    </RadioGroup>
                </FormControl>
                <Button color='success' fullWidth sx={{ height: "50px", marginTop: "40px" }}>
                    Prenota ora
                </Button>
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