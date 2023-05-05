import Link from "next/link";

const HomeIntro = () => {
    return (
        <main className='container home-intro section'>
            <div className="">
                <h2 className="">Designez votre zone de confort</h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                <Link href='/products'>
                    <button className="btn">Je D'écouvre</button>
                </Link>
            </div>
            <img src="../../assets/pic-5.jpeg" alt="picture" className="" />

        </main>
    )
}
export default HomeIntro;