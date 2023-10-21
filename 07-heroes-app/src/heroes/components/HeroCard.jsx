import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return (<></>)

    return <p>{characters}</p>
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    return (
        <div className="col">
            <div className="card bg-dark text-white">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body text-white">
                            <div className="card-title">{superhero}</div>
                            <div className="card-text">{alter_ego}</div>

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-light">{first_appearance}</small>
                            </p>

                            <Link to={`/heroe/${id}`}>
                                Mas..
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
