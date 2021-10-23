export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    console.log(error);
    if (code === 400 || code === 404 || code === 500) {
      redirect('/error');
    }
  })
}