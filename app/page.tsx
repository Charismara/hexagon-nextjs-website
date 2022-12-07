import BackgroundImage from 'public/background_shop.jpg'

export default function Home() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url("${BackgroundImage.src}")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">TITLE</h1>
                    <p className="mb-5">BLA - BLA</p>
                    <button className="btn btn-primary">Join hexagonmc.eu Today</button>
                </div>
            </div>
        </div>
    )
}
