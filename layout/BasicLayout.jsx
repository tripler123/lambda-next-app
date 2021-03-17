import Header from "../components/Header";
import Footer from "../components/Footer";

const BasicLayout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
