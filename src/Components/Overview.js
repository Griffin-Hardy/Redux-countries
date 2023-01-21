import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>"{currentDisplay.name.common}"</h2>

            <table className="overview-table">
                <tr>
                    <td>Borders: </td>
                    <td>
                        {currentDisplay.borders
                            ? currentDisplay.borders.map((e, i, arr) => {
                                  if (i + 1 === arr.length) {
                                      return `${e}`;
                                  } else {
                                      return `${e}, `;
                                  }
                              })
                            : "N/A"}
                    </td>
                </tr>
                <tr>
                    <td>Capitol: </td>
                    {currentDisplay.capital.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr>
                <tr>
                    <td>Population: </td>
                    <td>{currentDisplay.population}</td>
                </tr>
                <tr>
                    <td>Continents: </td>
                    {currentDisplay.continents.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr>
                <tr>
                    <td>Independent: </td>
                    <td>{currentDisplay.independent ? "true" : "false"}</td>
                </tr>
                <tr>
                    <td>Landlocked: </td>
                    <td>{currentDisplay.landlocked ? "true" : "false"}</td>
                </tr>
                <tr>
                    <td>Member of UN: </td>
                    <td>{currentDisplay.unMember ? "true" : "false"}</td>
                </tr>
            </table>
        </div>
    );
};

export default Overview;