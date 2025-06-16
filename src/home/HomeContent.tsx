export default function ContentHome() {
    const imageClasses = "w-full h-full object-fill rounded-xl shadow-md";
    
    return (
        <article className="flex justify-center mt-10">
            <div className="w-full max-w-[1300px]">
                <div className="grid grid-cols-3 gap-4 h-[433px]">
                    {/* Main promotion image */}
                    <div className="col-span-2 row-span-2">
                        <img
                            src="/ComputerPicturebor/Pic1.jpg"
                            alt="Notebook Promotion"
                            className={imageClasses}
                        />
                    </div>
                    
                    {/* Monitor promotion */}
                    <div className="h-[271px]">
                        <img
                            src="/ComputerPicturebor/Pic2.jpg"
                            alt="Monitor Promotion"
                            className={imageClasses}
                        />
                    </div>
                    
                    {/* Gaming gear promotion */}
                    <div className="h-[271px]">
                        <img
                            src="/ComputerPicturebor/Pic3.jpg"
                            alt="Gaming Gear Promotion"
                            className={imageClasses}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}