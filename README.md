## Central Repository

This repository summarizes my other projects. It has a brief description for every project and links
to their page or repository.

## Features

This project features:
- Next.js, Tailwind CSS.
- dynamic routing, static generation. Any data that is static can and should be fetched and done at build time.
- automatically generated Table of Content. 
- dark mode.
- localStorage. Likely an overkill for what can be done in one click.

## Technical Commentary
<details close>
<summary>details</summary>
<ul>
    <li>
        This time I used another CSS framework (Tailwind). I have noticed the biggest advantage of using a CSS framework is not because it can accomplish more than vanilla CSS, but to enforce a particular practice and styling so that the code can be understood by someone who has not
        worked on it. This is not quite relevant here but it is definitely a great plus in collaboration or real workplace.
    </li>
    <li>
        during the implementation of dark mode I switched from using hooks, to localStorage, and finally to context at a top-level component. It ought to be site-wide even when local storage is not allowed.
    </li>
    <li>
        pre-rendering done.
    </li>

    
</ul>

</details>
