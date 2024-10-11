import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import MouseIcon from "@mui/icons-material/Mouse";
import UserCount from "@/Components/Main/UserCount";

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
          <Box sx={{ ml: "auto" }}></Box>
          <UserCount initialUserCount={0} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
