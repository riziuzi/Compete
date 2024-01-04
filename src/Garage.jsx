import React from 'react'
// Story of sticky:
// the div which is sticky should have two things, height (e.g. h-[100vh]) and a top-0 (these 0, 24, 28 are from the top point of the view) CSSLayerStatementRule, which makes it sticky on the top till the parent is in view, else it will become sticky to HTML document
export default function Garage() {
  return (
    <>
      <div className="maincontainer flex flex-col w-full border border-red-600">
        <div className="header flex p-2 w-full border h-[80px] border-red-600">
          <img src="./img/img_logodark.svg" alt="" className="Logo h-16 w-auto border border-red-600  ml-32" />
        </div>
        <div className="hero h-[calc(100vh-82px-40px)] bg-[url(../public/imgHome/starsHome.svg)] flex justify-center items-center">
          <img src="./imgHome/EarthIconHome.svg" alt="" className="EarthIconHome" />
          <div className="dummy flex flex-col h-32 border border-red-600 justify-between items-center">
            <div className="tagline border border-red-600">The free and effective way to learn!</div>
            <dic className="userAuthButtons border border-red-600 flex flex-col justify-center items-center">
              <button className="GetStarted  my-1 bg-slate-600 w-full rounded-xl">GET STARTED</button>
              <button className="GetStarted  my-1 bg-slate-600 w-full rounded-xl">I ALREADY HAVE AN ACCOUNT</button>
            </dic>
          </div>
        </div>
        <div className="navigation flex h-[40px] border border-red-600 justify-center">
          <a href="/journalai" className="JournalAi">JournalAi</a>
          <a href="/resource" className="Resources">Resources</a>
          <a href="/about" className="About">About</a>
        </div>
        <div className="Why flex flex-col">
          <div className="columns flex justify-center items-center">
            <div className="col1 flex flex-col">
              <div className="Effective flex items-start">
                <div className="emoji">F</div>
                <div className="content flex flex-col">
                  <div className="title">Effective and efficient</div>
                  <div className="message">Experience the power of focused learning; MindScape India streamlines your UPSC preparation, making it not just effective but exceptionally efficient</div>
                </div>
              </div>
              <div className="Effective flex items-start">
                <div className="emoji">F</div>
                <div className="content flex flex-col">
                  <div className="title">Effective and efficient</div>
                  <div className="message">Experience the power of focused learning; MindScape India streamlines your UPSC preparation, making it not just effective but exceptionally efficient</div>
                </div>
              </div>
            </div>
            <div className="col2">
              <img src="./imgHome/WhyIllustrationHome.svg" alt="" className="WhyIllustrationHome" />
            </div>
            <div className="col3">
              <div className="Effective flex items-start">
                <div className="emoji">F</div>
                <div className="content flex flex-col">
                  <div className="title">Effective and efficient</div>
                  <div className="message">Experience the power of focused learning; MindScape India streamlines your UPSC preparation, making it not just effective but exceptionally efficient</div>
                </div>
              </div>
              <div className="Effective flex items-start">
                <div className="emoji">F</div>
                <div className="content flex flex-col">
                  <div className="title">Effective and efficient</div>
                  <div className="message">Experience the power of focused learning; MindScape India streamlines your UPSC preparation, making it not just effective but exceptionally efficient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="break flex justify-center">
          <div className='h-[1px] bg-gray-500  w-3/4'></div>
        </div>
        <div className="Community">
          hello
        </div>
        <div className="break"></div>
        <div className="JournalAi"></div>
        <div className="break"></div>
        <div className="Insights"></div>
        <div className="break"></div>
        <div className="FlashNews"></div>
        <div className="footer"></div>
      </div>
    </>
  )
}