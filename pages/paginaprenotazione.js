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

        </Layout>
    )
}