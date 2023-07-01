import { useEffect } from "react"
import { getComments } from "../../services/services"

const HomePage = () => {

    useEffect(() => {
        getALLComments()
    }, []);

    function getALLComments() {
        getComments()
          .then(res => console.log(res))
    }
    
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default HomePage
