import React from 'react'
// Story of sticky:
// the div which is sticky should have two things, height (e.g. h-[100vh]) and a top-0 (these 0, 24, 28 are from the top point of the view) CSSLayerStatementRule, which makes it sticky on the top till the parent is in view, else it will become sticky to HTML document
export default function Garage() {
  return (
    <>
      <div className="header px-10 border border-black flex justify-between items-center w-full h-24">
        <a className="logo w-40 h-auto" href="/">
          <img className='hover:cursor-pointer' src="./img/logo.png" alt="Logo" />
        </a>
        <a className="mr-5" href="/">
          riziuzi
        </a>
      </div>
      <div className='main_container flex justify-center items-start'>
        <div className='leftSideBar w-1/5 top-0 h-[calc(100vh)] sticky overflow-y-scroll overscroll-auto flex-col hidden border border-black sm:flex'>
          <div className='left1 border border-black px-10'>MindScape India, is a great community of 1,284 developers.</div>
          <br />
          <div className="left2 border border-black px-10 flex flex-col">
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='left2_1'>Content</div>
            <div className='border border-gray-400 -ml-4 w-64'></div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
            <div className='left3_1'>Content2</div>
          </div>
        </div>

        <div className='mainBar h-[2000px] border border-red-500 min-h-full w-1/2'>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
      
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div><div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
          <div className='card border border-red-600 h-52'>
            <div className='card_header border border-red-600 flex' >
              <div className="profile w-10 border border-red-600">P</div>
              <div className="name_postTime flex flex-col flex-1 border border-red-600">
                <div className="name border border-red-600">riziuzi</div>
                <div className="postTime border border-red-600">3 hours ago</div>
              </div>
            </div>
            <div className='cardTitle border border-red-600'>This is a guide for all of you, Aspirants, so be ready for the greates journey!</div>
            <div className='cardTags border border-red-600'>#UPSC #masti</div>
            <div className="interacations border border-red-600 flex flex-1 justify-between">
              <div className="commentsLikesSave border border-red flex">
                <div className="comments w-10 border border-red-600">C</div>
                <div className="Likes w-10 border border-red-600">C</div>
                <div className="Save w-10 border border-red-600">C</div>
              </div>
              <div className='interactedProfiles border border-red-600'>rizi, userId1</div>
            </div>
          </div>
        </div>

        <div className="rightSideBar sticky top-0 h-[calc(100vh)] overflow-y-scroll overflow-auto border hidden border-blue-900 flex-col min-h-full w-1/5 md:flex">
          <div className="contributions border border-blue-900 flex flex-col">
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
          </div>
          <br />
          <div className="other border border-blue-900 flex flex-col">
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
            <div className="contribution1 border-blue-900">Conribution neded this this this this this thisthis this this this this this</div>
          </div>
        </div>
      </div>
    </>
  )
}

// ting ot do:

// 1) logo in .svg