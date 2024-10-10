import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";

export default async function Navbar() {
  return (
    <AppBar position="sticky" color="primary" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MouseIcon
            color="inherit"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Clicksy Me
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
