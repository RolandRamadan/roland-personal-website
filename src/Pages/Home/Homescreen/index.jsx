import MyProject from "../MyProject/MyProject";
import MySkills from "../MySkills/MySkills";
import OverviewSection from "../OverviewSection/OverviewSection";

export default function HomeView(){
    return (
        <>
         <OverviewSection />
         <MyProject />
         <MySkills />
        </>
    )
}