import { Container, Typography } from "@mui/material";
import ThemeSwitcher from "@/Components/Root/ThemeSwitcher";

export default async function Home() {
  return (
    <main>
      <Container component={"main"}>
        <Typography>Hello world!</Typography>
        <ThemeSwitcher />
      </Container>
    </main>
  );
}
