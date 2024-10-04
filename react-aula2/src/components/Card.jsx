const Card = ({imagem, title, category, paragraph, tipo}) => {
    return (
        <>
            <div style={{border: "1px solid black"}}>
                <img src={imagem} alt={title} />
                <h2>{title}</h2>
                {
                    tipo == "A" ? (
                        <>
                            <h6>{category}</h6>
                            <p>{paragraph}</p>
                        </>
                    )
                    
                 }
            </div>
        </>
    );
}

export default Card;