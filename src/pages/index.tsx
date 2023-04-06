import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Information } from "../components/Information";
import { Navbar } from "../components/Navbar";
import { SearchUser } from "../components/SearchUser";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gitlytics: Rediscover your GitHub Information</title>
        <meta name="og:site_name" content="Gitlytics" />
        <meta
          name="description"
          content="The fastest way to see your statistics and curious graphs of Github."
        ></meta>

        <meta itemProp="name" content="Gitlytics" />
        <meta
          itemProp="description"
          content="The fastest way to see your statistics and curious graphs of Github.."
        />
        <meta itemProp="image" content="/logo.png" />

        <meta property="og:url" content="https://gitlytics.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gitlytics" />
        <meta
          name="og:description"
          content="The fastest way to see your statistics and curious graphs of Github.."
        ></meta>
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:title" content="Gitlytics" />
        <meta
          name="twitter:description"
          content="The fastest way to see your statistics and curious graphs of Github.."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>
      <div className="w-full h-full bg-[#1E1E1E]">
        <Navbar />
        <Header />
        <SearchUser />
        <Information />
        <Footer />
      </div>
    </>
  );
}
