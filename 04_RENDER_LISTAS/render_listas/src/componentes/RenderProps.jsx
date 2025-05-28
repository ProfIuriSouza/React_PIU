export default function RenderProps (props) {

    return(
        <div style={{ border: '2px solid blue', padding: '20px' }}>
            <h2>Renderização de Listas 2</h2>
            <p>Renderização de listas com dados do array passados via props</p>
            <ul>
                {props.dados.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>

    )
}