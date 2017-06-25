import React, { Component } from 'react';

import LinhImg from '../images/TinaLinh.JPG'
import GinaImg from '../images/TinaGina.JPG'
import JenImg from '../images/TinaJenN.JPG'
import ShteenImg from '../images/TinaShteen.JPG'

import DanielImg from '../images/daniel.JPG'
import BmaImg from '../images/bma.JPG'
import HsuKenImg from '../images/hsuken.JPG'
import BenImg from '../images/ben.JPG'
import GildasImg from '../images/gildas.JPG'

function Gang(props) {
    const name = props.name;
    const img = props.img;
    const description = props.description
    return (
        <div className="gang">
          <p className="gangName">{name}</p>
          <p className="gangDescription">{description}</p>
        </div>
    )
}

function Portrait(props) {
    const name = props.name;
    const img = props.img;

    return (
      <div className="portrait">
        <img src={img} className="orientimg" width="200" />
        <div className="text-middle">
            <p>{name}</p>
        </div>
      </div>
    )
}

function BridesmaidsPortraits(props) {
    return (
      <div>
        <div className="image-library">
          <Portrait img={LinhImg} />
          <Portrait img={GinaImg} />
          <Portrait img={JenImg} />
          <Portrait img={ShteenImg} />
        </div>
      </div>
    )
}

function GroomsmenPortraits(props) {
    return (
      <div>
        <div className="image-library groomsmen-portaits">
          <Portrait img={HsuKenImg} rotate="true" />
          <Portrait img={BmaImg} />
          <Portrait img={DanielImg} />
          <Portrait img={BenImg} rotate="true" />
          <Portrait img={GildasImg} />
        </div>
      </div>
    )
}

class Crew extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-left">
            <h1>Bridesmaids</h1>
            <BridesmaidsPortraits />
            <div className="row">
              <div className="col-md-6">
                <Gang name="Linh “Ling Ling” Nguyen, Maid of Honor" description="According to Facebook, Ting Ting and I have been friends since 2010. However, our friendship didn’t fully blossom into a beautiful peony until a few years ago. I met Tina through my husband Ben who had met Tina back in college. After Ben and I started dating, I started to hang out with the crew and they’ve come to adopt me in seeing that I had similar passions of theirs: food, crafting, and shopping. The name “Ting Ting and Ling Ling” evolved over a trip to Portland when we saw the Panda truck drive by. At that moment, Hsu Han said, “Hey, it’s the Ling Ling Potsticker Panda Truck!” From that moment on, I knew that Ling Ling had to have her mafia crew and that crew would not be a crew without her Ting Ting, Hsu Hsu, Chao Chao and many others. But Ting Ting and Hsu Hsu definitely stuck. Throughout our friendship, I’ve always known that I could count on Ting Ting to always have a good time, always be down to sample a smorgasbord of food selections, always be game to go to Drive Thru Boba and to shop till we drop. I am so excited to see her fulfill her dreams by marrying the guy that will stick with her while she spends 2 days finishing her drinks! I just cannot wait! ^_^" />
              </div>
              <div className="col-md-6">
                <Gang name="Gina “Ina’s” Wang, Bridesmaid" description="I can’t remember the exact moment Tina and I first met in college, but I think I made a great first impression. She would later tell me that she was frightened by my spirited freshman personality. But it wasn’t long until she joined the dark side, and we became the unstoppable “Ina’s” with our witty zingers, which were mostly directed at the guys around us. (Nice neon shirt, Hsu Han...) We remained close after college with her periodic work trips to LA and my frequent visits back to Seattle. Tina’s the easiest person to talk to and I’m so grateful she has always been there for me to lean on and laughing with. During our friend trip to Puerto Rico, where many amazing memories were made, Tina told me that she started dating this younger guy that wears really tight t-shirts. She wouldn’t tell me his name, but it didn’t take long for me to crack her when I asked, “Is it Hsu Han?” And five years later, they’re getting married! Tina’s the best Aunt to my kids and although Hsu Han wouldn’t hold any of them, he did help Aria build her Lego that one time. I love the time we spend together rock climbing. Her amazing pretzel/yoga moves inspire me and she always encourages me to reach for it (Hsu Hsu comes too and he’s alrights I guess... he encourages me to eat tacos). I adore these two and I’m so grateful to be a part of their special day. Cheers to the next adventure in life (now Hsu Han has to take all your shots and drinks)." />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Gang name="Jennifer “Jen” Nguyen, Bridesmaid" description="I met Tina in college through friends in TSA. It was after college though, that we became closer and our friendship helped us enjoy the ups and endure the downs of our lives. I trusted her with my life when she was first driving to get her license. She stood beside me on my wedding day. She almost sacrificed her arms for our friendship on a kayaking trip to the San Juan islands one summer. She met me in Arizona and Utah on my road trip home and we braved Angels Landing, explored what was just around the river bend in the Narrows, and marveled at the sunset at Horseshoe Bend. She is always there to listen, hug, and give honest advice. She is a true friend - she makes me laugh, cries when her friends are hurting, seeks truth in her relationships and friendships and beauty in the world. I know we will be lifelong friends. I'm so thrilled to be by her side on her special day and I can hardly wait for more bonding adventures with this girl and her husband in the years to come. Love her lots!!" />
              </div>
              <div className="col-md-6">
                <Gang name="Christine “Shteen” Nguyen, Bridesmaid" description="Tina and I have been friends for so long, I consider her my 2nd sister (we regularly find ourselves twinning due to our duplicate closets, which doesn't happen with my actual twin). We met in college and kept in touch despite my moving away for 7 years, and after I moved back, it was like I never left. She is so fun to be around, but can listen and be someone to lean on when it counts. My favorite memory of us is when we shared a romantic kayak in a bioluminescent bay under the stars in Puerto Rico, but we continue to make so many new ones. She has schooled me on the ways of the eastside after I moved from Seattle to Redmond, and shown me the ropes while rock climbing, hiking, paddle boarding, and snowshoeing. Tina is adventurous, loyal, hilarious and beautiful in one petite package, and I'm incredibly grateful for our close friendship. Hsu Han is one lucky guy because he gets to share future romantic kayak tours with Tina! Teasing aside, they're just perfect together. I'm honored to be at Tina's side to watch them seal the deal. Love you both!" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Gang name="Joann “Joey” Ware, Bridesmaid" description="Babies." />
              </div>
            </div>
            <div className="groomsmen">
                <h1>Groomsmen</h1>
                <GroomsmenPortraits />
                <div className="row">
                  <div className="col-md-6">
                    <Gang name="Hsu Ken Ooi, Best Man" description="If the name didn't give it away (you'd be surprised how many times we've been asked us how we know each other), I'm Hsu Han's older brother. That basically means we've played more video games together than most people have... well, done anything together. In high school, there was a video game tournament and the only rule (it was actually written down) was we weren't allowed to be on the same team. Our teams met in the finals. I hope he makes Tina as good at video games as he's made me." />
                  </div>
                  <div className="col-md-6">
                    <Gang name="Brian Ma, Groomsman" description="Hsu Han and I started our relationship in the break room at Zillow - playing endless hours of ping-pong and guitar hero. Break room conversations soon led to long intellectual conversations about SimCity, Diablo, and Starcraft strategies. Somehow all those strategic conversations led to founding a company together, and the rest is history. If it wasn't for Hsu Han, I would've never learned how to be super cheap (he calls it 'efficient') in every game I play. Including the startup game. I’m still waiting for the day when Hsu Han and I create a predictive pricing marketplace for virtual goods in Diablo. Definitely the next billion dollar idea." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Gang name="Daniel Ooi, Groomsman" description="I met Hsu-Han visiting Portland when I was growing up. I didn’t know who he was, but it seemed like he enjoyed playing video games, so I thought he was a pretty cool guy. He didn’t seem very good, but that’s okay, I’d teach him how to play games like a pro. As we got older, I would get the chance to hang out with him pretty often. Whether it was PAX, random Seattle/Vancouver trips, boba runs, or when he was in his “keep getting them checks” phase, I’d see Hando more and more. It was only recently that I realized we shared something more important than the same family blood: our love for “boom”ing life. As we matured, we’ve grown from mindlessly getting potions in Final Fantasy to flexing in our tight shirts. Whether it’s boom’ing the fact we got 4 milk teas in one day or boom’ing at Lucky Lion losing credit card roulette, we never fail to celebrate the hilarious situations we get ourselves into. It’s telling when a group of family and friends begin to talk about you when they’re around you; it shows the impact your humor, style, and attitude have on those around you. And now it is time for us to celebrate you once more with one of the biggest boom lah’s of them all, getting married (read: finding someone who will put up with your endless amount of jokes). Hsu-Han, I am glad I get to share in your special day and here’s to many more booms in your life. #BoomLah" />
                  </div>
                  <div className="col-md-6">
                    <Gang name="Ben Chao, Groomsman" description="Hsu Han and I go back to the day we were born to the Horde. We started out as lowly peons but as we hunted boars and scorpions we became stronger and were soon ready to fight the Burning Legion. As we gathered our weapons and armor we prepared for impending battle. Hsu Han lead the charge and I followed, soon we were slashing through the front lines. He begins drawing aggro the enemies converge on his position. I try to help fend them off and then I realized, why am I attacking? I'm a healer! By that time it was too late, Hsu Han was over run and all I hear is, Ben what are you doing? I laugh and then I wake up. It was all a dream. I've been told that I need to put together a bio. How do I know Hsu Han? Well we met on a chair lift and he introduced himself, hi I'm Hsu Han and I was like well that's interesting do you know a guy named Hsu Ken? Turns out he did know Hsu Ken, who would have thought they are brothers. From that day forward we were the best of friends, we would hold hands and frolics through the fields of golden flowers chasing rainbows looking for pots of gold. We often join the kings and queens of worlds of old eating lavish dinners. It's a beautiful thing. I admire his tight shirts and charming smile. Bio complete!" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Gang name="Gildas Cheung, Groomsman" description="Hsu-Han and I knew each other back in college and the first few encounters were fuzzy. I remembered there was a time when we were at Gaswork Park and he used two soccer balls as his man boobs. Then he and I bonded over our mutual love for soccer. Trying to get better, he dragged me go workout with him and run soccer drills till I’m a broken man. So why am I chosen as one of his groomsmen? I think its his way of saying ‘my b’ for all those soccer drills he ran…oh, and THAT time when he was my diving buddy... but that’s another story..." />
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Crew;
