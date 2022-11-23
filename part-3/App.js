const App = () => (
    <div>
        <Person name='Sasha C' age={36} hobbies={["biking", "coding", "cooking"]} />
        <Person name='Andrea M' age={32} hobbies={["running", "cooking", "reading"]} />
        <Person name='Julian J' age={12} hobbies={["basketball", "painting", "playing piano"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))