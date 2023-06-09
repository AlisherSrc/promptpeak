import Feed from "@components/Feed";


const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share 
                <br className="" />
                <span className="light_blue_gradient text-center">
                    AI-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Discover Limitless Inspiration with PromptHub: 
                The Ultimate AI Prompting Tool
            </p>

            <Feed />
        
        </section>
    )
}

export default Home;