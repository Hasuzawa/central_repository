## Central Repository

This repository summarizes my other projects. It has a brief description for every project and links
to their page or repository. The project is considered completed on 9/15/2021.

[The project is deployed on Vercel.](https://central-repository.vercel.app/)

## Features

This project features:
- Next.js, Tailwind CSS. They have great synergy.
- Dynamic routing, static generation. Any data that is static can and should be fetched and done at build time.
- Automatically generated Table of Content and project feeds.
- Dark mode. Less eye fatigue, heat and energy for the same experience.
- Figma prototype. First time using Figma. It has list, scrolling, page transition and interactive button.
- cypress testing. I have used Jest before but cypress is even more powerful.
- High accessibility. The whole site can be navigated by [tab] and [enter/return] key alone.
- CICD. GitHub actions for automated cypress testing and deployment.
- Custom scrollbar. Minimalistic style. Most CSS properties have no effect. I shall see if I can find way to use it to its extreme in the future.

## Wireframe/Prototype

[Figma prototype](https://www.figma.com/proto/AIaNib5prSUpq8ATRSzYtx/repository-web-app?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1)<br />
Not very satisfied but I improved my practices a lot during trial and error so the next one is going to be much better.

## Technical Commentary
<details close>
<summary>details</summary>
<ul>
    <li>
        This time I used another CSS framework (Tailwind). I have noticed the biggest advantage of using a CSS framework is not because it can accomplish more than vanilla CSS, but to enforce a particular practice and styling so that the code can be understood by someone who has not
        worked on it. This is not quite relevant here but it is definitely a great plus in collaboration or real workplace.
    </li>
    <li>
        During the implementation of dark mode I switched from using hooks, to localStorage, and finally to context at a top-level component. It ought to be site-wide even when local storage is not allowed. Then, I refactored it multiple times, it is not difficult to implement dark mode, but to keep it maintainable without transversing the whole tree takes some work.
    </li>
    <li>
        Pre-rendering done. I can see that this feature is going to be decisive for large sites that depends on a lot of API.
    </li>
    <li>
        There seems to be a lot of directories for quite a simple app, but I want to keep this scalable.
        I know from first-hand experience that as an app grows, it becomes more and more difficult to move and modify files without breaking things.
    </li>
    <li>
        Set up CICD for the first time. With a few lines of code I can test the website on multiple OS and browser.
    </li>
    <li>
        After numerous attempt, I finally fixed a layout bug that only occurs on phone. It seems that the viewport of browser on phone is very inconsistent as phone has their own footer with page transition, bookmarks etc. They woud cause a flex-based layout collapse. I had to brute-force a position:fixed/absolute with margin/padding solution.
    </li>
    <li>
        Custom scrollbar done. Nowadays it is supported by most browsers so it is viable to use on production build.
    </li>
</ul>
</details>