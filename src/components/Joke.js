export default function Joke(props) {
    return (
        <>
        <h2>{props.id}</h2>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        </>
    )
}