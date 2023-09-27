import SideBar from "./components/SideBar"
import Header from "./components/Header"
import PageNotFound from "@/app/components/PageNotFound"
import RoadMap from "./components/RoadMap"
import SchemesVaccination from "./components/SchemesVaccination"
import GovernmentSchemes from "./components/GovernmentSchemes"

const page = ({ params }) => {

    return (
        <main className="overflow-y-hidden hide-scroll-on-page h-screen">
            {
                params.servicename[0] !== "Vaccination" && params.servicename[0] !== "Roadmap" && params.servicename[0] !== "Schemes" ?
                    <>
                        <PageNotFound />
                    </>
                    :
                    <>
                        <Header params={params} />
                        <main className="flex overflow-hidden">
                            <SideBar params={params.servicename[0]} active={params.servicename[1]} />
                            {
                                params.servicename[0] === "Roadmap" ?

                                    <RoadMap />
                                    :
                                    (
                                        params.servicename[0] === "Vaccination"?
                                        <SchemesVaccination />
                                        :
                                        <GovernmentSchemes />
                                    )
                            }
                        </main>

                    </>
            }
        </main>
    )
}

export default page