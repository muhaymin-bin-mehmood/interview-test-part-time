import Header from "@/container/header";
import Footer from "@/container/footer";
import HomeContent from "@/container/home/home-content";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Header />
      {/* Main Section */}
      <HomeContent />
      {/* Footer  Section */}
      <Footer />
    </main>
  );
}
