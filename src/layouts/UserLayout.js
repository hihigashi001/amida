import Footer from "src/components/shared/Footer";
import Header from "src/components/shared/Header";

export const UserLayout = (props) => {
    return (
        <>
            <main className="h-screen">
                <Header />
                {props.children}
                <Footer />
            </main>
        </>
    )
}

export default UserLayout;