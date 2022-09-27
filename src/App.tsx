import './App.css';

import Calculator from './components/Calculator/Calculator';
import CalculatorContainer from './components/CalculatorContainer';

function App() {
    return (
        <>
            <div className='container'>
                <CalculatorContainer>{Calculator}</CalculatorContainer>
            </div>
        </>
    );
}

export default App;
