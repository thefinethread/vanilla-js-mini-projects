const global = {
    API_KEY: '5c3cd92393a20c82ba493dd9',
    API_URL: 'https://v6.exchangerate-api.com/v6',
    DEFAULT_CURR_1: 'USD',
    DEFAULT_CURR_2: 'INR',
};

const selectEls = document.querySelectorAll('select');
const firstCurrency = document.querySelector('#first-currency');
const secondCurrency = document.querySelector('#second-currency');
const exchangeRate = document.querySelector('.exchange-rate');
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const swap = document.getElementById('swap');
const firstSelect = document.querySelector('#first-select');
const secondSelect = document.querySelector('#second-select');

const popularCurrencyMap = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['JPY', 'Japanese Yen'],
    ['GBP', 'British Pound Sterling'],
    ['AUD', 'Australian Dollar'],
    ['CAD', 'Canadian Dollar'],
    ['CHF', 'Swiss Franc'],
    ['CNY', 'Chinese Yuan'],
    ['SEK', 'Swedish Krona'],
    ['NZD', 'New Zealand Dollar'],
    ['INR', 'Indian Rupee'],
    ['SGD', 'Singapore Dollar'],
    ['HKD', 'Hong Kong Dollar'],
    ['ZAR', 'South African Rand'],
    ['AED', 'United Arab Emirates Dirham'],
    ['BRL', 'Brazilian Real'],
    ['MXN', 'Mexican Peso'],
    ['RUB', 'Russian Ruble'],
    ['KRW', 'South Korean Won'],
    ['TRY', 'Turkish Lira'],
]);

// utility methods
getExchangeRate = async (first, second) => {
    const res = await fetch(
        `${global.API_URL}/${global.API_KEY}/pair/${first}/${second}`
    );
    return await res.json();
};

displayExchangeRate = (data) => {
    exchangeRate.innerText = `1 ${
        data.base_code
    } = ${data.conversion_rate.toFixed(2)} ${data.target_code}`;
};

calculate = (baseValue) => {
    const exRate = exchangeRate.innerText.substring(8, 13);
    const convertedValue = (baseValue * exRate).toFixed(2);
    return convertedValue;
};

displayConvertedValueInSecondInput = (e) => {
    const exRate = exchangeRate.innerText.substring(8, 13);
    const convertedValue = (e.target.value * exRate).toFixed(2);
    input2.value = convertedValue;
    console.log(convertedValue);
};

displayConvertedValueInFirstInput = (e) => {
    const exRate = exchangeRate.innerText.substring(8, 13);
    const convertedValue = (e.target.value / exRate).toFixed(2);
    input1.value = convertedValue;
};

showDefaultRates = async () => {
    const data = await getExchangeRate(
        global.DEFAULT_CURR_1,
        global.DEFAULT_CURR_2
    );
    displayExchangeRate(data);
};

onChangeFirstSelect = async (e) => {
    const data = await getExchangeRate(
        e.target.value,
        selectEls[1].value.trim()
    );
    displayExchangeRate(data);
};

onChangeSecondSelect = async (e) => {
    const data = await getExchangeRate(
        selectEls[0].value.trim(),
        e.target.value
    );
    displayExchangeRate(data);
};

swapCurrencies = async () => {
    // using destructuring to swap values [a, b]  = [b, a]
    [firstSelect.value, secondSelect.value] = [
        secondSelect.value,
        firstSelect.value,
    ];
    const data = await getExchangeRate(firstSelect.value, secondSelect.value);
    displayExchangeRate(data);

    // show converted value in second input
    input2.value = (input1.value * data.conversion_rate).toFixed(2);
};

// render select options
renderSelectOptions = () => {
    selectEls.forEach((select) => {
        let result = '';
        popularCurrencyMap.forEach((key, value) => {
            if (
                value === global.DEFAULT_CURR_1 &&
                select.parentElement.classList.contains('first-row')
            ) {
                result += `<option value="${value}" selected>${key}</option>`;
            } else if (
                value === global.DEFAULT_CURR_2 &&
                select.parentElement.classList.contains('third-row')
            ) {
                result += `<option value="${value}" selected>${key}</option>`;
            } else {
                result += `<option value="${value}">${key}</option>`;
            }
        });
        select.innerHTML = result;
    });
    showDefaultRates();
};

// event listeners
selectEls.forEach((select) => {
    select.parentElement.className === 'first-row'
        ? select.addEventListener('change', onChangeFirstSelect)
        : select.addEventListener('change', onChangeSecondSelect);
});

input1.addEventListener('keyup', displayConvertedValueInSecondInput);
input2.addEventListener('keyup', displayConvertedValueInFirstInput);

swap.addEventListener('click', swapCurrencies);

window.addEventListener('DOMContentLoaded', renderSelectOptions);
