import React, {useContext, useState} from 'react'
import style from './StoryForm.module.css'
import MyRadio from "../../UI/MyRadio/MyRadio";
import {LanguageContext} from "../../context/LanguageContext";
import {useTranslation} from "react-i18next";

function StoryForm() {
    const [genre, setGenre] = useState('');
    const [character, setCharacter] = useState('');
    const [characters, setCharacters] = useState([]);
    const { t } = useTranslation();
    const { lang, toggleLanguage } = useContext(LanguageContext);

    const addCharacter = (name = '', description = '', templateId = null) => {
        if (!templateId) {
            const characterName = character.trim();
            if (!characterName) return;

            setCharacters(prev => [
                ...prev,
                { id: crypto.randomUUID(), name: characterName, description, templateId: null }
            ]);

            setCharacter('');
            return;
        }

        setCharacters(prev => [
            ...prev,
            { id: crypto.randomUUID(), templateId }
        ]);
    };

    const removeCharacter = (id) => {
        setCharacters(prev => prev.filter(c => c.id !== id));
    };

    const templates = [
        {
            id: 'heroine',
            name: { en: 'Emma', ua: 'Емма' },
            description: {
                en: 'Strong-willed and compassionate. She stands up for what she believes in and never abandons the people she cares about.',
                ua: 'Сильна духом і співчутлива. Вона відстоює те, у що вірить, і ніколи не покидає дорогих їй людей.'
            }
        },
        {
            id: 'villain',
            name: { en: 'Dorian', ua: 'Доріан' },
            description: {
                en: 'Cold, intelligent and manipulative antagonist. Charismatic but ruthless, always planning three steps ahead.',
                ua: 'Холодний, розумний і хитрий. Харизматичний, але безжальний, завжди планує на кілька кроків уперед.'
            }
        },
        {
            id: 'comic',
            name: { en: 'Luna', ua: 'Луна' },
            description: {
                en: 'Cheerful and witty optimist who brings humor to any situation. Loyal friend with a surprisingly sharp mind.',
                ua: 'Весела та дотепна оптимістка, яка додає гумору в будь-яку ситуацію. Вірна подруга з несподівано гострим розумом.'
            }
        },
        {
            id: 'mysterious',
            name: { en: 'Ethan', ua: 'Ітан' },
            description: {
                en: 'Quiet and enigmatic loner with a hidden past. Observant, calm, and far more powerful than they appear.',
                ua: 'Тихий та загадковий одинак із прихованим минулим. Спостережливий, спокійний і значно могутніший, ніж здається.'
            }
        }
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
                    <div className={style.inputRow}>
                        <input className={style.formInput} id='character' type="text" placeholder="character name"
                               value={character} onChange={(e) => setCharacter(e.target.value)}/>
                        <button className={style.add} onClick={addCharacter}>Add+</button>
                    </div>
                    <p className={style.option}>or you can choose one of this:</p>
                    <div className={style.template}>
                        <div className={style.template}>
                            {templates.map(t => {
                                const isSelected = characters.some(c => c.templateId === t.id);
                                return (
                                    <button
                                        key={t.id}
                                        type="button"
                                        className={isSelected ? style.selected : style.person}
                                        onClick={() => {
                                            if (!isSelected) {
                                                addCharacter('', '', t.id)
                                            }
                                        }}
                                    >
                                        <div className={style.checkbox}>{isSelected && <i className='bx bx-check'></i>}</div>
                                        <div className={style.personContent}>
                                            <p className={style.personName}>{t.name[lang]}</p>
                                            <hr />
                                            <p className={style.personDesc}>{t.description[lang]}</p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={style.characters}>
                        {characters.map(c => {
                            const template = c.templateId ? templates.find(t => t.id === c.templateId) : null;
                            const name = template ? template.name[lang] : c.name;
                            const description = template ? template.description[lang] : c.description;

                            return (
                                <button key={c.id} onClick={() => removeCharacter(c.id)} className={style.character}>
                                    {name} <i className='bx bx-x'></i>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <button className={style.create}>Create</button>
            </form>
        </div>
    )
}

export default StoryForm
