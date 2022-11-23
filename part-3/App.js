const App = () => (
    <div>
        <Person name='Sasha C' age={36} />
        <Person name='Laura K' age={40} />
        <Person name='Julian J' age={12} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))