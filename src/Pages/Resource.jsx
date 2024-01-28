import PublicPosts from '../Components/PublicPosts/PublicPosts'
import Navbar2 from '../Components/Navbars/Navbar2'
import { Nav2 } from '../Components/Navbars/Navbars'
export default function Resource() {
  return (
    <>
      <div className="sticky top-0 overscroll-contain z-20">
        <Nav2 />
      </div>
      <PublicPosts userId="" isprivate="false" defaultLimit="" />
    </>
  )
}
