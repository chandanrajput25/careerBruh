import { useWindowSize } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import TopHeader from "../Global/Header/TopHeader";
import Header from "../Global/Header/Header";
import Cta from "../Global/CTA/Cta";
import Footer from "../Global/Footer/Footer";

const GlobalLayout = ({ children }) => {
    const size = useWindowSize();
    const pathname = usePathname();
    return (
        <div>
            {pathname !== "/apply" && pathname !== "/expert-detail" && (
                <TopHeader />
            )}
            {pathname !== "/apply" && <Header />}
            <main size={size}>{children}</main>
            {pathname !== "/apply" && <Cta />}
            {pathname !== "/apply" && <Footer />}
        </div>
    );
};

export default GlobalLayout;
