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



export default function ElicotteroLux() {
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
                    Elicottero Lux
                </Typography>
                <Typography variant="body2" sx={{marginTop:"70px"}}>
                    L'elicottero è un aeromobile ad ala rotante, dotato di uno o più rotori, che permette di volare verticalmente e in diverse direzioni. Grazie alla sua capacità di decollare e atterrare senza la necessità di una pista, l'elicottero è un mezzo di trasporto molto versatile e utilizzato in vari settori, dal trasporto civile e militare all'agricoltura, al soccorso e al turismo.
                    L'elicottero è dotato di una cabina per i passeggeri, solitamente divisa in scomparti e posti a sedere, e di una cabina di pilotaggio. Il pilota, tramite un sistema di comandi, può gestire l'inclinazione dei rotori, la velocità e la direzione del volo.
                    Gli elicotteri possono avere dimensioni e configurazioni diverse a seconda dell'utilizzo: ci sono elicotteri leggeri, utilizzati principalmente per il trasporto di passeggeri e merci in ambito civile, elicotteri militari utilizzati per missioni di trasporto e sorveglianza, elicotteri per il soccorso sanitario e elicotteri speciali adatti a missioni specifiche come l'estinzione degli incendi o il trasporto di materiali pesanti.
                    L'elicottero è anche utilizzato nell'industria del turismo, soprattutto in luoghi di difficile accesso come montagne o isole. I voli turistici in elicottero offrono ai passeggeri una vista panoramica spettacolare di luoghi mozzafiato e una prospettiva diversa rispetto a quella offerta da altri mezzi di trasporto.
                    L'elicottero è considerato un mezzo di trasporto sicuro, ma richiede una manutenzione regolare e costante per garantire la sicurezza dei passeggeri e degli equipaggi. Il personale addetto alla manutenzione degli elicotteri è altamente specializzato e segue rigorosi protocolli per assicurare il corretto funzionamento di ogni componente del mezzo.
                    In sintesi, l'elicottero rappresenta un mezzo di trasporto unico e versatile, che offre molteplici possibilità di utilizzo in vari settori. Grazie alla sua capacità di decollare e atterrare in spazi ridotti e alla sua agilità, l'elicottero è un mezzo in grado di raggiungere luoghi altrimenti inaccessibili, offrendo esperienze uniche e indimenticabili ai suoi passeggeri.
                </Typography> <br/> <br/>
                <Typography component="animate" variant="h5">
                    Prezzo per viaggio in elicottero lux
                </Typography> <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Solo Andata
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                     € 18.000
                </Typography>
                </Paper>
                <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                € 33.000
                </Typography>
                </Paper>
                <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno All Inclusive
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                € 39.000
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