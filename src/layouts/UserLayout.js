import Footer from "src/components/shared/Footer";
import Header from "src/components/shared/Header";

export const UserLayout = (props) => {
    return (
        <div className="h-full">
            <Header />
            <main className="container mx-auto p-2">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout;