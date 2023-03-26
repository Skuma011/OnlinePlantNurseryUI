/**
 * Display seed details
 */

export default function DisplaySeedDetails({ seed }) {
  return (
    <div>
      seedId is {seed.seedId}
      <br />
      commonName is {seed.commonName}
      <br />
      bloomTime is {seed.bloomTime}
      <br />
      watering is {seed.watering}
      <br />
      difficultyLevel is {seed.difficultyLevel}
      <br />
      temparature is {seed.temparature}
      <br />
      typeOfSeeds is {seed.typeOfSeeds}
      <br />
      seedsDescription is {seed.seedsDescription}
      <br />
      seedsStock is {seed.seedsStock}
      <br />
      seedsCost is {seed.seedsCost}
      <br />
      seedsPerPacket is {seed.seedsPerPacket}
    </div>
  );
}
