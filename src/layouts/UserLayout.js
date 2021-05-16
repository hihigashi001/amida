import Footer from "src/components/shared/Footer";
import Header from "src/components/shared/Header";

export const UserLayout = (props) => {
    return (
        <>
            <main className="h-screen">
                <Header />
                <div className="px-4 mx-auto w-full max-w-screen-xl">{props.children}</div>
                <Footer />
            </main>
        </>
    )
}

export default UserLayout;