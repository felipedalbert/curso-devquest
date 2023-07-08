function Welcome(props) {
    return <h1>Olá, {props.name}</h1>;
}

class Welcome extends React.Component {
    render() {
        return <h1>Olá, {this.props.name}</h1>;
    }
}