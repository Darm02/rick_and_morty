import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;

   const cards = characters.map((character) => {
      return (<Card onClose={props.onClose} id = {character.id} name={character.name} species = {character.species} gender = {character.gender} image = {character.image} />);
   });

   return (
   <div className={style.container}>
      {cards}
   </div>
   );
}
