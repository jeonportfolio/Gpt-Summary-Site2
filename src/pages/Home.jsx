import Main from "../components/Main"
import Siderbar from "../components/Siderbar"

const Home = () => {
  return (
    <div className="flex h-screen text-white bg-emerald-950">
        <Siderbar/>
        <Main/>
    </div>
  )
}

export default Home