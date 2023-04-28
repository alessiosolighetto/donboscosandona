import { Container, Grid } from '@mui/material'
import SogniCard from '/components/SogniCard'

export default function Sogni({sogni}) {
    return (
        <Container maxWidth="lg">
            <Grid container spacign={4}>
                {
                    sogni.map((sogno) => (
                        <Grid item xs={12} md={6} lg={4} xl={3}>
                            <SogniCard sogno={sogno} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}