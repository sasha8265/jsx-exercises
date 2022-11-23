const Person = (props) => {
    return <div>
        <p>Learn some information about this person</p>
        <ul>
            <li><b>Name:</b> {props.name}</li>
            <li><b>Age:</b> {props.age}</li>
            <li><b>Hobbies:</b></li>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </ul>
        <h3>{props.age >= 18 ? "GO VOTE!" : "You must be 18"}!</h3>
    </div>
};