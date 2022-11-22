const App = () => (
    <div>
        <Tweet username='sasha' name='Sasha C' date='November 22, 2022' message="Sasha's first tweet" />
        <Tweet username='andrea' name='Andrea M' date='November 22, 2022' message="Andrea's first tweet" />
        <Tweet username='sylwia' name='Sylwia K' date='November 22, 2022' message="Sylwia's first tweet" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))