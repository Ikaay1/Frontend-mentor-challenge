import './calculator.css';

import { data } from '../../data';

const Calculator = ({
    inputValue,
    handleChangeInputValue,
    handleSolve,
    handleReset,
    handleDelete,
}: {
    inputValue: string;
    handleChangeInputValue: (value: string) => void;
    handleSolve: () => void;
    handleReset: () => void;
    handleDelete: () => void;
}) => {
    const displayKeys = (
        arrKeys: string[],
        nameClass: boolean,
    ): JSX.Element => {
        return (
            <div className='keysGroup'>
                <div onClick={() => handleChangeInputValue(arrKeys[0])}>
                    {arrKeys[0]}
                </div>
                <div onClick={() => handleChangeInputValue(arrKeys[1])}>
                    {arrKeys[1]}
                </div>
                <div onClick={() => handleChangeInputValue(arrKeys[2])}>
                    {arrKeys[2]}
                </div>
                <div
                    className={nameClass ? 'del' : ''}
                    onClick={
                        !nameClass
                            ? () =>
                                  handleChangeInputValue(
                                      arrKeys[3] === 'x' ? '*' : arrKeys[3],
                                  )
                            : handleDelete
                    }
                >
                    {arrKeys[3]}
                </div>
            </div>
        );
    };

    return (
        <div className='calc'>
            <div className='navbarContainer'>
                <p>calc</p>
                <div className='themeFlex'>
                    <p>THEME</p>
                    <div>
                        <div>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                        <div className='toggleDiv'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='screen'>
                <input type='text' value={inputValue} />
            </div>

            <div className='keysContainer'>
                {data.map((group) => (
                    <div key={group.num[0]}>
                        {displayKeys(group.num, group.del)}
                    </div>
                ))}
                <div className='lastKeyGroup'>
                    <div className='reset' onClick={handleReset}>
                        RESET
                    </div>
                    <div className='equal' onClick={handleSolve}>
                        =
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
