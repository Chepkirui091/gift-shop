import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TopNavbar from "@/components/layouts/top-navbar";
import {Typography} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <Typography>
        <TopNavbar/>
      </Typography>
    </>
  );
}
