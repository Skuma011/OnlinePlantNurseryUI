import axios from "axios";

const baseUrl = "http://localhost:8585/seeds";

export function addSeed(data) {
  const url = baseUrl + "/add";
  let requestData = {
    commonName: data.commonName,
    bloomTime: data.bloomTime.toString() + " days",
    watering: data.watering,
    difficultyLevel: data.difficultyLevel,
    temparature: data.temparature.toString() + " degrees",
    typeOfSeeds: data.typeOfSeeds,
    seedsDescription: data.seedsDescription,
    seedsStock: data.seedsStock,
    seedsCost: data.seedsCost,
    seedsPerPacket: data.seedsPerPacket,
  };
  console.log("inside addseed service, request data ");
  const promise = axios.post(url, requestData);
  return promise;
}

export function fetchSeedById(seedId) {
  const url = baseUrl + "/fetch/byid/" + seedId;
  const promise = axios.get(url);
  return promise;
}

export function fetchSeedByName(commonName) {
  const url = baseUrl + "/fetch/bycommonname/" + commonName;
  const promise = axios.get(url);
  return promise;
}

export function fetchAll() {
  const url = baseUrl + "/fetch";
  const promise = axios.get(url);
  return promise;
}
export function fetchSeedsByType(typeOfSeeds) {
  const url = baseUrl + "/fetch/bytype/" + typeOfSeeds;
  const promise = axios.get(url);
  return promise;
}

export function updateSeedsStock(data) {
  const url = baseUrl + "/changestock";
  let requestData = {
    seedId: data.seedId,
    seedsStock: data.seedsStock,
  };
  const promise = axios.put(url, requestData);
  return promise;
}
