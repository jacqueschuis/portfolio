# Jacques Pariseau - Personal Website/Portfolio

![](./public/images/portfolio.png)

##[live site](https://j-par.com)

## Table of Contents

- [Overview](#overview)
- [Challenges](#challenges)
    - [Next/React](#nextreact)
    - [Design](#design)
        - [Mobile](#mobile)
        - [Tailwind](#tailwind-css)
- [Things to Add](#things-to-add)
- [Author](#author)


## Overview

Over the past year in which I've learned web development, I've thought of my portfolio as a major milestone for my journey. I wanted to save it to be the last project before I started applying to jobs. For me, this project was the highest-stakes, as it a representation of me as a developer and designer made manifest in a web app. I'm ultimately very pleasedd with how it came out, and I think it is a very good representation.

My portfolio was a first for me in a couple of ways: my first [Next/React](#nextreact) app and also my first [Tailwind CSS](#tailwind-css) app. I had played around with all of these briefly, but the portfolio was my first attempt at using these tools to build something completely from scratch. Despite this, it went surprisingly quickly--just over a week for full functional implementation.



## Challenges

As this app was a first in many regards, there were a lot of challenges I met along the way:

### Next/React

As this was my first [Next/React](#nextreact) app, I had to shift my mindset and try to do things in a 'React-y' way. There were things that I would have been able to do pretty simply with vanilla JS, but I wanted to use React to its fullest extent. I spent a lot of time referencing docs and reading up on conventions/best practices to try to make my portfolio as successful as possible.

I understood the idea of state, and I had started implementing similar functionality in my most recent Frontend Mentor apps, but I wasn't using it to its fullest extent. I understood ternary operators, too, but I had never relied on them so heavily. I also like that I was able to eschew super long conditional statements in favor of state and `&&` operators. Everything just felt simpler and easier.  

I also just found working in this way very exciting. My code came out very clean as I could move all 'complicated' bits into their own components. This felt especially refreshing coming from building [museo](https://github.com/jacqueschuis/museo) which ended up infinitely more complex and harder to read. I have a lot more confidence in my ability to easily dive back in and make edits as I continue to grow as a developer, because everything is simple and easily understood. Take my index for example:

```
 <Head>
    <title>Jacques Pariseau</title>
</Head>
<div
    id="top-section"
    className="md:px-16 px-5 flex flex-col bg-white relative shadow-2xl"
    >
    <Nav />
    <Hero />
    <About />
    <Portfolio />
    <Education />
    <Work />
</div>
<div id="bottom-section" className="relative">
    <Contact />
</div>
<ScrollToTop />
```

I also feel very strongly that the ethos behind React--building reusable components--is much more in-line with my background as a designer. Building the components (which, in this case, were admittedly quite simple) was easy, and then I could devote a lot of time to styling and the actual UI without needing to worry about impacting functionality, as each component is self-contained. I fully plan to build my next applications using React, although I'm planning to play around with a few different frameworks besides Next JS before settling on one.

### Design

I had many big ideas and a long wishlist for this app. Since I started learning web development, I've spent a lot of time browsing others' portfolios, seeking out elements which I wanted to incorporate into my own eventually. I knew I wanted clean and modern design. I wanted my portfolio to be less-portfolio and more-personal-website--a one-stop shop for everything about me. Because of this, there was a need for large amounts of information, but I didn't want the information to be overwhelming. I wanted the UI to be user-friendly and effortless. I had a lot of big ideas, and they were often hard to reconcile. Similar to [museo](https://github.com/jacqueschuis/museo), I feel like my background in design sets my expectations very high--sometimes higher than my techical development skills would allow. I do feel like working in [Next/React](#nextreact) helped this, as did my usage of [Tailwind](#tailwind-css). 


#### Tailwind CSS

When I started coding, I was entirely dependent on Bootstrap, and in recent projects, I've eschewed my reliance on frameworks and focused entirely on writing custom CSS. I feel like I've improved my CSS immensely, and this helped significantly when I decided to try Tailwind, which--in my opinion--as a utility-based framework, requires stronger CSS foundation than Bootstrap does. I found Tailwind to be faster than Bootstrap for me, and I will definitely be using it in the future. The classes are typically only effecting one CSS property, so I also feel like it will integrate better with custom CSS in more complicated apps where this is necessary--there won't be a need to consider overriding Tailwind's classes as they are quite simple.

#### Mobile

I struggled significantly with how to make things mobile-friendly. I went through about 5 iterations of how to handle the expandable descriptions on my entries. They all worked well on desktop, relying on hover effects, but as I sent these versions out to friends to test, almost none of them realized that these elements were interactive as they were viewing the site mostly on mobile. Being cognizant of the fact that many people who will view this app will be doing so via mobile, it was very important to me to find a solution that was clear on both desktop and mobile, and also met my quite-strict design plan. In the end, I went with the pill buttons that you see on the site now, and I think these add a nice pop of color and are clearly clickable on all devices.


## Things to Add

My portfolio is functionally complete. Everything works and looks good, but I do think there is room for growth:

1. Animation/Transitions

I have incorporated basic transitions through Headless UI into many of the dynamic elements, but I would like to incorporate a larger animation library to make the entire app feel more dynamic. I'd like the expandable divs to grow as opposed to just appearing larger/smaller. I'd like some sort of hover animation on the hero text. I'd potentially like a parallax effect on the entries. I've experimented with a couple of different ones, but I'm pushing this addition off until I've done more research/testing. GSAP feels like it might be the most likely contender, but I'm considering Framer Motion and React Spring as well.

## Author

This website was created from scratch by me, [Jacques Pariseau](https://j-par.com).
