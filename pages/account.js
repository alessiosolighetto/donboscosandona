import Typography from '@mui/material/Typography'
import Layout from '../components/Layout'
import Container from "@mui/material/Container"
import Footer from '/components/Footer'
import Paper from "@mui/material/Paper"
import Navbar from "@/components/NavBar"

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


export default function Account() {
    return (
        <Layout>
            <Navbar
                title="Dream Island"
                btnprenotazioni="Prenotazioni"
                btncamere="Camere"
                btnservizi="Servizi"
            />
            <Typography variant="h3" sx={{ padding: 4 }}> Account</Typography>
            <center>
                <Typography variant="h6" sx={{ padding: 4 }}> PORTFOLIO:</Typography>

                <Paper elevation={24} sx={{
                    margin: "20px",
                    borderRadius: "50px",
                    minWidth: "50%", maxWidth:"70%"
                }}>
                    <Typography variant="h4" sx={{ padding: 4 }}><center> € 735.528 </center></Typography>
                </Paper>
                <br />
                <br />

                <Typography variant="h5" sx={{ padding: 4, color: "green" }}> CONGRATULAZIONI! HAI ACCOMULATO UNO SCONTO DI</Typography>
                <Paper elevation={24} sx={{
                    margin: "20px",
                    borderRadius: "50px", minWidth: "50%", maxWidth:"70%"
                }}>
                    <Typography variant="h4" sx={{ padding: 4 }}> <center> € 5.230</center></Typography>

                </Paper>
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