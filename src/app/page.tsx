import { Container, Typography } from "@mui/material";
import ThemeSwitcher from "@/Components/Root/ThemeSwitcher";

export default async function Home() {
  return (
    <main>
      <Container component={"main"}>
        <Typography>Welcome to clicksy me!</Typography>
        <ThemeSwitcher />
      </Container>
    </main>
  );
}
