"use strict";

const select = document.querySelector(".select");
const carsList = document.querySelector(".carsList");

const getInfo = () => {
	return new Promise (resolve => {
		let cars = {};

		fetch("carsJSON.json")
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			cars = res["cars"];

			let boolean = true;
			for (let group in cars) {
				if (boolean) {
					deleteCar();
					boolean = false;
				}
				createCar(cars[group]["Company1"]);
				createCar(cars[group]["Company2"]);

				const option = document.createElement("OPTION");
				option.textContent = group;
				select.appendChild(option);
			}
			boolean = true;
		})

		select.addEventListener("change", e => {
			const group = select.options[select.selectedIndex].text;
			console.log(cars);
			if (group === "All") {
				let boolean = true;
				for (let gr in cars) {
					if (boolean) {
						deleteCar();
						boolean = false;
					}
					createCar(cars[gr]["Company1"]);
					createCar(cars[gr]["Company2"]);
				}
				boolean = true;
			} else {
				deleteCar();
				createCar(cars[group]["Company1"]);
				createCar(cars[group]["Company2"]);
			}
		})

		resolve("hola");
	})	
}

getInfo();

/*getInfo().then(result => {
	console.log(result);
	setTimeout(()=>console.log(result[0]["Company1"]), 4000)
})*/
const createCar = (company) => {
	const carItem = document.createElement("DIV");
	carItem.classList.add("carItem");
//--------------------------------------------------------
	const carImg = document.createElement("DIV");
	const img = document.createElement("IMG");

	img.src = `${company["PictureURL"]}`;

	carImg.classList.add("carImg");

	carImg.appendChild(img);
//-------------------------------------------------------
	const carDetails = document.createElement("DIV");
	
	const details = document.createElement("DIV");
	const category = document.createElement("H2");
	const group = document.createElement("H5");
	const name = document.createElement("H5");
	const button = document.createElement("BUTTON");
	const imgButton = document.createElement("IMG");
	const textButton = document.createElement("P");

	category.textContent = `${company["Features2"]["category"]}`;
	group.textContent = `GROUP ${company["VehGroup"]} (${company["Code"]})`;
	name.textContent = `${company["Name"]}`.toUpperCase();
	imgButton.src = "okey.png";
	textButton.textContent = "Book now!";

	carDetails.classList.add("carDetails");

	details.appendChild(category);
	details.appendChild(group);
	details.appendChild(name);
	button.appendChild(imgButton);
	button.appendChild(textButton);

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
	const textSeats = document.createElement("P");
	const textLSuitcase = document.createElement("P");
	const textSSuitcase = document.createElement("P");
	const textDoors = document.createElement("P");
	const textTransmission = document.createElement("P");
	const textAir = document.createElement("P");

	characteristics.textContent = "CHARACTERISTICS";
	textSeats.textContent = `${company["Features2"]["seats"]} seats`;
	textLSuitcase.textContent = `${company["Features2"]["largeSuitcase"]} large suitcase`;
	textSSuitcase.textContent = `${company["Features2"]["smallSuitcase"]} small suitcase`;
	textDoors.textContent = `${company["Features2"]["doors"]} doors`;
	textTransmission.textContent = `${company["Features2"]["transmition"]} transmission`;
	textAir.textContent = `${company["Features2"]["air"]}`;
	imgSeats.src = "assets/images/seats.svg";
	imgLSuitcase.src = "assets/images/luggage.svg";
	imgSSuitcase.src = "assets/images/bag.svg";
	imgDoors.src = "assets/images/door.svg";
	imgTransmission.src = "assets/images/transmision.svg";
	imgAir.src = "assets/images/air-conditioning.svg";

	carCharact.classList.add("carCharact");

	seats.appendChild(imgSeats);
	lSuitcase.appendChild(imgLSuitcase);
	sSuitcase.appendChild(imgSSuitcase);
	doors.appendChild(imgDoors);
	transmission.appendChild(imgTransmission);
	air.appendChild(imgAir);

	seats.appendChild(textSeats);
	lSuitcase.appendChild(textLSuitcase);
	sSuitcase.appendChild(textSSuitcase);
	doors.appendChild(textDoors);
	transmission.appendChild(textTransmission);
	air.appendChild(textAir);

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
	carRates.classList.add("carRates");

	const availRates = document.createElement("H4");
	availRates.textContent = "AVAILABLE RATES";
	const listRates = document.createElement("UL");

	let rates = company["Rates"];
	let arrayRates = [];
	for (let rate in rates) {
		console.log(rate);
		let name = rates[`${rate}`]["RateData"]["name"];
		console.log(name);
		arrayRates.push(`${rate} - ${name}`);
	}
	
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < arrayRates.length; i++) {
		const rate = document.createElement("LI");
		const labRate = document.createElement("LABEL");
		const inpRate = document.createElement("INPUT");
		const textRate = document.createElement("P");
		const pRate = document.createElement("P");
		const divRate = document.createElement("DIV");
		const typeCurrency = document.createElement("P");
		const valueCurrency = document.createElement("P");

		textRate.textContent = `${arrayRates[i]}`;
		pRate.textContent = "Rate Inclusions";
		typeCurrency.textContent = "USD";
		valueCurrency.textContent = "725";
		inpRate.type = "radio";
		inpRate.name = "tipo";

		labRate.appendChild(inpRate);
		labRate.appendChild(textRate);
		divRate.appendChild(typeCurrency);
		divRate.appendChild(valueCurrency);

		rate.appendChild(labRate);
		rate.appendChild(pRate);
		rate.appendChild(divRate);

		fragment.appendChild(rate);

		pRate.addEventListener("click", () => {
			modalRateInclusions();
		})
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

const deleteCar = () => {
	let carsArray = document.querySelectorAll(".carsList > .carItem");
	if (carsArray.length !== 0) {
		for (let i = 0; i < carsArray.length; i++) {
			carsList.removeChild(carsArray[i]);
		}
	} else {
		console.log("Nothing");
	}
}

const modalRateInclusions = () => {

}