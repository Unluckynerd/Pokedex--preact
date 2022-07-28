const Moves = ({lists}) => {
    
    return(
        <div>
            <h3 className="text-center bg-info p-2">Moves</h3>
            <div className="mx-5">
              <ul>
                {lists.moves &&
                  lists.moves.map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                  ))}
              </ul>
            </div>
          </div>
    )
}

export default Moves;