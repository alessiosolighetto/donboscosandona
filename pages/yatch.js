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



export default function Yatch() {
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
                    Yatch
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "70px" }}>
                    Lo yacht è una imbarcazione di lusso, solitamente a motore, utilizzata per crociere e vacanze al mare. Si distingue per la sua eleganza e il comfort a bordo, offrendo ai passeggeri un'esperienza di viaggio esclusiva e di alto livello.
                    Gli yacht possono essere di varie dimensioni, a seconda delle esigenze dei proprietari o degli affittuari. Possono essere equipaggiati con una vasta gamma di servizi e comfort, tra cui piscine, jacuzzi, sale da pranzo, bar, cabine con aria condizionata e molto altro ancora.
                    La sua struttura solitamente è in grado di ospitare un elevato numero di passeggeri, oltre all'equipaggio, consentendo di organizzare feste, eventi e cene in una cornice di assoluto relax e comfort.
                    L'itinerario di una crociera in yacht può essere personalizzato in base alle esigenze dei passeggeri, spostandosi tra diverse località costiere e isole paradisiache. Ciò consente di vivere un'esperienza di viaggio su misura, lontano dalle masse turistiche e in un ambiente esclusivo.
                    Gli yacht richiedono un'attenta manutenzione, in quanto la loro struttura è esposta all'acqua salata e alle condizioni atmosferiche marine. Per questo motivo, i proprietari di yacht devono investire nella manutenzione e cura dell'imbarcazione, per preservare il suo valore nel tempo.
                    In sintesi, lo yacht rappresenta un'esperienza di viaggio di lusso e comfort, in grado di offrire un'esperienza di vacanza esclusiva e personalizzata. Grazie alla sua versatilità e alle sue prestazioni, lo yacht è in grado di navigare in qualsiasi tipo di mare e di offrire un'esperienza di viaggio unica e indimenticabile. </Typography> <br /> <br />
                <Typography component="animate" variant="h5">
                    Prezzo per viaggio in Idrovolante
                </Typography> <br /><br />
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Solo Andata
                </Typography>
                <Paper elevation={12} sx={{ width: "35%" }}>
                    <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                        4.000.000 €
                    </Typography>
                </Paper>
                <br /><br />
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno
                </Typography>
                <Paper elevation={12} sx={{ width: "35%" }}>
                    <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                        7.700.000 €
                    </Typography>
                </Paper>
                <br /><br />
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno All Inclusive
                </Typography>
                <Paper elevation={12} sx={{ width: "35%" }}>
                    <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                        10.000.000
                    </Typography>
                </Paper>
                <br /><br />
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