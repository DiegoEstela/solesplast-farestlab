import { ContentWrapper, PageContainer } from "./App.style";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import AppRouter from "./router";

function App() {
  return (
    <PageContainer>
      <ContentWrapper>
        <Navbar />
        <AppRouter />
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
}

export default App;
