import CTA from "./components/c-t-a";
import CTA1 from "./components/c-t-a1";
import Footer from "./components/footer";
import Layout from "./components/layout";
import Layout1 from "./components/layout1";
import Navbar from "./components/navbar";

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal]">
      <Navbar />
      <Layout1 />
      <Layout />
      <CTA1 />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
