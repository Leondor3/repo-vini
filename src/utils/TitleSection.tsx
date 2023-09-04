const SectionTitle = ({
    title,
    paragraph,
    left,
}: {
    title: string;
    paragraph: string;
    left?: boolean;
}) => {

    return (
        <>
            <div
                className={`w-full ${left ? "mx-auto text-left" : ""}`}
                data-wow-delay=".1s"
            >
                <span>{paragraph}</span>
                <h2
                    className={`text-5xl font-bold !leading-tight max-sm:text-3xl max-md:text-[45px] text-white`}
                >
                    {title}
                </h2>
            </div>
        </>
    );
};

export default SectionTitle;