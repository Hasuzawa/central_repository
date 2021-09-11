## Central Repository

This repository summarizes my other projects. It has a brief description for every project and links
to their page or repository.

## Features

This project features:
- Next.js, Tailwind CSS.
- dynamic routing, static generation. Any data that is static can and should be fetched and done at build time.
- automatically generated Table of Content and project feeds.
- dark mode. Less eye fatigue, heat and energy for the same experience.
- localStorage. Likely an overkill for what can be done in one click.
- Figma prototype. First time using Figma. It has list, scrolling, page transition and interactive button.

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
        during the implementation of dark mode I switched from using hooks, to localStorage, and finally to context at a top-level component. It ought to be site-wide even when local storage is not allowed. Then, I refactored it multiple times, it is not difficult to implement dark mode, but to keep it maintainable without transversing the whole tree takes some work.
    </li>
    <li>
        pre-rendering done. I can see that this feature is going to be decisive for large sites that depends on a lot of API.
    </li>
    <li>
        There seems to be a lot of directories for quite a simple app, but I want to keep this scalable.
        I know from first-hand experience that as an app grows, it becomes more and more difficult to move and modify files without breaking things.
    </li>
    
    
</ul>

</details>
