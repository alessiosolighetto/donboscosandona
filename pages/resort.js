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


const styles = {
    backgroundImage: "url('/images/sfondo1.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
};


let camere = [
    {
        title: "Suite",
        category: "",
        description: "Se stai cercando un'esperienza di soggiorno di lusso, le suite potrebbero essere la scelta ideale per te. Ho avuto la fortuna di soggiornare in diverse tipologie di suite in diverse strutture e posso condividere con te la mia esperienza.",
        immagineUrl: "https://image-tc.galaxy.tf/wijpeg-jjss2bb72zvvnz67xbgl8dbm/falkensteiner-jesolo-apartement-1200-0390.jpg?width=800",
        url: "/"

    },
    {
        title: "Suite Luxury",
        category: "",
        description: "Se invece sei alla ricerca di un'esperienza di lusso ancora più esclusiva, allora dovresti optare per una suite luxury. In queste suite, troverai servizi extra come una Jacuzzi privata, una cucina completamente attrezzata, un soggiorno più grande e lussuoso e servizi di concierge dedicati.",
        immagineUrl: "https://www.bauhaus.ch/dam/jcr:c71d0b43-822d-4838-b38e-75da134b8fac/teaser-garten-freizeit-ratgeber-whirlpool-im-garten-frau-im-whirlpool-800x800.jpg",
        url: "/"

    },

    {
        title: "Suite Premium",
        category: "",
        description: "Passiamo ora alla suite premium, che offre un'esperienza di soggiorno ancora più esclusiva e di lusso. Questa tipologia di suite di solito include ancora più servizi, come una piscina privata o una sauna, una zona living più ampia e lussuosa e una vista panoramica mozzafiato sulla città o sul mare. Se stai cercando un'esperienza di soggiorno di lusso e vuoi godere di servizi ancora più esclusivi, allora la suite premium potrebbe essere la scelta perfetta.",
        immagineUrl: "https://media.z-suite.it/sardinia360.it/public/crop/Falkensteiner-Resort-Capo-Boi--capoboiarchitekturimage-gross145_ret-800x800.jpg?v=1",
        url: "/"

    }, {
        title: "Suite Best",
        category: "",
        description: "Infine, la suite best rappresenta il massimo della lussuosità e dell'eccellenza. Queste suite sono pensate per soddisfare i gusti più esigenti, offrendo un'esperienza di soggiorno personalizzata e dedicata ai dettagli. Qui troverai servizi e comfort davvero unici, come una terrazza privata con piscina, una zona pranzo elegante e sofisticata, un bagno di marmo con una vasca da bagno in stile spa, e molto altro ancora. ",
        immagineUrl: "https://image-tc.galaxy.tf/wijpeg-51efj89s0ex6vfknn6xaw65um/suite-experience-highlight-2.jpg?width=800",
        url: "/"

    },
]

export default function Camere() {
    return (
        <Layout>
            <div style={styles}>
                <Navbar
                    title="Dream Island"
                    btnprenotazioni="Prenotazioni"
                    btncamere="Camere"
                    btnservizi="Servizi"
                />
                <br />
                <br />
                <Products
                    title="Le Nostre Camere"
                    description="SCEGLI LA CAMERA CHE TI PIACE DI PIU' E PRENOTA ORA"
                    cardWidth={6}
                    products={camere}
                />
                <center>

                    <Typography variant="h5" fontFamily="monospace" >
                        Nelle camere è anche compreso il servizio Bar
                    </Typography>
                </center>
                <Button color="success" fullWidth={true} sx={{ height: "100px", marginBottom: "50px" }} href="/bar">
                    <Typography variant="h5" fontFamily="monospace" >
                        SCOPRI IL NOSTRO BAR
                    </Typography>
                </Button>
                <br />

                <Paper>
                    <center>
                        <Typography variant="h4">
                            Prezzi Camere
                        </Typography>
                        <hr />
                        <br />
                        <Typography variant="h5" fontFamily="monospace">
                            Suite
                        </Typography>
                        <Typography variant="h6" margin={2}>
                            250€ a notte
                        </Typography>
                        <br />
                        <Typography variant="h5" fontFamily="monospace">
                            Suite Luxury
                        </Typography>
                        <Typography variant="h6" margin={2}>
                            280€ a notte
                        </Typography>
                        <br />
                        <Typography variant="h5" fontFamily="monospace">
                            Suite Premium
                        </Typography>
                        <Typography variant="h6" margin={2}>
                            320€ a notte
                        </Typography>
                        <br />
                        <Typography variant="h5" fontFamily="monospace">
                            Suite Best
                        </Typography>
                        <Typography variant="h6" margin={2}>
                            400€ a notte
                        </Typography>
                    </center>
                </Paper>


            </div>

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