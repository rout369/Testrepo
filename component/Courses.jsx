import React from 'react'
//import test1 from '../image/Background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
//import {faDiscord,faTwitter,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';


function Courses() {
  return (
    <div className='raw' id='services'>
        <h1>COURSES</h1>
    
<div className='body'>
    <input type="checkbox" id="checkbox-cover"/>
    <input type="checkbox" id="checkbox-page1"/>
    <input type="checkbox" id="checkbox-page2"/>
    <input type="checkbox" id="checkbox-page3"/>
    <div class="book">
        <div class="cover">
            <label for="checkbox-cover"></label>
        </div>
        <div class="page" id="page1">
            <div class="front-page">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!</p>
                <label class="next" for="checkbox-page1">
                <FontAwesomeIcon icon={faChevronRight}/>
                </label>
            </div>
            <div class="back-page">
                
                <label class="prev" for="checkbox-page1">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </label>
            </div>
        </div>
        <div class="page" id="page2">
            <div class="front-page">
                <h2>Page 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!</p>
                <label class="next" for="checkbox-page2">
                <FontAwesomeIcon icon={faChevronRight}/>
                </label>
            </div>
            <div class="back-page">
                
                <label class="prev" for="checkbox-page2">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    </label>
            </div>
        </div>
        <div class="page" id="page3">
            <div class="front-page">
                <h2>Page 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!</p>
            </div>
        </div>
        <div class="back-cover"></div>
    </div>

</div>
</div>
  
  )
}

export default Courses

