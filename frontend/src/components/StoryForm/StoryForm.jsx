import React, {useState} from 'react'
import style from './StoryForm.module.css'
import MyRadio from "../../UI/MyRadio/MyRadio";

function StoryForm() {
    const [genre, setGenre] = useState('');
    const [character, setCharacter] = useState('');
    const [characters, setCharacters] = useState([]);

    const addCharacter = (name, description = '') => {
        const characterName = typeof name === 'string' ? name.trim() : character.trim();

        if (!characterName) return;

        setCharacters(prev => [
            ...prev,
            { id: crypto.randomUUID(), name: characterName, description }
        ]);

        setCharacter('');
    };

    const removeCharacter = (id) => {
        setCharacters(prev => prev.filter(c => c.id !== id));
    };

    const templates = [
        {
            name: 'Dorian',
            description: 'A tall, handsome man with long hair. But there are rumors that his soul belongs to a demon.'
        },
        {name: 'Luna', description: 'A mysterious young woman who always appears at night.'},
        {name: 'Ezra', description: 'A clever inventor with a mischievous smile.'}
    ];

    const genres = [
        "Romance",
        "Drama",
        "Comedy",
        "Action",
        "Adventure",
        "Fantasy",
        "Horror",
        "Mystery",
        "Thriller",
        "Sci-Fi",
        "Detective",
        "Psychological"
    ];

    return (
        <div className={style.storyForm}>
            <form onSubmit={(e) => {
                e.preventDefault();
                addCharacter();
            }} className={style.form} action="">
                <div className={style.topForm}>
                    <div className={style.formElement}>
                        <label className={style.formTitle} htmlFor='title'>Title</label>
                        <input className={style.formInput} placeholder='title' id='title' type="text"/>
                    </div>
                    <div className={style.formElement}>
                        <label className={style.formTitle} htmlFor="fandom">Fandom</label>
                        <input className={style.formInput} placeholder='fandom' type="text" id='fandom'/>
                    </div>

                </div>

                <div className={style.middleForm}>
                    <p className={style.formTitle}>Genre</p>
                    <div className={style.genresBox}>{genres.map(e => (
                        <MyRadio key={e} name='genre' id={e} value={e} checked={genre === e}
                                 onChange={() => setGenre(e)}/>))}</div>
                </div>


                <div className={style.bottomForm}>
                    <label className={style.formTitle} htmlFor="character">Characters</label>
                    <br/>
                    <input className={style.formInput} id='character' type="text" placeholder="character name"
                           value={character} onChange={(e) => setCharacter(e.target.value)}/>
                    <button className={style.add} onClick={addCharacter}>Add+</button>
                    <p className={style.option}>or you can choose one of this:</p>
                    <div className={style.template}>
                        <div className={style.template}>
                            {templates.map(t => {
                                const isSelected = characters.some(c => c.name === t.name);
                                return (
                                    <button
                                        key={t.name}
                                        type="button"
                                        className={`${style.person} ${isSelected ? style.selected : ''}`}
                                        onClick={() => addCharacter(t.name, t.description)}
                                    >
                                        <div className={style.checkbox}>{isSelected && <i class='bx bx-check'></i>}</div>
                                        <div className={style.personContent}>
                                            <p className={style.personName}>{t.name}</p>
                                            <hr />
                                            <p className={style.personDesc}>{t.description}</p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={style.characters}>
                        {characters.map(e => (
                            <button onClick={() => {
                                removeCharacter(e.id)
                            }} key={e.id} className={style.character}>
                                {e.name} <i className='bx bx-x'></i>
                            </button>))}
                    </div>
                </div>

                <button className={style.create}>Create</button>
            </form>
        </div>
    )
}

export default StoryForm
