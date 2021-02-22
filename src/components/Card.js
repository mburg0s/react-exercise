export default function Card(props) {   


    return (
        <div>
            {/* <h2>Card Component</h2> */}
            <p>{props.user1.phone}</p>
            <p>{props.user2.phone==null ? 'N/A': props.user2.phone}</p>
        </div>

    )



}