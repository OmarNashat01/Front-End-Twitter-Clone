import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import WidgetbarCSS from './Widgetbar.module.css'
import FollowCard from './FollowCard/FollowCard'

function Widgetbar({showSearchbar=true}) {
  return (
    <div  className={WidgetbarCSS.widget__divider}>
        <div className={WidgetbarCSS.widget__padding}>
          {showSearchbar &&
            <div className={WidgetbarCSS.topNavbar}>
              <SearchBar />
            </div>
          }
            <h2 className={WidgetbarCSS.widget__whotofollowbox}>Who to follow</h2>
            <FollowCard name="Ahmed El Saka" tag="@ElSaka"/>
            <FollowCard name="Zakaria" tag="@Zakaria" img="https://fmdataba.com/images/p2/542811.png" about="WaPo columnist. Host of CNN's GPS, Sundays @ 10am and 1pm ET in the US. Order my book 'Ten Lessons for a Post-Pandemic World' " followers='75000' following='600'/> 
            <FollowCard name="Amir Karara" tag="@Karara" img="https://see.news/wp-content/uploads/2021/07/19_2019-637093272003036987-303.jpg" about="Egyptian Actor" followers='80501' following='51400' verified={false}/>
            <FollowCard name="Mona Zaki" tag="@Zaki" img="https://see.news/wp-content/uploads/2019/10/Mona-Zaki.jpg" about=" I DREAM" followers='691050' following='6010'/>
            <FollowCard name="Ahmed Helmy" tag="@Helmy" img="https://www.celebrityborn.com/admin/assets/images/people/ZDfuIt5OmHZUcDB06wYp_2017_11_19.jpg" about="Fanan" followers='12540' following='96000' verified={false}/> 
            <FollowCard name="Adel Emam" tag="@Adel" img="https://pbs.twimg.com/profile_images/1394120275772461057/uU7KRAaZ_400x400.jpg" about="لأ" followers='90500' following='500'/> 
            <FollowCard name="Hama2i" tag="@Hama2i" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h85pVQRJ1to9ui9kCRbPH1Dn5hxB7AC4jQ&usqp=CAU" about="Best Middle Eastern Artist by MTV, BAMA, Best Selling Middle Eastern Artist by EMI, First 
@tourncure
 Ambassador in the Middle East." followers='50040' following='7000'/> 
            <FollowCard name="Abo Hashima" tag="@Hashima" img="https://www.celebrityborn.com/admin/assets/images/people/ahmed_abou_hashima_316.jpg" about="WORK HARD" followers='952300' following='432' verified={false}/>  
            <p className={WidgetbarCSS.widget__showmore}>Show more</p>
        </div>
    </div>
  )
}

export default Widgetbar