# Jacques Pariseau - Personal Website/Portfolio

![](./public/images/portfolio.png)

## [live site](https://j-par.com)

## Table of Contents

- [Overview](#overview)
- [Challenges](#challenges)
  - [Next/React](#nextreact)
  - [Animation](#animation)
  - [Design](#design)
    - [Mobile](#mobile)
    - [Tailwind](#tailwind-css)
- [Things to Add](#things-to-add)
- [Author](#author)

## Overview

Since I started to learn web development, I've thought of my portfolio as a major milestone for my journey. I wanted to save it to be the last project before I started applying to jobs. For me, this project was the highest-stakes, as it a representation of me as a developer and designer made manifest in a web app. I'm ultimately very pleased with how it came out, and I think it is a very good representation.

My portfolio was a first for me in a couple of ways: my first [Next/React](#nextreact) app and also my first [Tailwind CSS](#tailwind-css) app. I had played around with all of these briefly, but the portfolio was my first attempt at using these tools to build something completely from scratch. Despite this, it went surprisingly quickly--just over a week for full functional implementation.

## Challenges

As this app was a first in many regards, there were a lot of challenges I met along the way:

### Next/React

_updated 9 August 2023_

Initially, my portfolio was my first React app. I didn't know much about React at the time, and the structure of my app demonstrated this very clearly. I found a portfolio I liked, and I modeled the file structure off of it, not considering what my personal goals were for my portfolio. After its initial deployment, I went on to start several other React-based projects, including deploying my [yahtzee scorer](https://github.com/jacqueschuis/yahtzee-scorer), which taught me a lot and made me realize I was not using Next to its fullest potential.

As I refactored my portfolio site, I decided that treating it as a digital version of a CV with some basic interactivity was not enough. I wanted this to be a fully dynamic application, and the app router provided me the flexibility to handle the complexity of a basic MVC application quite easily. This allowed my actual app structure to be a lot cleaner, and the app as a whole looks better and runs better.

<details>
<summary>v1 - 12 June 2023 </summary>

As this was my first [Next/React](#nextreact) app, I had to shift my mindset and try to do things in a 'React-y' way. There were things that I would have been able to do pretty simply with vanilla JS, but I wanted to use React to its fullest extent. I spent a lot of time referencing docs and reading up on conventions/best practices to try to make my portfolio as successful as possible.

I understood the idea of state, and I had started implementing similar functionality in my most recent Frontend Mentor apps, but I wasn't using it to its fullest extent. I understood ternary operators, too, but I had never relied on them so heavily. I also like that I was able to eschew super long conditional statements in favor of state and `&&` operators. Everything just felt simpler and easier.

I also just found working in this way very exciting. My code came out very clean as I could move all 'complicated' bits into their own components. This felt especially refreshing coming from building [museo](https://github.com/jacqueschuis/museo) which ended up infinitely more complex and harder to read. I have a lot more confidence in my ability to easily dive back in and make edits as I continue to grow as a developer, because everything is simple and easily understood. Take my index for example:

```jsx
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

</details>

### Animation

_updated 9 August 2023_

As I've progressed as a front-end developer, I've gotten a more fully-fledged understanding of how React Spring works. A huge road-block in my initial implementation of this app was useTrail. I just did not understand how it worked or how to implement it, even though I was sure it was the solution for which I was searching.

I've now expanded my usage of React Spring to use several springs throughout the app, but my most proud accomplishment is my implementation of two different trails:

```jsx
const Trail = ({ children, delay }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    from: { y: -20, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: delay,
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div
          key={index}
          style={style}
          className="w-full flex justify-center items-center h-full"
        >
          {items[index]}
        </animated.div>
      ))}
    </>
  );
};

export default Trail;
```

<details>
<summary>v1 - 12 June 2023</summary>

I wanted the application to still feel dynamic and modern, despite its ultimate simplicity. I felt that animations were going to be a key part of accomplishing this from the beginning, but the thought of diving into an animation library scared me.

Initially, I thought I would be best served going with a lighter-weight library, so I chose Tailwind's Headless UI. I only really used the Transition component, and I was never super satisfied with the result. It ended up being quite syntax-intense for what felt like not a lot of payoff. Because of this, I decided to look at other libraries: GSAP, React Spring, Framer Motion.

I wanted something that was going to be React-specific and something that would be useful to me moving forward in my career, so I ruled out GSAP. Framer Motion likely would have been a good choice, but it seemed overly complex on a first glance, and I was wooed by React Spring's incredbily comprehensive (and user-friendly) docs and copious examples.

Getting React Spring up and running was relatively simple, thanks to their docs, but actually fine-tuning everything ended up being quite difficult. As it stands now, I am using springs to control the expanding/collapsing divs throughout the app and the rotating carets on said divs.

</details>

### Design

_updated 9 August 2023_

When I redesigned the UI of my portfolio, I wanted it to feel like a SPA while taking full advantage of Next's app router. I decided I should stick to a rigid layout:

```jsx
const Layout = ({ children, dark, active }) => {
  const [slide, slideApi] = useSpring(() => ({
    from: {
      opacity: 0,
      x: -20,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  }));

  return (
    <main className="h-screen md:p-10 p-4 w-full flex items-center home relative">
      <div className="w-full h-full content--background md:px-10 px-5 md:pb-10 pb-5 rounded-3xl shadow-2xl flex flex-col items-center relative overflow-y-auto text-blue-800">
        <Nav dark={dark} active={active} />
        <animated.div style={slide} className="w-full h-full md:px-10 px-4">
          {children}
        </animated.div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
```

With this, I gave myself a pretty strict box (literally) in which I had to place all of my content. I had to get creative with individual page layouts to keep everything totally responsive, and thanks to my increased knowledge of [tailwind](#tailwind-css), I was able to get some highly-customized layouts going.

For example, my CV page has some nested layouts, with the parent switching from grid-based rows to flex-based columns at certain breakpoints, and then the child content doing the same:

```jsx
const WorkComponent = () => {
  const WorkEntry = ({ date, title, place, location }) => {
    return (
      <div className="w-full text-center">
        <p className="text-blue-600 xl:text-lg lg:text-md md:text-sm text-xs">
          {date}
        </p>
        <p className="xl:text-2xl lg:text-xl md:text-lg font-bold">{title}</p>
        <p className="text-blue-700 xl:text-xl lg:text-lg md:text-md text-sm">
          {place}
        </p>
        <p className="text-blue-700 xl:text-lg lg:text-md md:text-sm text-xs">
          {location}
        </p>
      </div>
    );
  };
  return (
    <div className="w-full h-full md:grid md:grid-cols-3 gap-5 flex flex-col">
      <HorizontalTrail>
        {work.map((item, index) => {
          return <WorkEntry key={`ed${item.institution}${index}`} {...item} />;
        })}
      </HorizontalTrail>
    </div>
  );
};

const CVPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <Layout dark={true} active={"cv"}>
      <div className="w-full h-full flex flex-col gap-8 xl:grid xl:grid-cols-6">
        <div className="xl:h-full flex xl:flex-col xl:items-end justify-around">
          <button
            className={`xl:text-3xl lg:text-2xl md:text-1xl font-bold transition-all ${
              activeIndex === 1
                ? "xl:-translate-x-3 text-blue-600"
                : "xl:hover:-translate-x-3 hover:text-blue-600"
            }`}
            onClick={() => setActiveIndex(1)}
          >
            Profile
          </button>
          <button
            className={`xl:text-3xl lg:text-2xl md:text-1xl font-bold transition-all ${
              activeIndex === 2
                ? "xl:-translate-x-3 text-blue-600"
                : "xl:hover:-translate-x-3 hover:text-blue-600"
            }`}
            onClick={() => setActiveIndex(2)}
          >
            Education
          </button>
          <button
            className={`xl:text-3xl lg:text-2xl md:text-1xl font-bold transition-all ${
              activeIndex === 3
                ? "xl:-translate-x-3 text-blue-600"
                : "xl:hover:-translate-x-3 hover:text-blue-600"
            }`}
            onClick={() => setActiveIndex(3)}
          >
            Work
          </button>
        </div>
        <div className="xl:col-span-5 h-full flex flex-col lg:justify-center text-blue-dark">
          {activeIndex === 1 && (
            <HorizontalTrail>
              <ProfileComponent setActiveIndex={setActiveIndex} />
            </HorizontalTrail>
          )}
          {activeIndex === 2 && (
            <HorizontalTrail>
              <EducationComponent />
            </HorizontalTrail>
          )}
          {activeIndex === 3 && (
            <HorizontalTrail>
              <WorkComponent />
            </HorizontalTrail>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
```

<details>
<summary>v1 - 12 June 2023</summary>

I had many big ideas and a long wishlist for this app. Since I started learning web development, I've spent a lot of time browsing others' portfolios, seeking out elements which I wanted to incorporate into my own eventually. I knew I wanted clean and modern design. I wanted my portfolio to be less-portfolio and more-personal-website--a one-stop shop for everything about me. Because of this, there was a need for large amounts of information, but I didn't want the information to be overwhelming. I wanted the UI to be user-friendly and effortless. I had a lot of big ideas, and they were often hard to reconcile. Similar to [museo](https://github.com/jacqueschuis/museo), I feel like my background in design sets my expectations very high--sometimes higher than my techical development skills would allow. I do feel like working in [Next/React](#nextreact) helped this, as did my usage of [Tailwind](#tailwind-css).

</details>

#### Tailwind CSS

_updated 9 August 2023_

I have gotten a lot faster with Tailwind, and it allowed me to do some pretty complex layout changes to keep my design totally responsive. After finishing the Tailwind team's [Refactoring UI](https://www.refactoringui.com/), I've changed over to a more systematic design approach. This included changing my color scheme from a simple light/default/dark to a more full system for my primary (blue) and secondary (orange):

```json
theme: {
    colors: {
      blue: {
        100: "hsl(173, 85%, 90%)",
        200: "hsl(173, 78%, 80%)",
        300: "hsl(173, 73%, 70%)",
        400: "hsl(173, 65%, 60%)",
        500: "hsl(173, 63%, 50%)",
        600: "hsl(173, 58%, 39%)",
        700: "hsl(182, 64%, 24%)",
        800: "hsl(190, 78%, 15%)",
        900: "hsl(197, 85%, 10%)",
      },
      orange: {
        100: "hsl(50, 94%, 90%)",
        200: "hsl(46, 84%, 80%)",
        300: "hsl(40, 79%, 72%)",
        400: "hsl(32, 74%, 70%)",
        500: "hsl(27, 87%, 67%)",
        600: "hsl(20, 76%, 61%)",
        700: "hsl(15, 76%, 43%)",
        800: "hsl(13, 85%, 30%)",
        900: "hsl(13, 90%, 16%)",
      },
    }
}
```

<details>
<summary>v1 - 12 June 2023</summary>

When I started coding, I was entirely dependent on Bootstrap, and in recent projects, I've eschewed my reliance on frameworks and focused entirely on writing custom CSS. I feel like I've improved my CSS immensely, and this helped significantly when I decided to try Tailwind, which--in my opinion--as a utility-based framework, requires stronger CSS foundation than Bootstrap does. I found Tailwind to be faster than Bootstrap for me, and I will definitely be using it in the future. The classes are typically only effecting one CSS property, so I also feel like it will integrate better with custom CSS in more complicated apps where this is necessary--there won't be a need to consider overriding Tailwind's classes as they are quite simple.

</details>

#### Mobile

_updated 9 August 2023_

I wrote previously of my struggles with making things clear, and I thankfully avoided a lot of these problems by grouping my information more clearly. I followed a more MVC standard, which allowed me to have broad overviews and then details pages with more granular levels of information. This meant that I was more-so considering layout when it came to mobile than how to clarify things, which made the whole process a lot smoother.

<details>
<summary>v1 - 12 June 2023</summary>

I struggled significantly with how to make things mobile-friendly. I went through about 5 iterations of how to handle the expandable descriptions on my entries. They all worked well on desktop, relying on hover effects, but as I sent these versions out to friends to test, almost none of them realized that these elements were interactive as they were viewing the site mostly on mobile. Being cognizant of the fact that many people who will view this app will be doing so via mobile, it was very important to me to find a solution that was clear on both desktop and mobile, and also met my quite-strict design plan. In the end, I went with the pill buttons that you see on the site now, and I think these add a nice pop of color and are clearly clickable on all devices.

</details>

## Things to Add

_updated 9 August 2023_

- [ ] Blog

  - I have played around with MDX and would like to institute a blog portion of my portfolio/personal site. I would like to think that I am a good writer, and I spend a lot of time writing these very in-depth readmes on all of my projects. I think I would be able to help others learn a thing or two if this was in an SEO optimized portion of my website, though, and it would also be a great record for me as I continue to learn and grow as a developer.

- [x] Animation

  - I was able to implement the types of useTrail animations that I wanted previously.
  - _12 June 2023:_ I have implemented better-looking animations with my usage of React Spring, but I have only begun to scratch the surface on the library. I want to dive deeper and get into the useTrail hook in order to animate the hero text on load, but I have yet to find a good way to implement this. React spring has [an example](https://codesandbox.io/s/yps54) in their docs that feels like almost exactly the thing for which I'm looking--or at least like a good starting point, but again, I have so-far been unable to incorporate this into my portfolio.

- [x] Column behavior

  - I eschewed this sort of column handler altogether by breaking up my information into separate routes. I also switched to using `grid` and `grid-template-cols` when necessary, which made things work more similarly to Bootstrap, which I do think still has the upper hand when it comes to handling column layouts.
  - _12 June 2023:_ I am ultimately not thrilled by Tailwind's column handler. It is simpler, yes, but I find myself missing the direct control that I would have with Bootstrap columns. I don't like the auto movement of the columns, and I think I would prefer to implement some sort of draggable function through React Spring, or possibly treat each of the categories as its own mini app, with a window for mounting each entry on click, and a list of all the available entries off to the side.

## Author

This website was created from scratch by me, [Jacques Pariseau](https://j-par.com).
