import Layout from "@/components/Layout"
import { Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import Navbar from "@/components/NavBar"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"


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


        </Layout>
    )
}