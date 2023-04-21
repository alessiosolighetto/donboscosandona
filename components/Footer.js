import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Footer(props) {
  return (
    <Box
      sx={{
        backgroundColor: props.color,
        color: 'white',
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {props.title1}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {props.description1}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {props.title2}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {props.socials.map((social) => (
                <Box
                  key={social.title}
                  sx={{ display: 'flex', alignItems: 'center', mr: 2 }}
                >
                  <Link href={social.url}>
                    <img
                      src={social.imageUrl}
                      alt={social.title}
                      width="20"
                      sx={{ mr: 1 }}
                    />
                  </Link>
                  <Link
                    href={social.url}
                    variant="body2"
                    sx={{ color: 'inherit' }}
                  >
                    {social.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {props.title3}
            </Typography>
            <Grid container spacing={2}>
              
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <hr sx={{ borderColor: 'white' }} />
          </Grid>
          <Grid item xs={12}>
            <Toolbar
              component="nav"
              variant="dense"
              sx={{
                overflowX: 'auto',
                color: 'inherit',
                justifyContent: 'flex-end',
              }}
            >
              {props.menu.map((link) => (
                <Button
                  key={link.title}
                  href={link.url}
                  variant="text"
                  sx={{ color: 'inherit', mr: 2 }}
                >
                  {link.title}
                </Button>
              ))}
            </Toolbar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 3 }}>
              {props.copy}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
    