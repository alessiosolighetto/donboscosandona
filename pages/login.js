import { Typography } from "@mui/material"
import Layout from "@/components/Layout"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"



export default function Login() {
    return (
        <Layout>
            <Grid container spacing={0}>

                <Grid lg={6}>
                    <center>
                        <Stack sx={{
                            width:"50%",
                            marginTop:"300px"
                        }}>
                            <Typography variant="h4">Login</Typography>
                            <Typography variant="body2">Email</Typography>
                            <input type="email" />
                            <Typography variant="body2">Password</Typography>
                            <input type="password" />
                        </Stack>

                    </center>

                </Grid>
                <Grid lg={6}>
                    <center>
                    <Stack sx={{
                            width:"50%",
                            marginTop:"350px"
                        }}>
                            <Typography variant="h4">Immagine Login</Typography>

                        </Stack>

                    </center>
                </Grid>

            </Grid>



        </Layout>


    )
}