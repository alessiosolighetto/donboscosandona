import Typography from '@mui/material/Typography'
import Layout from '../components/Layout'
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Navbar from "@/components/NavBar"

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
        </Layout>
    )
}