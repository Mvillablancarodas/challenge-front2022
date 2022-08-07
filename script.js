"use strict";

const carsList = document.querySelector(".container__carsList");

const createCar = () => {
	const carItem = document.createElement("DIV");
//--------------------------------------------------------
	const carImg = document.createElement("DIV");
	const img = document.createElement("IMG");

	img.src = "2020-kia-rio-s-sedan-grey_featured.webp";

	carImg.appendChild(img);
//-------------------------------------------------------
	const carDetails = document.createElement("DIV");
	
	const details = document.createElement("DIV");
	const category = document.createElement("H2");
	const group = document.createElement("H5");
	const name = document.createElement("H5");
	const button = document.createElement("BUTTON");
	const imgButton = document.createElement("IMG");
	
	category.textContent = "Economy";
	group.textContent = "GROUP A (ECAR)";
	name.textContent = "KIA RIO OR SIMILAR";
	imgButton.src = "okey.png";
	button.textContent = "Book now!";

	details.appendChild(category);
	details.appendChild(group);
	details.appendChild(name);
	button.appendChild(imgButton);

	carDetails.appendChild(details);
	carDetails.appendChild(button);
//------------------------------------------------------
	const carCharact = document.createElement("DIV");
	
	const characteristics = document.createElement("H4");
	const listCharact = document.createElement("UL");
	const seats = document.createElement("LI");
	const lSuitcase = document.createElement("LI");
	const sSuitcase = document.createElement("LI");
	const doors = document.createElement("LI");
	const transmission = document.createElement("LI");
	const air = document.createElement("LI");
	const imgSeats = document.createElement("IMG");
	const imgLSuitcase = document.createElement("IMG");
	const imgSSuitcase = document.createElement("IMG");
	const imgDoors = document.createElement("IMG");
	const imgTransmission = document.createElement("IMG");
	const imgAir = document.createElement("IMG");

	characteristics.textContent = "CHARACTERISTICS";
	seats.textContent = "5 seats";
	lSuitcase.textContent = "1 large suitcase";
	sSuitcase.textContent = "1 small suitcase";
	doors.textContent = "4 doors";
	transmission.textContent = "Automatic transmission";
	air.textContent = "Air Conditioning";
	imgSeats.src = "assets/images/seats.svg";
	imgLSuitcase.src = "assets/images/luggage.svg";
	imgSSuitcase.src = "assets/images/bag.svg";
	imgDoors.src = "assets/images/door.svg";
	imgTransmission.src = "assets/images/transmision.svg";
	imgAir.src = "assets/images/air-conditioning.svg";

	seats.appendChild(imgSeats);
	lSuitcase.appendChild(imgLSuitcase);
	sSuitcase.appendChild(imgSSuitcase);
	doors.appendChild(imgDoors);
	transmission.appendChild(imgTransmission);
	air.appendChild(imgAir);

	listCharact.appendChild(seats);
	listCharact.appendChild(lSuitcase);
	listCharact.appendChild(sSuitcase);
	listCharact.appendChild(doors);
	listCharact.appendChild(transmission);
	listCharact.appendChild(air);

	carCharact.appendChild(characteristics);
	carCharact.appendChild(listCharact);
//------------------------------------------------------
	const carRates = document.createElement("DIV");

	const availRates = document.createElement("H4");
	availRates.textContent = "AVAILABLE RATES";
	const listRates = document.createElement("UL");

	const arrayRates = [
	"  Manual transmission",
	"  5 seats",
	"  Convertibles",
	"  Automatic transmission",
	"  7 seats or more"
	];
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < arrayRates.length; i++) {
		const rate = document.createElement("LI");
		const labRate = document.createElement("LABEL");
		const inpRate = document.createElement("INPUT");
		const pRate = document.createElement("P");
		const divRate = document.createElement("DIV");
		const typeCurrency = document.createElement("P");
		const valueCurrency = document.createElement("P");

		labRate.textContent = `${arrayRates[i]}`;
		pRate.textContent = "Rate Inclusions";
		typeCurrency.textContent = "USD";
		valueCurrency.textContent = "725";
		inpRate.type = "radio";
		inpRate.name = "tipo";

		labRate.appendChild(inpRate);
		divRate.appendChild(typeCurrency);
		divRate.appendChild(valueCurrency);

		rate.appendChild(labRate);
		rate.appendChild(pRate);
		rate.appendChild(divRate);

		fragment.appendChild(rate);
	}

	listRates.appendChild(fragment);

	carRates.appendChild(availRates);
	carRates.appendChild(listRates);
//------------------------------------------------------
	carItem.appendChild(carImg)	;
	carItem.appendChild(carDetails);
	carItem.appendChild(carCharact);
	carItem.appendChild(carRates);

	carsList.appendChild(carItem);
}

createCar();