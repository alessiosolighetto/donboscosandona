import Layout from "@/components/Layout"
import { Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"


export default function Elicottero() {
    return (
        <Layout>
            <Container>
                <Typography component="animate" variant="h3">
                    Elicottero
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
                    Prezzo per viaggio in elicottero
                </Typography> <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Solo Andata
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    1.500.000 €
                </Typography>
                </Paper>
                <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    2.700.000 €
                </Typography>
                </Paper>
                <br/><br/>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno All Inclusive
                </Typography>
                <Paper elevation={12} sx={{width:"35%"}}>
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                   3.500.000
                </Typography>
                </Paper>
                <br/><br/>
                <Button width="100%" href="..">
                    Torna alla Home
                </Button>
            </Container>


        </Layout>
    )
}