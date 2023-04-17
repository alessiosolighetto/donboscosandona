import Layout from "@/components/Layout"
import { Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"


export default function Idrovolante() {
    return (
        <Layout>
            <Container>
                <Typography component="animate" variant="h3">
                  Idrovolante
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "70px" }}>
                    L'idrovolante è un aeromobile dotato di ali e galleggianti che gli permettono di decollare e atterrare dall'acqua. Questa particolare caratteristica lo rende un mezzo di trasporto molto versatile, in grado di operare in aree costiere, laghi e fiumi.
                    L'idrovolante può trasportare un numero variabile di passeggeri e merci, a seconda della sua capacità e configurazione. È dotato di un motore a pistoni o a turbina, che gli consente di raggiungere velocità elevate e di volare a quote relativamente basse, consentendo una vista panoramica unica.
                    L'idrovolante viene utilizzato soprattutto in ambito turistico, per scoprire luoghi inaccessibili via terra o per godere di panorami mozzafiato dal cielo. Ma può essere utilizzato anche in altre attività, come l'agricoltura, la pesca e il trasporto merci.
                    Per decollare e atterrare, l'idrovolante ha bisogno di una superficie di acqua abbastanza estesa, ma non necessita di una pista di atterraggio. Ciò lo rende molto utile in luoghi dove l'infrastruttura aeroportuale è carente o inaccessibile, come ad esempio in remote zone montane o insulari.
                    Come tutti i mezzi di trasporto, anche l'idrovolante richiede una manutenzione costante e accurata, in quanto la salinità dell'acqua può provocare corrosione e danni alle parti metalliche. Il personale addetto alla manutenzione degli idrovolanti deve essere altamente specializzato e competente, per garantire la massima sicurezza dei passeggeri e degli equipaggi.
                    In sintesi, l'idrovolante rappresenta un mezzo di trasporto molto particolare, in grado di operare sia in acqua che in aria, offrendo un'esperienza di viaggio unica e mozzafiato. Grazie alla sua versatilità, l'idrovolante è in grado di raggiungere luoghi altrimenti inaccessibili, rappresentando un'alternativa interessante ai mezzi di trasporto tradizionali.
                </Typography> <br /> <br />
                <Typography component="animate" variant="h5">
                    Prezzo per viaggio in Idrovolante
                </Typography> <br /><br />
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Solo Andata
                </Typography>
                <Paper elevation={12} sx={{ width: "35%" }}>
                    <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                        2.000.000 €
                    </Typography>
                </Paper>
                <br /><br />
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno
                </Typography>
                <Paper elevation={12} sx={{ width: "35%" }}>
                    <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                        3.700.000 €
                    </Typography>
                </Paper>
                <br /><br />
                <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                    Andata e Ritorno All Inclusive
                </Typography>
                <Paper elevation={12} sx={{ width: "35%" }}>
                    <Typography component="animate" variant="h6" fontFamily={"monospace"}>
                        4.250.000
                    </Typography>
                </Paper>
                <br /><br />
                <Button width="100%" href="..">
                    Torna alla Home!
                </Button>
            </Container>


        </Layout>
    )
}