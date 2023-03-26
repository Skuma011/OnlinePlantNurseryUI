export default function DisplayPlant({ plant }) {

    return (
        <div>
            <table className="table table-striped w-50">
                <tbody>
                    <tr>
                        <th>Common Name</th>
                        <td>{plant.commonName}</td>
                    </tr>
                    <tr>
                        <th>Plant Height</th>
                        <td>{plant.plantHeight} cm</td>
                    </tr>
                    <tr>
                        <th>Plant Spread</th>
                        <td>{plant.plantSpread}</td>
                    </tr>
                    <tr>
                        <th>Bloom Time</th>
                        <td>{plant.bloomTime}</td>
                    </tr>
                    <tr>
                        <th>Medicinal or Culinary Use</th>
                        <td>{plant.medicinalOrCulinaryUse}</td>
                    </tr>
                    <tr>
                        <th>Difficulty Level</th>
                        <td>{plant.difficultyLevel}</td>
                    </tr>
                    <tr>
                        <th>Temperature</th>
                        <td>{plant.temperature}</td>
                    </tr>
                    <tr>
                        <th>Type of Plant</th>
                        <td>{plant.typeOfPlant}</td>
                    </tr>
                    <tr>
                        <th>Plant Description</th>
                        <td>{plant.plantDescription}</td>
                    </tr>
                    <tr>
                        <th>Plant Stock</th>
                        <td>{plant.plantsStock}</td>
                    </tr>
                    <tr>
                        <th>Plant Cost</th>
                        <td>{plant.plantCost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}