
export default function Greet(props) {
    return (
    <div>
            <h1> Hello {props.user1.name.first} {props.user1.name.last}</h1>
            <h1>Hello {props.user2.name.first} {props.user2.name.last}</h1>
        </div> 

    )


    }
