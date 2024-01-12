import React from 'react'

export default function ProfilPosts({userId = null, isPrivate = false}={}) {
    return (
        <>
            <div className="YourContributions flex flex-col">
                <div className="my-5 title text-skin-text100 text-xl font-bold">Your Contributions</div>
                <div className="posts flex flex-col">
                    <div className="dummyWatchMoreCard border border-white font-sans font-bold text-skin-text100 text-lg w-full h-32">Dummy</div>
                    <br />
                    <div className="dummyWatchMoreCard border border-white font-sans font-bold text-skin-text100 text-lg w-full h-32">Dummy</div>
                    <br />
                    <div className="dummyWatchMoreCard border border-white font-sans font-bold text-skin-text100 text-lg w-full h-32">Dummy</div>
                    <br />
                </div>

            </div>
        </>
    )
}
