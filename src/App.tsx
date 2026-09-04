import { useState } from "react";
import { calculateCurrentDraw } from "./calculations/currentDraw";
import { calculateGainVoltage } from "./calculations/gainVoltage";

function App() {
  const [power, setPower] = useState(2500);
  const [impedance, setImpedance] = useState(1);
  const [voltage, setVoltage] = useState(14.4);
  const [efficiency, setEfficiency] = useState(85);

  const currentDraw = calculateCurrentDraw(
      power,
      voltage,
      efficiency / 100
  );

  const gainVoltage = calculateGainVoltage(
      power,
      impedance
  );

  return (
      <div>
        <h1>Car Audio System Planner</h1>

        <h2>Amplifier</h2>

        <div>
          <label>
            RMS Power (Watts)
            <input
                type="number"
                value={power}
                onChange={(event) =>
                    setPower(Number(event.target.value))
                }
            />
          </label>
        </div>

        <div>
          <label>
            Final Impedance (Ohms)
            <input
                type="number"
                value={impedance}
                onChange={(event) =>
                    setImpedance(Number(event.target.value))
                }
            />
          </label>
        </div>

        <div>
          <label>
            System Voltage
            <input
                type="number"
                step="0.1"
                value={voltage}
                onChange={(event) =>
                    setVoltage(Number(event.target.value))
                }
            />
          </label>
        </div>

        <div>
          <label>
            Amplifier Efficiency (%)
            <input
                type="number"
                value={efficiency}
                onChange={(event) =>
                    setEfficiency(Number(event.target.value))
                }
            />
          </label>
        </div>

        <h2>Results</h2>

        <p>
          Estimated Current Draw:{" "}
          {currentDraw.toFixed(1)} A
        </p>

        <p>
          Target Gain Voltage:{" "}
          {gainVoltage.toFixed(1)} V
        </p>
      </div>
  );
}

export default App;