ageBtn.onclick = function () {
	ageOutput.value = age(ageInput.value)
}

function age(Input) {
	if (Input <= 11) {
		message = ('you are a child');
	}
	else if (Input <= 17) {
		message = ('you are a teenager');
	}
	else if (Input <= 59) {
		message = ('you are an adult');
	}
	else if (Input <= 110) {
		message = ('time to retire');
	}

	else {
		message = ('please enter your age correctly');
	}
	return message;
}
age();


specialSymbolBtn.onclick = function () {
	specialSymbolOutput.value = specialSymbol(specialSymbolInput.value);
}
function specialSymbol() {

	switch (specialSymbolInput.value) {

		case '0': result = ')';
			break;
		case '1': result = '!';
			break;
		case '2': result = '@';
			break;
		case '3': result = '#';
			break;
		case '4': result = '$';
			break;
		case '5': result = '%';
			break;
		case '6': result = '^';
			break;
		case '7': result = '&';
			break;
		case '8': result = '*';
			break;
		case '9': result = '(';
			break;
		default: result = 'enter the correct number (0-9)';
	};
	return result;
}


palindromBtn.onclick = function () {
	palindromOutput.value = checkPalindrom(palindromInput.value);
}

function checkPalindrom() {
	let numb = [...palindromInput.value].reverse();

	if (numb.join('') === palindromInput.value) {
		result = ('it is a palindrome');
	} else {
		result = ('it is not a palindrome');
	}
	return result;
}
checkPalindrom();



discountBtn.onclick = function () {
	discountOutput.value = discount(discountInput.value);
}

function discount() {
	let total = discountInput.value;
	let outcome;
	if (total > 200 && total < 300) {
		outcome = ((total - (total * 0.03)));
	}
	else if (total > 300 && total < 500) {
		outcome = ((total - (total * 0.05)));
	}
	else if (total > 500) {
		outcome = ((total - (total * 0.07)));
	}
	else {
		outcome = ('you dont have a discount');
	}
	return outcome;
}
discount()


weekdayBtn.onclick = function () {
	weekdayOutput.value = getNextWeekDay(weekdayOutput.value);
}

function getNextWeekDay(day) {
	const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
	const i = weekdays.indexOf(day) + 1;
	return weekdays[i]
}
getNextWeekDay('Tuesday');



for (let i = 1; i < 11; i++) {
	for (let k = 2; k < 10; k++) {
		const resultof = i * k;
		console.log(i + ' ' + '*' + ' ' + k + ' ' + '=' + ' ' + resultof);
	}
};


