import Navbar from "../Nav/navbar";
import Footer from "../Footer/footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}