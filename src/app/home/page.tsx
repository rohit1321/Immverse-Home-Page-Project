
import Footer from "../../../utils/components/homePageCompoents/footer";
import HomePageBanner from "../../../utils/components/homePageCompoents/homePageBanner";
import Imapact from "../../../utils/components/homePageCompoents/impactOur";
import OurProduct from "../../../utils/components/homePageCompoents/ourProduct";
import Question from "../../../utils/components/homePageCompoents/questionComponent";
import SignUp from "../../../utils/components/homePageCompoents/signUp";

export default function HomePage(){
    return(
        <>
        
         <HomePageBanner/>
         <Imapact/>
         <OurProduct/>
         <Question/>
         <SignUp/>
         <Footer/>
        </>
    );
}