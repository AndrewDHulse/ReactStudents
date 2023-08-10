import Score from "./Score"

export default function Student({ student }){
    return(
    <>
        <h2>Name: {student.name} </h2>
        <h2>Bio: {student.bio}</h2>
        <h2>Scores: </h2>
        {student.scores.map((score, idx )=>
        <Score key={idx} score={score} />
        )} 
    </>
)
}