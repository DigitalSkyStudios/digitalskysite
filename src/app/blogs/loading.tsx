const Loading = () => (
    <div className="max-w-3xl mx-auto">
    {
        Array.from(Array(5).keys()).map(item => {
            return (
                <div key={item} className="w-full h-44 border-2 rounded-md mx-auto mt-20">
                    <div className="flex flex-col gap-5 animate-pulse h-full p-4 justify-center">
                        <div className="w-4/5 bg-gray-300 h-5 rounded-sm" />
                        <div className="w-full bg-gray-300 h-5 rounded-sm" />
                        <div className="flex gap-5">
                            <div className="w-20 bg-gray-300 h-5 rounded-sm" />
                            <div className="w-20 bg-gray-300 h-5 rounded-sm" />
                        </div>
            
                    </div>
                </div >
            )
        })
        }
        </div>
)

export default Loading;