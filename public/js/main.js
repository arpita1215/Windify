const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;

    if (cityval === '') {
        city_name.innerText = `Please write the name of city`;
        datahide.classList.add('data_hide');


    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=86767e825301054a74e0d4190add9a5a`;
            //let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=eed4177bde0a0b620d1ae90a1d5b097f`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            console.log(data);

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Please Enter Proper City Name `;
            datahide.classList.add('data_hide');
        }

    }




}

submitBtn.addEventListener('click', getInfo);
