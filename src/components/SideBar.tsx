import { Button } from './Button';
import {Dispatch, SetStateAction} from 'react';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface PropsSidebar {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (val: number) => void;
}


export function SideBar(props: PropsSidebar) {

  const setSelectedGenreId = (id: number) => {
    setSelectedGenreId(id);
  }


  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}