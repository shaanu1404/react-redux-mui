import { useState } from "react";
import { MultistepForm } from "../components/MultistepForm";
import NavBar from "../components/NavBar";
import { Container, Typography, Button, Card, Box } from "@mui/material";

type FormPages = "page1" | "page2" | "page3";
const pageSequence: FormPages[] = ["page1", "page2", "page3"];

function Users() {
  const [selectedForm, setSelectedForm] = useState<FormPages>("page1");

  return (
    <>
      <NavBar title="Users" />
      <Container
        sx={{
          paddingY: "1.2rem",
        }}
      >
        <Typography component="h4" variant="h4">
          New User
        </Typography>
        <Box sx={{ my: "1rem" }}>
          <Card sx={{ padding: "1rem" }}>
            <Typography component="h6" variant="h6">
              Add New User
            </Typography>
            <MultistepForm selectedForm={selectedForm}>
              {pageSequence.map((page) => (
                <MultistepForm.Page name={page}>
                  <Typography component="h6" variant="subtitle1">
                    Page 1
                  </Typography>
                </MultistepForm.Page>
              ))}
            </MultistepForm>
            <Button
              onClick={() => {
                // const index = pageSequence.findIndex(
                //   (page) => page === selectedForm
                // );
                // setSelectedForm(
                //   pageSequence[(index + 1) % pageSequence.length]
                // );
              }}
            >
              Change page
            </Button>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default Users;
