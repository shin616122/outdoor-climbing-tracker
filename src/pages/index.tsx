// import Link from "next/link";
import Layout from "../components/Layout";
import { auth } from "~/src/lib/firebase";
import React from "react";
import { Container } from "@mui/material";
import RockTable from "../components/RockTable";
import SignIn from '~/src/components/SignIn'

const IndexPage = () => (
  <>
    {auth.currentUser
      ?
      <Layout title="Home | Outdoor climbing tracker">
        <Container maxWidth="lg">
          <RockTable />
        </Container>
      </Layout>
      :
      <SignIn />
    }
  </>
);

export default IndexPage;

/*
<Container maxWidth="lg">
      <Typography variant="h1" component="div" gutterBottom>Hello Next.js π</Typography>
      <div>
      <Button variant="contained" onClick={() => Login()}>γ­γ°γ€γ³</Button>
      <Button variant="contained" onClick={() => Logout()}>γ­γ°γ’γ¦γ</Button>
    </div>
      <div>
        <pre>
          {auth.currentUser
            ? auth.currentUser.displayName + "γ§γ­γ°γ€γ³γγ¦γγΎγ"
            : "γ­γ°γ€γ³γγ¦γγΎγγ"}
        </pre>
      </div>
      <RockTable />
    </Container>
    */