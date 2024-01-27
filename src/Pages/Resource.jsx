import PublicPosts from '../Components/PublicPosts/PublicPosts'
import Navbar2 from '../Components/Navbar2'
export default function Resource() {
  return (
    <>
      <Navbar2 />
      <PublicPosts userId = "" isprivate = "false" defaultLimit=""/>
    </>
  )
}
