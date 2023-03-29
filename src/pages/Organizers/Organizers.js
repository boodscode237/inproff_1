import {useState, useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase/firebase-utils";


export default function Organizers() {

    const [organizers, setOrganizers] = useState([])
    const organizerCollectionRef = collection(db, 'organizers')
    const getNews = async() => {
        const data = await getDocs(organizerCollectionRef)
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setOrganizers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }
    useEffect(() => {

        getNews().then(data => {
            console.log('data fetched')
        })
    })
    return (
        <div className="organizers">
            <h2>Организаторы</h2>
            <p>Lorem ipsum dolor sit amet. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
            <p>Lorem ipsum dolor sit, amet. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.</p>
            <p>Lorem ipsum dolor sit, amet. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.</p>
        </div>
    )
}