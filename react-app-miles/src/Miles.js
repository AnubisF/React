import React,{useState}  from 'react';

export default function Miles() {
    const [miles, setMiles] = useState(0);
    const [kilometres, setKilometres] = useState(0);

    function calculate(e) {
        e.preventDefault();
        const result = miles * 1.609;
        setKilometres(result);
    }

    return (
        <div className="container">
            <form onSubmit={calculate}>
            <h3>Miles to kilometres</h3>
            <div className="mb-3">
                <label>Miles</label>
                <input 
                value={miles}
                onChange={e => setMiles(e.target.value)}
                type="number"
                step="0.01" 
                className="form-control" />
            </div>

            <div className="mb-3">
                <label>Kilometers</label>
                <output className="form-control">{kilometres}</output>
            </div>

            <button className="btn btn-primary">Calculate</button>
            </form>
        </div>
    )
}

