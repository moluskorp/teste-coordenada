import axios from 'axios'

interface Coordenada {
  latitude: number
  longitude: number
}

async function getCoordenada(origem: Coordenada, destino: Coordenada) {
  const url = `https://router.project-osrm.org/route/v1/driving/${origem.longitude},${origem.latitude};${destino.longitude},${destino.latitude}?overview=full`
  const result = await axios.get(url)

  const { distance, duration } = result.data.routes[0]
  return { distance, duration }
}

getCoordenada(
  {
    latitude: -21.1492641,
    longitude: -47.8064878,
  },
  { latitude: -21.1915333, longitude: -47.8260488 },
).then(({ distance, duration }) => {
  console.log('Distance: ', distance / 1000, 'km')
  console.log('Duration: ', duration, 'seconds')
})
