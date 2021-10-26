// import Link from "next/link";
import Layout from "../components/Layout";
import { Login, Logout, auth } from "~/src/lib/firebase";
import React from "react";
import { Button, Typography } from "@mui/material";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Typography variant="h1" component="div" gutterBottom>Hello Next.js 👋</Typography>
    <div>
      <Button variant="contained" onClick={() => Login()}>ログイン</Button>
      <Button variant="contained" onClick={() => Logout()}>ログアウト</Button>
    </div>
    <div>
      <pre>
        {auth.currentUser
          ? auth.currentUser.displayName + "でログインしています"
          : "ログインしていません"}
      </pre>
    </div>
  </Layout>
);

export default IndexPage;
