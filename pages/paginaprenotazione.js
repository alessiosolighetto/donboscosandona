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


export default function PaginaPrenotazione() {
    return (
        <Layout>
            <Navbar />
            <Container>
                <center>

                    <Typography variant='h3' marginTop={5} fontFamily="monospace">
                        Prenota la tua vacanza
                    </Typography>
                </center>
            </Container>
            <Container>
                <CheckInOutForm /> <br /><br />
                <center>
                    <Typography variant='h3' margin={0} fontFamily="monospace">
                        Numero Persone
                    </Typography>
                </center>

                <br />
                <input type="number" />
                <br /><br /><br /><br />
                <center>
                    <Typography variant='h3' margin={0} fontFamily="monospace">
                        Scegli il Mezzo per raggiungere l'Isola
                    </Typography>
                </center>

                <br />
                <FormControl>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Yatch"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Yatch" control={<Radio />} label="Yatch" />
                        <FormControlLabel value="Elicottero" control={<Radio />} label="Elicottero" />
                        <FormControlLabel value="Idrovolante" control={<Radio />} label="Idrovolante" />
                    </RadioGroup>
                </FormControl>
            </Container>
            <center>
                <Button variant="contained" color="success" sx={{ width: "80%", borderRadius: "10px", marginTop: "100px", height: "40px" }}>
                    Prenota ORA
                </Button>
            </center>

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