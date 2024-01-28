import PublicPosts from '../Components/PublicPosts/PublicPosts'
import Navbar2 from '../Components/Navbars/Navbar2'
import { Nav2 } from '../Components/Navbars/Navbars'
export default function Resource() {
  return (
    <>
      <Nav2 />
      <PublicPosts userId = "" isprivate = "false" defaultLimit=""/>
    </>
  )
}
