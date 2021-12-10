# what is your story?

## Overview

_**what is your story?** is a creative writing app that allows users to find inspiring writing prompts, write down their work, and save it._


<br>

## MVP

> **what is your story?** is a full CRUD app. With authentication, users can sign up, sign in, and sign out. Only verified users will be able to view or create a prompt, as well as create and save, edit, or delete their own work/writing response. 

**Server (Back End)**
- Have a RESTful JSON API.
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Build a database with at least 2 tables, with association
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables

**Client (Front End)**
- Have a working, interactive React app, built using npx create-react-app.
- Have at least 8 separate, rendered components in an organized and understandable React file structure.
- Utilize functional or class React components appropriately.
- Utilize state and props in components efficiently.
- Use only React for DOM Manipulation.
- Consume data from Ruby on Rails API, and render that data in components.
- Utilize React Router, for client-side routing.
- Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.

**Styling**
- Be styled with CSS.
- Use Flexbox or Grid in layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).
- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow camelCase, snake_case, and kebab-case convention.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes and comments are okay).

<br>

### Goals

- _Full CRUD for user's written prompt responses_
- _Create new prompts, users can only edit or delete prompts they created_
- _Render all components to DOM_
- _Fully functional backend with authentication_
- _CSS styling, and Material UI_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|      Rails       | _Lorem ipsum dolor sit amet, consectetur._ |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD



- Desktop Landing

![landing](https://imgur.com/a/0BkSY9b)

- Ipad Landing

![landing](https://imgur.com/a/OSdO0Ie)

- Mobile Landing

![landing](https://imgur.com/a/5blilst)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/18mtyR2v5RfSkYkoxOhv_HV4wj5FxWcND/view?usp=sharing)
<br>

***

## Post-MVP

- _Have a section for all users prompts and one for current users saved prompts and writing_
- _Utilize Material UI for forms_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
