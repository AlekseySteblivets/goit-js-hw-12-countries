
export default function fetchCountries(searchQuery) {
   return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(res => {
    if(!res.ok) {
        throw res;
    }
    return res.json();
});
}



// КАК СХОДИТЬ  НА СЕРВЕР И ПОЛУЧИТЬ ДАННЫЕ
// const country = fetch('https://restcountries.eu/rest/v2/name/Switzerland').then(res => {
//     if(!res.ok) {
//         throw res;
//     }
//     return res.json()
// }).then(country => 
//     {
//     const markUp = countryCard(country);
//     console.log(markUp);
//     refs.cardContainer.innerHTML = markUp;

//     })
// .catch(error => {console.log(error);});
// console.log(country);

// Читаем так - пойди скоди принеси fetch('https://restcountries.eu/rest/v2/name/Botswana')
// когда принесешь попробуй распарсить .then(res => {return res.json()}) - это возвращает еще один промис
//   !!!! на прототипе есть json для, blob -видео, аудио  и картинка. text - для табличных данных(csv)!!!
// если все ок, то выполняй .then(country => {console.log(country)});
// если не ок, то выполняй catch(error => { console.log(error);})
// ЭТО МЫ СХОДИЛИ НА СЕРВЕР И ПОЛУЧИЛИ ДАННЫЕ

// фетч обрабатывает ошибку только через  if(!res.ok) {throw res;} поэтому  впервом then так и пишем
