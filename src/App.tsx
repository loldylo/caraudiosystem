import { useState, type ChangeEvent } from "react";
import { calculateCurrentDraw } from "./calculations/currentDraw";
import { calculateGainVoltage } from "./calculations/gainVoltage";

function App() {
    const [power, setPower] = useState(2500);
    const [impedance, setImpedance] = useState(1);
    const [voltage, setVoltage] = useState(14.4);
    const [efficiency, setEfficiency] = useState(85);
    const [amplifierClass, setAmplifierClass] = useState("D");

    const isValid =
        power > 0 &&
        impedance > 0 &&
        voltage > 0 &&
        efficiency > 0 &&
        efficiency <= 100;

    const currentDraw = isValid
        ? calculateCurrentDraw(power, voltage, efficiency / 100)
        : null;

    const gainVoltage = isValid
        ? calculateGainVoltage(power, impedance)
        : null;

    function handleAmplifierClassChange(
        event: ChangeEvent<HTMLSelectElement>
    ) {
        const selectedClass = event.target.value;

        setAmplifierClass(selectedClass);

        if (selectedClass === "D") {
            setEfficiency(85);
        } else if (selectedClass === "AB") {
            setEfficiency(65);
        }
    }

    return (
        <main className="app">
            {/* HERO SECTION */}
            <section className="hero">
                <p className="hero-label">
                    CAR AUDIO SYSTEM PLANNER
                </p>

                <h1>
                    Build your system.
                    <span> Know the numbers.</span>
                </h1>

                <p className="hero-description">
                    Plan amplifier power, electrical requirements,
                    impedance, and system configuration in one place.
                </p>
            </section>

            {/* AMPLIFIER SECTION */}
            <section className="calculator-card">
                <div className="section-heading">
                    <span className="section-number">
                        01
                    </span>

                    <div>
                        <p className="section-label">
                            SYSTEM CONFIGURATION
                        </p>

                        <h2>Amplifier Setup</h2>
                    </div>
                </div>

                <div className="input-grid">
                    {/* POWER */}
                    <div className="input-group">
                        <label htmlFor="power">
                            RMS Power
                        </label>

                        <div className="input-with-unit">
                            <input
                                id="power"
                                type="number"
                                min="1"
                                value={power}
                                onChange={(event) =>
                                    setPower(
                                        Number(event.target.value)
                                    )
                                }
                            />

                            <span>W</span>
                        </div>
                    </div>

                    {/* AMPLIFIER CLASS */}
                    <div className="input-group">
                        <label htmlFor="amplifierClass">
                            Amplifier Class
                        </label>

                        <select
                            id="amplifierClass"
                            value={amplifierClass}
                            onChange={handleAmplifierClassChange}
                        >
                            <option value="D">
                                Class D
                            </option>

                            <option value="AB">
                                Class AB
                            </option>
                        </select>
                    </div>

                    {/* IMPEDANCE */}
                    <div className="input-group">
                        <label htmlFor="impedance">
                            Final Impedance
                        </label>

                        <div className="input-with-unit">
                            <input
                                id="impedance"
                                type="number"
                                min="0.1"
                                step="0.1"
                                value={impedance}
                                onChange={(event) =>
                                    setImpedance(
                                        Number(event.target.value)
                                    )
                                }
                            />

                            <span>Ω</span>
                        </div>
                    </div>

                    {/* VOLTAGE */}
                    <div className="input-group">
                        <label htmlFor="voltage">
                            System Voltage
                        </label>

                        <div className="input-with-unit">
                            <input
                                id="voltage"
                                type="number"
                                min="0.1"
                                step="0.1"
                                value={voltage}
                                onChange={(event) =>
                                    setVoltage(
                                        Number(event.target.value)
                                    )
                                }
                            />

                            <span>V</span>
                        </div>
                    </div>

                    {/* EFFICIENCY */}
                    <div className="input-group">
                        <label htmlFor="efficiency">
                            Amplifier Efficiency
                        </label>

                        <div className="input-with-unit">
                            <input
                                id="efficiency"
                                type="number"
                                min="1"
                                max="100"
                                value={efficiency}
                                onChange={(event) =>
                                    setEfficiency(
                                        Number(event.target.value)
                                    )
                                }
                            />

                            <span>%</span>
                        </div>

                        <p className="input-note">
                            Amplifier class provides an estimated
                            default. Enter the manufacturer's
                            efficiency if known.
                        </p>
                    </div>
                </div>
            </section>

            {/* RESULTS SECTION */}
            <section className="results-section">
                <div className="section-heading">
                    <span className="section-number">
                        02
                    </span>

                    <div>
                        <p className="section-label">
                            CALCULATED OUTPUT
                        </p>

                        <h2>Results</h2>
                    </div>
                </div>

                {isValid ? (
                    <div className="results-grid">
                        <div className="result-card">
                            <p className="result-label">
                                Estimated Current Draw
                            </p>

                            <div className="result-value">
                                <strong>
                                    {currentDraw?.toFixed(1)}
                                </strong>

                                <span>AMPS</span>
                            </div>

                            <p className="result-description">
                                Approximate electrical current
                                required by the amplifier at the
                                selected output power.
                            </p>
                        </div>

                        <div className="result-card">
                            <p className="result-label">
                                Target Gain Voltage
                            </p>

                            <div className="result-value">
                                <strong>
                                    {gainVoltage?.toFixed(1)}
                                </strong>

                                <span>VOLTS</span>
                            </div>

                            <p className="result-description">
                                Calculated AC voltage target based
                                on RMS power and final impedance.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="error-message">
                        <strong>
                            Invalid configuration
                        </strong>

                        <p>
                            Make sure all values are above zero
                            and amplifier efficiency is between
                            1% and 100%.
                        </p>
                    </div>
                )}
            </section>

            {/* FOOTER */}
            <footer>
                <p>
                    Built for planning real-world car audio
                    systems.
                </p>
            </footer>
        </main>
    );
}

export default App;