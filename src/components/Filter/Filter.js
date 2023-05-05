const Filter = () => {
    const category = ['Tous', 'salon', 'cuisine', 'chambre', 'jardin', 'garage'];
    const setActive = (id) => {
        const lists = document.getElementsByClassName('list');
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].classList.contains('active'))
                lists[i].classList.remove('active');
        }
        document.getElementById(id).classList.add('active');
    }
    return (
        <main className="filter">
            <input type="text" placeholder="recherche un produit" />
            <div>
                <h3>category</h3>
                <ul>
                    {category.map((cat, index) => {
                        return (
                            <li className={`list ${index === 0 ? 'active' : ''}`} id={`list${index}`} key={index} onClick={() => setActive(`list${index}`)}>{cat}</li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}
export default Filter;