import axios from 'axios';

const baseUrl = "http://localhost:8585/plants";

// method to add plant object to database
function addPlant(data){
    const url = baseUrl+"/add";
    let requestData = {
        plantHeight: data.plantHeight,
        plantSpread: data.plantSpread.toString()+" cm",
        commonName: data.commonName,
        bloomTime: data.bloomTime.toString()+" weeks",
        medicinalOrCulinaryUse: data.plantUse,
        difficultyLevel: data.difficultyLevel,
        temperature: data.temperature.toString()+" deg",
        typeOfPlant: data.typeOfPlant,
        plantDescription: data.plantDescription,
        plantsStock: data.plantStock,
        plantCost: data.plantCost
    };
    const promise = axios.post(url, requestData);
    return promise;
}

// method to fetch a plant object by name from the database
function getPlantByName(commonName){
    const url=baseUrl+"/fetch/byname/"+commonName;
    const promise = axios.get(url);
    return promise;
}

// method to fetch plant objects of a particular type from the database
function getPlantsByType(typeOfPlant){
    const url=baseUrl+"/fetch/bytype/"+typeOfPlant;
    const promise = axios.get(url);
    return promise;
}

// method to fetch all plant objects from the database
function getAllPlants(){
    const url=baseUrl+"/fetch";
    const promise = axios.get(url);
    return promise;
}

// method to update plant stock in the database
function updateStock(data){
    const url=baseUrl+"/updatestock";
    let requestData={
        plantId:data.plantId,
        plantsStock:data.plantStock
    };
    const promise = axios.put(url, requestData);
    return promise;
}

export {addPlant, getPlantByName, getPlantsByType, getAllPlants, updateStock};