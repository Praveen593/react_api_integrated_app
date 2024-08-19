export const exerciseOption = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
}
}
export const fetchData =async(URL, Option) =>
{
    const response =await fetch(URL , Option);
    const data = await response.json();
    return data;

}