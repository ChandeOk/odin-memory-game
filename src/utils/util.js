import { nanoid } from 'nanoid';
const getChampionData = (name) => ({
  url: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`,
  name: name,
  id: nanoid(),
});

export default getChampionData;
