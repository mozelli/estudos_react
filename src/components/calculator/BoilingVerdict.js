function BoilingVerdict(props) {
    if(props.celcius >= 100) {
        return <p>Ferveria.</p>;
    }
    return <p>Não ferveria.</p>;
}

export default BoilingVerdict;