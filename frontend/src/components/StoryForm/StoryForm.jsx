import React, {useState} from 'react'
import style from './StoryForm.module.css'
import MyRadio from "../../UI/MyRadio/MyRadio";

function StoryForm() {
    const [genre , setGenre] = useState('');
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
            <form className={style.form} action="">
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
                        <MyRadio key={e} name='genre' id={e} value={e}/>))}</div>
                </div>



                <div className={style.bottomForm}>
                    <label className={style.formTitle} htmlFor="character">Characters</label>
                    <br/>
                    <input className={style.formInput} id='character' type="text" placeholder="character name"/>
                    <button className={style.add}>Add+</button>
                </div>

                <button className={style.create}>Create</button>
            </form>
        </div>
    )
}

export default StoryForm
