import Layout from "@/components/Layout"
import { Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import Navbar from "@/components/NavBar"
import Footer from '/components/Footer'
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"


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



export default function Idrovolante() {
    return (
        <Layout>
            <Navbar
                title="Dream Island"
                btnprenotazioni="Prenotazioni"
                btncamere="Camere"
                btnservizi="Servizi"
            />
            <Container>
                <Typography component="animate" variant="h3">
                   Idrovolante
                </Typography>
                <Typography variant="body2" sx={{marginTop:"70px"}}>
                    mettere testo idrovolante    
                 </Typography> <br/> <br/>
                <Typography component="animate" variant="h5">
                    Prezzo per viaggio in Idrovolante
                </Typography> <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Solo Andata
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    2.500.000 €
                </Typography>
                </Paper>
                <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    4.700.000 €
                </Typography>
                </Paper>
                <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno All Inclusive
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                   8.500.000
                </Typography>
                </Paper>
                <br/><br/>
                <Button width="100%" href="..">
                    Torna alla Home
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